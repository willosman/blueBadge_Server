let express = require("express")
let router = express.Router()
const validateSession = require('../middleware/validate-session');

const Plants = require("../db").import("../models/plant")

/*CREATE A PLANT */
router.post("/", validateSession, (req, res) => {
    const plantEntry = {
        trefle_id: req.body.trefle_id,
        common_name: req.body.common_name,
        scientific_name: req.body.scientific_name,
        image_url: req.body.image_url,
        notes: req.body.notes,
        owner_id: req.user.id
    }
    Plants.create(plantEntry)
    .then(plants => res.status(200).json(plants))
    .catch(err => res.status(500).json({error: err}))
})

/*GET ALL PLANTS BY MINE */

router.get('/', validateSession, (req, res) => {
    let userid = req.user.id 
    Plants.findAll({
        where: {owner_id: userid}
    })
    .then(plants => res.status(200).json(plants))
    .catch(err => res.status(500).json({error: err}))
})

/*GET PLANTS BY ID */
router.get('/:id', function(req, res) {
    let id = req.params.id;
    Plants.findAll({
        where: {id: id}
    })
    .then(plants => res.status(200).json(plants))
    .catch(err => res.status(500).json({error: err}))
});

/*UPDATE PLANTS BY USER */
router.put('/:id', validateSession, function(req, res){
    const updatePlantEntry = {
        trefle_id: req.body.trefle_id,
        common_name: req.body.common_name,
        scientific_name: req.body.scientific_name,
        image_url: req.body.image_url,
        notes: req.body.notes
    }
    const query = {where: {id: req.params.id, owner_id: req.user.id}}

    Plants.update(updatePlantEntry, query)
    .then((plants) => res.status(200).json(plants))
    .catch((err) => res.status(500).json({error: err}))
});

/*DELETE PLANTS */
router.delete('/:id', validateSession, (req, res) => {
    const query = {where: {id: req.params.id, owner_id: req.user.id}};
    Plants.destroy(query)
    .then((response)=>  
    res.status(200).json({
    message: "Plant entry has been deleted",
    }) 
)
.catch((err) => res.status(500).json({error: err}));
});

module.exports = router