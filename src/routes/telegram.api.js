import telegram from "../config/telegramBase.service.js";

const token = process.env.TELEGRAM_TOKEN
const tele = `/bot${token}/sendMessage`

const telegramBot = {
    POST: (data) => telegram.post(`${tele}`, data)
}

export default telegramBot;