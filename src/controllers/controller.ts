import { Request, Response } from "express";
import { checkUsersAndStartBattle } from "../services/service.js";

export async function postBattle(req: Request, res: Response) {
    const { firstUser, secondUser } = req.body;
    const result = await checkUsersAndStartBattle(firstUser, secondUser);
    res.status(201).send(result);
}
