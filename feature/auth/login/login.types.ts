import { IUser } from "@entities/user";

export type AuthResponse = {
  user: IUser;
  accessToken: string;
};
