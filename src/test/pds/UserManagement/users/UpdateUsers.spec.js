import chai, { assert } from 'chai';
import users from '../../../../routes/users.api';
import chaiJsonSchema from 'chai-json-schema';
import * as data from '../../../../data/users/UpdateUsers.data';
import * as schema from '../../../../schema/pds/users/update.user.schema';

chai.use(chaiJsonSchema);

describe('as a client, i want to update an user in PDS Application', () => {
  it('Client send a PUT request "api/user/:id"', async () => {
    await users.PUT(data.UPDATE_USERS)
      .then((res) => {
        assert.equal(res.status, 200);
        assert.equal(res.data.response.email, 'automation_test@mailnesia.com');
        assert.equal(res.data.response.firstname, 'Automation');
        assert.equal(res.data.response.lastname, 'Test');
        assert.jsonSchema(res.data, schema.UPDATE_USER);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  });
});
