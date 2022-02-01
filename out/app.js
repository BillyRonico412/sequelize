"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const connectSQLite_1 = __importDefault(require("./utils/connectSQLite"));
const body_parser_1 = __importDefault(require("body-parser"));
const FormationRepo_1 = require("./repositories/FormationRepo");
const EtudiantRepo_1 = require("./repositories/EtudiantRepo");
const Sport_1 = require("./repositories/Sport");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.json());
FormationRepo_1.FormationRepo.findAll();
EtudiantRepo_1.EtudiantRepo.findAll();
Sport_1.SportRepo.findAll();
connectSQLite_1.default.sync({ force: true })
    .then(() => app.listen(8080, () => {
    console.log("Connected to http://localhost:8080");
}))
    .catch(err => console.log(err));
