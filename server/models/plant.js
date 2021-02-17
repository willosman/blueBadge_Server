module.exports = (sequelize, DataTypes) => {
    const Plants = sequelize.define("plants", {
        trefle_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        common_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        scientific_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })

    return Plants;
}

