"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormationRepo = void 0;
const connectSQLite_1 = __importDefault(require("../utils/connectSQLite"));
const sequelize_1 = require("sequelize");
const EtudiantRepo_1 = require("./EtudiantRepo");
const FormationRepo = connectSQLite_1.default.define("formation", {
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
    description: {
        type: sequelize_1.DataTypes.TEXT,
    }
});
exports.FormationRepo = FormationRepo;
FormationRepo.hasMany(EtudiantRepo_1.EtudiantRepo);
