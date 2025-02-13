import { Request, Response } from "express";
import { AuthRepository } from "@repositories/auth-repository.ts";

const authRepository = new AuthRepository();

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const data = await authRepository.registerUser(req.body);

      res.status(201).json(data);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        message: "An error occurred while registering user",
        error: err.message,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = await authRepository.login(req.body);

      res.status(200).json({
        message: "User logged in successfully",
        token: data.idToken,
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        message: "An error occurred while logging user",
        error: err.message,
      });
    }
  }
}

export { AuthController };
