import express from "express";
import Etudiant from "../models/Etudiant";
import ErrorParams from "../utils/ErrorParams";

type BodyPostCreateEtudiant = {
    nom: string,
    prenom: string,
    age: number,
    description: string | undefined
}

const route = express.Router()

route.post("/", (req, res) => {
    const body = req.body as BodyPostCreateEtudiant
    Etudiant.create(body.nom, body.prenom, body.age, body.description)
        .then(r => {
            if (r instanceof ErrorParams) res.status(400).json({message: r.message})
            else res.status(200).end()
        })
})

route.get("/", (req, res) => {
    Etudiant.readAll().then(etudiants => res.status(200).json({etudiants}))
})

route.get("/:id", (req, res) => {
    const id = req.params.id
    if (!/^[0-9]+$/.test(id))
        res.status(400).json("Params error")
    else {
        Etudiant.readById(Number(id)).then(etudiant => res.status(200).json(etudiant))
    }
})

export default route