class ErrorRequestServer extends Error {
    constructor(message: string) {
        super("Erreur de requête: " + message);
    }
}