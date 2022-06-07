import chai, {assert} from "chai";
import users from "../../../../routes/users.api";
import chaiJsonSchema from "chai-json-schema";
import * as data from '../../../../data/users/UpdateUsers.data'

chai.use(chaiJsonSchema);

describe('as a client, i want to update an user in PDS Application', () => {

    it('client send a PUT request "api/user/:id"', async () => {
        await users.PUT(data.UPDATE_USERS)
        .then((res) => {
            assert.equal(res.status, 200)
        })
        .catch((err) => {
            throw err
        });
    });
})