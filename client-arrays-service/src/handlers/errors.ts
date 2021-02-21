export default class ApiErrors extends Error {
    statusCode: number;
    errors: object;
    constructor(statusCode: number, message: string, errors?: object ) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
    }
}
