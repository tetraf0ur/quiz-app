export const safeRequestWithError = async (request: Promise<any>) => {
  try {
    if (request) {
      const result = await request;
      if (result) {
        return result.data;
      }
    }
  } catch (err) {
    //@ts-ignore
    if (err.response.data) {
      //@ts-ignore
      return { ...err.response.data, hasError: true };
    }
    return { hasError: true };
  }
};
