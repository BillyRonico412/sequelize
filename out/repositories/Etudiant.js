"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectSQLite_1 = __importDefault(require("../utils/connectSQLite"));
const sequelize_1 = __importDefault(require("sequelize"));
const EtudiantRepo = connectSQLite_1.default.define("etudiant", {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    prenom: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.default.TEXT,
    }
});
exports.default = EtudiantRepo;
