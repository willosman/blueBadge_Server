module.exports = (sequelize, DataTypes) => {
    const Plants = sequelize.define("plants", {
        trefle_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        common_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        scientific_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image_url: {
            type: DataTypes.STRING(2000),
            allowNull: true
        },
        notes: {
            type: DataTypes.STRING(2000),
            allowNull: true
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })

    return Plants;
}

