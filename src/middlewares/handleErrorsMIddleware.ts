import { NextFunction, Request, Response } from "express";

export default function handleErrorsMiddleware(
    error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (error.type === "unprocessable_entity") {
        return res.status(422).send(error.message);
    }

    if (error.type === "not_found") {
        return res.status(404).send(error.message);
    }
    if (error.name === "Error") {
        return res.status(404).send("User isn't registered on Github");
    }
    return res.status(500).send(error);
}
