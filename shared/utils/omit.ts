const omit = (originalObj = {}, keysToOmit: string[]) =>
  Object.fromEntries(
    Object.entries(originalObj).filter(([key]) => !keysToOmit.includes(key))
  );

export { omit };
