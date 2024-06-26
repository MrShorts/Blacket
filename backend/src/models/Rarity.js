import { DataTypes } from "sequelize";

export default {
    name: "Rarity",
    attributes: {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        packOpeningAnimation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["uncommon", "rare", "epic", "legendary", "chroma"]]
            }
        },
        experience: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        extraWaitingTime: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    options: {
        indexes: [{ unique: true, fields: ["name"] }],
        tableName: "rarities"
    }
}