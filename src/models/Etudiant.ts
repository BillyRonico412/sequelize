import ErrorParams from "../utils/ErrorParams";
import {EtudiantInstance, EtudiantRepo} from "../repositories/EtudiantRepo";

export default class {

    private static testParametre(nom: string, prenom: string, age: number, description?: string): ErrorParams | null {
        console.log(nom)
        if (!/^[A-Z][a-z]{2,30}$/.test(nom))
            return new ErrorParams("nom")
        if (!/^[A-Z][a-z]{2,30}$/.test(prenom))
            return new ErrorParams("prenom")
        if (!/^[0-9]{1,2}$/.test(String(age)))
            return new ErrorParams("age")
        return null
    }

    static async create(nom: string, prenom: string, age: number, description?: string): Promise<ErrorParams | null> {
        const test = this.testParametre(nom, prenom, age, description)
        if (test instanceof ErrorParams) return test
        else {
            await EtudiantRepo.create({nom, prenom, age, description})
            return null
        }
    }

    static async readAll(): Promise<EtudiantInstance[]> {
        return await EtudiantRepo.findAll()
    }

    static async readById(id: number): Promise<EtudiantInstance | null> {
        return await EtudiantRepo.findByPk(id)
    }

}