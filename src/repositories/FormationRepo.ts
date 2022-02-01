import sequelize from "../utils/connectSQLite";
import {DataTypes, Model} from "sequelize";
import {EtudiantRepo} from "./EtudiantRepo";

interface FormationAttributs {
    id: number,
    nom: string,
    description?: string
}


const FormationRepo = sequelize.define<Model<FormationAttributs>>("formation", {
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

FormationRepo.hasMany(EtudiantRepo)

export {FormationRepo, FormationAttributs}