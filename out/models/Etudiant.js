"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorParams_1 = __importDefault(require("../utils/ErrorParams"));
const EtudiantRepo_1 = require("../repositories/EtudiantRepo");
class default_1 {
    static testParametre(nom, prenom, age, description) {
        console.log(nom);
        if (!/^[A-Z][a-z]{2,30}$/.test(nom))
            return new ErrorParams_1.default("nom");
        if (!/^[A-Z][a-z]{2,30}$/.test(prenom))
            return new ErrorParams_1.default("prenom");
        if (!/^[0-9]{1,2}$/.test(String(age)))
            return new ErrorParams_1.default("age");
        return null;
    }
    static create(nom, prenom, age, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const test = this.testParametre(nom, prenom, age, description);
            if (test instanceof ErrorParams_1.default)
                return test;
            else {
                yield EtudiantRepo_1.EtudiantRepo.create({ nom, prenom, age, description });
                return null;
            }
        });
    }
    static readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield EtudiantRepo_1.EtudiantRepo.findAll();
        });
    }
    static readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield EtudiantRepo_1.EtudiantRepo.findByPk(id);
        });
    }
}
exports.default = default_1;
