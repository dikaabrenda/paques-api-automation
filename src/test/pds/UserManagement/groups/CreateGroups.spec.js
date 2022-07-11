import { describe, it } from "mocha";
import chai, { assert } from "chai";
import groups from "../../../../routes/groups.api";
import chaiJsonSchema from "chai-json-schema";
import * as data from '../../../../data/groups/CreateGroups.data'
import * as schema from '../../../../schema/pds/groups/post.group.schema'

chai.use(chaiJsonSchema)

describe('as a client, i want to create new groups in PDS Application', () => {
    
    it('Client send a POST request "/api/groups/add"', async () => {
        await groups.POST(data.VALID_CREATE_GROUPS)
        .then((res) => {
            const groupId = res.data.response.id
            const groupName = res.data.response.groupname
            assert.equal(res.status, 200)
            assert.equal(res.data.response.groupdesc, 'QA Test')
            assert.jsonSchema(res.data, schema.SCHEMA_GROUP)
            localStorage.setItem('GroupsId', `${groupId}`)
            localStorage.setItem('groupName', `${groupName}`)
        })
    })

    it('Client send a POST request with invalid data', async () => {
        await groups.POST(data.INVALID_GROUP_NAME)
        .then((res) => {
            assert.equal(res.status, 422)
            assert.equal(res.data.response, null)
            assert.equal(res.data.message, 'groupname is required')
        })
    })
})