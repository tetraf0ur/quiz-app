
const _env = process.env.NODE_ENV;

const DEV_MODE = _env === "development";
const PROD_MODE = _env === "production";

//@ts-ignore
const API_URL = DEV_MODE
? process.env.NEXT_PUBLIC_API_URL_DEV
: process.env.NEXT_PUBLIC_API_URL_PROD;
const ACCESS_TOKEN = "access_token";

//time
const MILLISECONDS = 1000;
const MINUTE = MILLISECONDS * 60;
const HOUR = MINUTE * 60;


export {
  ACCESS_TOKEN,
  API_URL,
  DEV_MODE,
  PROD_MODE,
  MILLISECONDS,
  MINUTE,
  HOUR,
};
