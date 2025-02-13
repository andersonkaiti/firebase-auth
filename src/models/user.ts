import { authSchema, z } from "@services/validator.ts";

export interface IUser extends z.infer<typeof authSchema> {}
