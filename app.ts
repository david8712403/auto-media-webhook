import * as dotenv from "dotenv";

import express, { Request, Response } from "express";

import { json } from "body-parser";
import morgan from "morgan";
import { authHandler } from "./middleware/authHandler";

dotenv.config({ path: __dirname + "/.env" });

const app = express();
app.enable("trust proxy");
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
app.use(json());
app.use(express.static("public"));
app.use(morgan("common"));

// Callback route
app.post("/callback", authHandler, (req: Request, res: Response) => {
  // Write your message handler here
  const messages = req.body as any[];
  for (let data of messages) {
    console.log(data);
  }
  return res.sendStatus(200);
});
app.get("/", (req: Request, res: Response) =>
  res.status(200).send("Auto Media Webhook server")
);

app.use((req, res) => {
  if (!req.route) return res.sendStatus(404);
});

const port = Number.parseInt(process.env.PORT ?? "3000");
app.listen(port, () => {
  console.log("server is listening on port " + port);
});

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit(0);
});
