"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Etudiant_1 = __importDefault(require("../models/Etudiant"));
const ErrorParams_1 = __importDefault(require("../utils/ErrorParams"));
const route = express_1.default.Router();
route.post("/", (req, res) => {
    const body = req.body;
    Etudiant_1.default.create(body.nom, body.prenom, body.age, body.description)
        .then(r => {
        if (r instanceof ErrorParams_1.default)
            res.status(400).json({ message: r.message });
        else
            res.status(200).end();
    });
});
route.get("/", (req, res) => {
    Etudiant_1.default.readAll().then(etudiants => res.status(200).json({ etudiants }));
});
route.get("/:id", (req, res) => {
    const id = req.params.id;
    if (!/^[0-9]+$/.test(id))
        res.status(400).json("Params error");
    else {
        Etudiant_1.default.readById(Number(id)).then(etudiant => res.status(200).json(etudiant));
    }
});
exports.default = route;
