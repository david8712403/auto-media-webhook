import { Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

const authHandler = async (req: Request, res: Response, next: any) => {

  try {
    if (!req.headers.authorization)
      return res.status(403).send({ error: "Unauthorized" });
    const privateApiSecret = req.headers.authorization?.split(" ")[1];
    if ((process.env.WEBHOOK_SECRET as string) !== privateApiSecret)
      return res.status(403).send({ error: "Invalid secret" });
    next();
  } catch (error) {
    next(error);
  }
};

export { authHandler };
