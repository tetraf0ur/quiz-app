const convertFieldsToNumber = (originalObj = {}, keysToOmit: string[]) =>
  Object.fromEntries(
    Object.entries(originalObj).map(([key, value]) =>
      keysToOmit.includes(key) ? [key, Number(value)] : [key, value]
    )
  );

export { convertFieldsToNumber };
