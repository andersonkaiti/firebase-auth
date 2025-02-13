import { Router } from "express";
import { AuthController } from "@controllers/auth-controller.ts";
import { AuthValidatorMiddleware } from "@services/validator.ts";
import { FirebaseAuthentication } from "@firebase/authentication.ts";

const router = Router();
const authController = new AuthController();
const authValidator = new AuthValidatorMiddleware();
const firebaseAuth = new FirebaseAuthentication();

router.post("/register", authValidator.validateUser, authController.register);
router.post("/login", authValidator.validateUser, authController.login);
router.post("/auth", firebaseAuth.authenticate);

export { router as authRoutes };
