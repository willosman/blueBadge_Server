let express = require("express")
let router = express.Router()
// let validateSession = require("../middleware/validate-session")
let Plants = require("../db").import("../models/plant")

router.post("/", (req, res) => {
    const plantEntry = {
        trefle_id: req.body.plant.trefle_id,
        common_name: req.body.plant.common_name,
        scientific_name: req.body.plant.scientific_name,
        image_url: req.body.plant.image_url,
        notes: req.body.plant.notes
    }
})