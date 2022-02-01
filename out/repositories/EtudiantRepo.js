"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtudiantRepo = void 0;
const connectSQLite_1 = __importDefault(require("../utils/connectSQLite"));
const sequelize_1 = require("sequelize");
const EtudiantRepo = connectSQLite_1.default.define("etudiant", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
    }
});
exports.EtudiantRepo = EtudiantRepo;
