import { API } from "@shared/api";
import { safeRequestWithError } from "@shared/api/safeRequestWithError";
import { AuthResponse } from "../login/login.types";
import { ISignUpRequest } from "./api.type";

const AUTH_API_URL = "/auth";

type FieldsError = "email" | "password" | "verification_error" | "login";

export type ErrorResponse = {
  message: string;
  fields?: Array<FieldsError>;
  hasError: boolean;
};

export type EmptyResponseWithError = void & ErrorResponse;
export type UserAuthResponse = AuthResponse & ErrorResponse;

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserAuthResponse> =>
  safeRequestWithError(
    API.post<AuthResponse>(`${AUTH_API_URL}/sign-in`, {
      email,
      password,
    })
  );

const me = async (): Promise<UserAuthResponse> =>
  safeRequestWithError(API.get<AuthResponse>(`${AUTH_API_URL}/me`));

const logout = async (): Promise<void> =>
  safeRequestWithError(API.post<AuthResponse>(`${AUTH_API_URL}/sign-out`));

const registration = async (
  userCredentials: ISignUpRequest
): Promise<void & ErrorResponse> =>
  safeRequestWithError(
    API.post<void>(`${AUTH_API_URL}/sign-up`, {
      ...userCredentials,
    })
  );
const recoveryPassword = async (
  email: string
): Promise<EmptyResponseWithError> =>
  safeRequestWithError(
    API.post<void>(`${AUTH_API_URL}/recovery-password`, {
      email,
    })
  );

const changePassword = async (
  token: string,
  password: string,
  repeatPassword: string
): Promise<ErrorResponse & void> => {
  const request = await safeRequestWithError(
    API.post<void>(`${AUTH_API_URL}/set-new-password/${token}`, {
      password,
      repeatPassword,
    })
  );
  return request;
};

const verifyAccount = async (token: string): Promise<UserAuthResponse> =>
  safeRequestWithError(API.get(`${AUTH_API_URL}/verify/${token}`));

const changeRole = async (): Promise<UserAuthResponse> =>
  safeRequestWithError(API.put<AuthResponse>(`${AUTH_API_URL}/role/change`));

export {
  login,
  me,
  registration,
  recoveryPassword,
  changePassword,
  verifyAccount,
  logout,
  changeRole,
};
