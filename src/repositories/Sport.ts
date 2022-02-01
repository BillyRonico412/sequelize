import sequelize from "../utils/connectSQLite";
import {DataTypes, Model} from "sequelize";
import {EtudiantRepo} from "./EtudiantRepo";

interface SportAttributs {
    id: number,
    nom: string,
    description?: string
}


const SportRepo = sequelize.define<Model<SportAttributs>>("sport", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    }
})

SportRepo.belongsToMany(EtudiantRepo, {through: "SportEffectue"})

export {SportRepo, SportAttributs}