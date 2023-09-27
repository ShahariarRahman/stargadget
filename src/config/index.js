const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.BASE_URL_DEV
    : process.env.BASE_URL_PROUD;

const apiBaseUrl = `${baseUrl}/api/v1`;

export const config = {
  baseUrl,
  apiBaseUrl,
};
