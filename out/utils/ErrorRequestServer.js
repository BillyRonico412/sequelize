"use strict";
class ErrorRequestServer extends Error {
    constructor(message) {
        super("Erreur de requête: " + message);
    }
}
