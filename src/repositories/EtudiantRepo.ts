import sequelize from "../utils/connectSQLite"
import {DataTypes, Model, Optional} from "sequelize"

interface EtudiantAttributs {
    id: number,
    nom: string,
    age: number,
    prenom: string,
    description?: string
}

const EtudiantRepo = sequelize.define<Model<EtudiantAttributs>>("etudiant", {
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
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    }
})

export {EtudiantRepo, EtudiantAttributs}
