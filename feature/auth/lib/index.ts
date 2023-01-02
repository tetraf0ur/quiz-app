import { ACCESS_TOKEN } from "@shared/constants";
import { createEffect } from "effector";

const writeAccessTokenToLocalStorageFx = createEffect<string, void>(
  (accessToken) => localStorage.setItem(ACCESS_TOKEN, accessToken)
);

const readAccessTokenToLocalStorageFx = createEffect<void, string | null>(() =>
  localStorage.getItem(ACCESS_TOKEN)
);

const removeAccessTokenToLocalStorageFx = createEffect<void, void, void>(() =>
  localStorage.removeItem(ACCESS_TOKEN)
);

export {
  writeAccessTokenToLocalStorageFx,
  readAccessTokenToLocalStorageFx,
  removeAccessTokenToLocalStorageFx,
};
