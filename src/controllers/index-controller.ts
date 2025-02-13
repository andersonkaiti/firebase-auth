import { Request, Response } from "express";

class IndexController {
  get(_req: Request, res: Response) {
    res.status(200).json({
      message: "Welcome to the API",
    });
  }
}

export { IndexController };
