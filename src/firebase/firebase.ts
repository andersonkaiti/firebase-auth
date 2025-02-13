import admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { config } from "dotenv";
import serviceAccount from "@/service-account.json" assert { type: "json" };

config();

export const firebaseAdmin = admin.initializeApp({
  credential: cert(JSON.parse(JSON.stringify(serviceAccount))),
});
