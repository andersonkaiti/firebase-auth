import { Request, Response } from "express";
import { firebaseAdmin } from "./firebase.ts";
import { IUser } from "@models/user.ts";

const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.apiKey}`;

export const auth = firebaseAdmin.auth();

class FirebaseAuthentication {
  async createUser(user: IUser) {
    return await auth.createUser(user);
  }

  async signIn(user: IUser) {
    const response = await fetch(LOGIN_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...user, returnSecureToken: true }),
    });

    return await response.json();
  }

  async authenticate(req: Request, res: Response) {
    if (!req.body) {
      res.status(400).json({
        success: false,
        error: "Invalid request body",
      });
    }

    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
      res.status(401).json({
        success: false,
        error: "No token provided",
      });
    }

    try {
      const decodedToken = await auth.verifyIdToken(token);

      const { exp: expirationTime, email, uid } = decodedToken;

      res.status(200).json({
        success: true,
        token: decodedToken.uid,
        expirationTime,
        email,
        uid,
      });
    } catch (error) {
      const _err = error as Error;
      res.status(401).json({
        success: false,
        error: _err.message,
      });
    }
  }
}

export { FirebaseAuthentication };
