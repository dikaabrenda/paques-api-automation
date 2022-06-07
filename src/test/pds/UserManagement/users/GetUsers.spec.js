import chai, { assert } from "chai";
import { describe, it } from 'mocha';
import users from '../../../../routes/users.api';
import chaiJsonSchema from "chai-json-schema";
import * as schema from "../../../../schema/pds/users/get.user.schema";

chai.use(chaiJsonSchema);
let userId = localStorage.getItem('UserId')

describe('as a client, i want to get an user in PDS Application', () => {

    it('Client send a GET request by Id "/api/users/:id"', async () => {
        await users.GET()
        .then((res) => {
            assert.equal(res.status, 200);
            assert.equal(res.data.response.uuid, `${userId}`);
            assert.equal(res.data.response.firstname, 'Dika')
            assert.jsonSchema(res.data, schema.GET_USER)
        })
        .catch((err) => {
            throw err
        })
    });

    it('Client send a GET request with unregistered id', async () => {
        await users.GETWRONGID()
        .then((res) => {
            assert.equal(res.status, 500);
            assert.equal(res.data.message, 'record not found')
        })
        .catch((err) => {
            throw err
        })
    });
})