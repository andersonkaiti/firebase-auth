import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

class AuthValidatorMiddleware {
  validateUser(req: Request, res: Response, next: NextFunction) {
    const validationResult = authSchema.safeParse({
      email: req.body.email,
      password: req.body.password,
    });

    if (!validationResult.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: validationResult.error.format(),
      });
    }

    next();
  }
}

export { authSchema, AuthValidatorMiddleware, z };
