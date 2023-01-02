import { initUser } from "@entities/user";
import { resetUser } from "@entities/user/user.model";
import { API } from "@shared/api";
import { ACCESS_TOKEN } from "@shared/constants";
import { Controller, createForm, useForm } from "effector-react-form";
import { AxiosResponse } from "axios";
import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { AuthResponse } from "./login.types";
import { objectIsEmpty } from "@shared/utils/objectIsEmpty";
import { AUTH_API } from "../api";
import { ErrorResponse, UserAuthResponse } from "../api/auth.api";
import { createServerErrors } from "../constants/user-auth.validate";
import { writeAccessTokenToLocalStorageFx } from "../lib";

interface IUserLoginCredentials {
  email: string;
  password: string;
}

const logout = createEvent();

const form = createForm<IUserLoginCredentials>();

const $disabledSubmit = form.$errorsInline.map((v) => !objectIsEmpty(v));

const loginApiFx = createEffect<IUserLoginCredentials, UserAuthResponse>(
  AUTH_API.login
);

const loginFx = attach({
  source: form.$values,
  effect: loginApiFx,
});

const logOutFx = createEffect<void, void, Error>(() =>
  API.post("/auth/sign-out")
);


const INPUT_FIELDS: ErrorResponse["fields"] = ["email", "password"];

createServerErrors(form, loginFx, INPUT_FIELDS);

sample({
  clock: loginFx.doneData,
  filter: (userResponse) =>
    !userResponse.hasError && userResponse.user.verified,
  fn: (userResponse) => userResponse.accessToken,
  target: writeAccessTokenToLocalStorageFx,
});

export {
  logOutFx,
  logout,
  form,
  loginFx,
  $disabledSubmit,
};
