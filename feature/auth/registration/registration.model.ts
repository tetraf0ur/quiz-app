import { AUTH_API } from "@feature/auth/api";
import {
  attach,
  createEvent,
  combine,
  createStore,
  sample,
  Effect,
} from "effector";
import { createForm } from "effector-react-form";
import { objectIsEmpty } from "@shared/utils/objectIsEmpty";
import { ErrorResponse } from "../api/auth.api";
import { createServerErrors } from "../constants/user-auth.validate";

interface IUserRegistrationCredentials {
  email: string;
  password: string;
}

const INPUT_FIELDS: ErrorResponse["fields"] = ["email", "login", "password"];


const registrationForm = createForm<IUserRegistrationCredentials>();

const $disabledRegistrationSubmit = registrationForm.$errorsInline.map(
  (v) => !objectIsEmpty(v)
);

const $registrationCredentials = combine(
  {
    creds: registrationForm.$values,
  },
  ({ creds }) => ({ ...creds })
);

const registrationFx = attach({
  source: $registrationCredentials,
  effect: AUTH_API.registration,
});

const $disabledSubmit = registrationForm.$errorsInline.map(
  (v) => !objectIsEmpty(v)
);

sample({
  clock: registrationFx.doneData,
  filter: (registrationResponse) =>
    registrationResponse.hasError &&
    registrationResponse.fields?.includes("email")!,
  fn: (registrationResponse) => ({
    field: "email",
    error: registrationResponse.message,
  }),
  target: registrationForm.setOrDeleteError,
});

createServerErrors(registrationForm, registrationFx, INPUT_FIELDS);

sample({
  clock: registrationFx.doneData,
  filter: (registrationResponse) =>
    registrationResponse.hasError &&
    registrationResponse.fields?.includes("password")!,
  fn: (registrationResponse) => ({
    field: "password",
    error: registrationResponse.message,
  }),
  target: registrationForm.setOrDeleteError,
});

sample({
  clock: registrationFx.doneData,
  filter: (registrationResponse) =>
    registrationResponse.hasError &&
    registrationResponse.fields?.includes("login")!,
  fn: (registrationResponse) => ({
    field: "login",
    error: registrationResponse.message,
  }),
  target: registrationForm.setOrDeleteError,
});

export {
  registrationForm,
  $registrationCredentials,
  $disabledRegistrationSubmit,
  registrationFx,
  $disabledSubmit,
};
