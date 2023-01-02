import { isURL } from "./isURL";

const parseURL = (url: string) => {
  const validateURL = isURL(url);
  if (validateURL) {
    const parsedURL = new URL(url);
    return parsedURL;
  }

  return null;
};

export { parseURL };
