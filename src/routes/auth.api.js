import testBase from "../config/testBase.service";

const PATH = `/api/login`
const CAPCHA = `/api/captcha`

const auth = {
    POST: (data) => testBase.post(`${PATH}`, data),
    GET: () => testBase.get(`${CAPCHA}`)
}

export default auth