import { AUTH_API } from "@feature/auth/api";
import { UserAuthResponse } from "@feature/auth/api/auth.api";
import { removeAccessTokenToLocalStorageFx } from "@feature/auth/lib";
import { createEffect, createEvent, createStore, sample } from "effector";
import { IUser } from "./user.types";


const $user = createStore<IUser | null>(null);

const initUser = createEvent<IUser>();
const resetUser = createEvent();

const changeAvatar = createEvent<string>();

const getUserProfileFx = createEffect<void, UserAuthResponse, Error>(
  AUTH_API.me
);

$user.on(initUser, (_, user) => user);
$user.on(changeAvatar, (user, avatar) => ({
  ...user!,
  userAvatar: { id: Math.random(), url: avatar },
}));
$user.reset(resetUser);

sample({ clock: resetUser, target: removeAccessTokenToLocalStorageFx });

sample({
  clock: getUserProfileFx.doneData,
  filter: (userResponse) => !userResponse.hasError,
  fn: (userResponse) => userResponse.user,
  target: initUser,
});

export {
  $user,
  initUser,
  resetUser,
  getUserProfileFx,
  changeAvatar,
};
