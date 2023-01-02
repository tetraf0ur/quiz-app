import { fakeDelay } from "@shared/utils/fakeDelay";
import { createEffect, createEvent, createStore, sample } from "effector";

interface ToastNotification {
  content: string;
  isOpen: boolean;
}

const $toastNotification = createStore<ToastNotification>({
  content: "",
  isOpen: false,
});

const showNotification = createEvent<string>();
const hideNotification = createEvent();
const destroyNotification = createEvent();

$toastNotification.on(showNotification, (_, content) => ({
  isOpen: true,
  content,
}));

$toastNotification.on(hideNotification, (store) => ({
  isOpen: false,
  content: store.content,
}));

$toastNotification.reset(destroyNotification);

const notificationDelayFx = createEffect(() => fakeDelay(3000));
const lowDelayFx = createEffect(() => fakeDelay(300));

sample({
  clock: showNotification,
  source: $toastNotification,
  target: notificationDelayFx,
});

sample({
  clock: notificationDelayFx.done,
  target: hideNotification,
});

sample({
  clock: hideNotification,
  target: lowDelayFx,
});

sample({
  clock: lowDelayFx.doneData,
  target: destroyNotification,
});

export { $toastNotification, showNotification };
