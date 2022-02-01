import express from "express"
import morgan from "morgan"
import sequelize from "./utils/connectSQLite"
import bodyParser from "body-parser"
import {FormationRepo} from "./repositories/FormationRepo";
import {EtudiantRepo} from "./repositories/EtudiantRepo";
import Etudiant from "./models/Etudiant";
import {SportRepo} from "./repositories/Sport";

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.json())

FormationRepo.findAll()
EtudiantRepo.findAll()
SportRepo.findAll()


sequelize.sync({force: true})
    .then(() => app.listen(8080, () => {
        console.log("Connected to http://localhost:8080")
    }))
    .catch(err => console.log(err))

