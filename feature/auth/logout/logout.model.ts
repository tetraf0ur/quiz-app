import { resetUser } from "@entities/user";
import { createEffect, createEvent, sample } from "effector";
import { AUTH_API } from "../api";

const logout = createEvent();
const logoutFx = createEffect(AUTH_API.logout);

sample({
  clock: logout,
  target: [logoutFx, resetUser],
});



export { logout };
