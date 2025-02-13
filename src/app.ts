import express from "express";
import { authRoutes, indexRoutes } from "@routes/index.ts";

const app = express();

app.use(express.json());

app.use("/", indexRoutes);
app.use("/", authRoutes);

export { app };
