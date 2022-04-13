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
    return res.sendStatus(500);
}
