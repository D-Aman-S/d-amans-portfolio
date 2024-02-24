export const hostUrl = String(process.env.NEXT_PUBLIC_HOST_URL);
const routingConstants = {
  hostUrl: hostUrl,
  loginUrl: hostUrl + "login/",
  resetPasswordUrl: hostUrl + "reset_password/",
};

export default routingConstants;
