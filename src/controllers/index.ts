import { Request, Response } from "express";
import createConnection from "../providers/Database";

export async function test(req: Request, res: Response) {
    try {
        const connection = await createConnection();
        const [rows] = await connection.execute("SELECT * FROM quotes limit 5");
        return res.status(200).json({ message: "Service Running", data: rows });
    } catch (err) {
        console.log(err);
    }
}
