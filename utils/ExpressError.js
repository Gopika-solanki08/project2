class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.ExpressError = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;