"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorParams extends Error {
    constructor(message) {
        super("Erreur de syntaxe: " + message);
    }
}
exports.default = ErrorParams;
