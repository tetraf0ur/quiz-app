export const fakeDelay = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));
