const capchaId = localStorage.getItem('CapchaId');

export const Credentials = {
  email: process.env.PDS_USERNAME,
  password: process.env.PDS_PASSWORD,
  captcha: process.env.CAPCHA,
  captcha_id: capchaId,
};
