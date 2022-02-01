export default class ErrorParams extends Error {
    constructor(message: string) {
        super("Erreur de syntaxe: " + message);
    }
}