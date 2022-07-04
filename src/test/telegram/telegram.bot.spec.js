import { assert } from "chai";
import { describe, it } from "mocha";
import telegramBot from "../../routes/telegram.api.js";
import * as data from "../../data/telegram/sendMessage.data.js";

describe('i want to send telegram bot', () => {
    it('send a POST request for daily StandUp', async () => {
        await telegramBot.POST(data.STANDUP)
            .then((res) => {
                assert.equal(res.status, 200)
            })
            .catch((err) => {
                throw new Error(err.message)
            })
    })
})