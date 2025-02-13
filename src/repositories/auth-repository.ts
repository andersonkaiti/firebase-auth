import { FirebaseAuthentication } from "@firebase/authentication.ts";
import { IUser } from "@models/user.ts";

const firebaseAuth = new FirebaseAuthentication();

class AuthRepository {
  async registerUser(user: IUser) {
    try {
      return await firebaseAuth.createUser(user);
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  }

  async login(user: IUser) {
    try {
      const data = await firebaseAuth.signIn(user);

      if (data.error) {
        throw new Error(data.error.message);
      }

      return data;
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
}

export { AuthRepository };
