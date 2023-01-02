import { createGate } from "effector-react";
import { createEvent, createStore, sample } from "effector";

import {getUserProfileFx } from "@entities/user";


const $initApp = createStore(true);
const $initError = createStore(false);

const initializeApp = createEvent();
const setInitializeError = createEvent();

$initApp.on(initializeApp, () => false);
$initError.on(setInitializeError, () => true);

const InitializeAppGate = createGate();

sample({
  clock: InitializeAppGate.open,
  target: getUserProfileFx,
});

sample({
  clock: getUserProfileFx.doneData,
  fn: (userResponse) => userResponse?.user,
  target: initializeApp,
});

sample({
  clock: getUserProfileFx.doneData,
  filter: (userResponse) => userResponse.hasError,
  target: setInitializeError,
});


export { $initApp, InitializeAppGate, $initError };
