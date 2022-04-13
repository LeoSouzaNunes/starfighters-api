import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function validateSchemaMiddleware(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if (validation.error) {
            throw { type: "unprocessable_entity", message: "Invalid schema." };
        }
        next();
    };
}
