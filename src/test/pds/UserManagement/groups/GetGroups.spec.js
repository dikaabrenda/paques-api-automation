import { describe, it } from "mocha";
import chai, { assert } from "chai";
import groups from "../../../../routes/groups.api";
import chaiJsonSchema from "chai-json-schema";
import * as schema from '../../../../schema/pds/groups/get.group.schema'

chai.use(chaiJsonSchema)

describe('as a client, i want to get list of group in PDS Application', () => {
    it('Client send a GET request "/api/groups/:id"', async () => {
        await groups.GET()
        .then((res) => {
            assert.equal(res.status, 200)
            assert.jsonSchema(res.data, schema.GET_SCHEMA)
        })
    })

    it('Client send a GET request with id unregistered', async () => {
        await groups.INVALIDGET()
        .then((res) => {
            assert.equal(res.status, 500)
            assert.equal(res.data.message, 'group not found on this realm')
        })
    })
})