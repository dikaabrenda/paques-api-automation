import chai, { assert } from 'chai';
import { describe, it } from 'mocha';
import users from '../../../../routes/users.api';
import chaiJsonSchema from 'chai-json-schema';
import * as data from '../../../../data/users/CreateUsers.data';
import * as schema from '../../../../schema/pds/users/post.user.schema';

chai.use(chaiJsonSchema);

describe('as a users, i want to create new user in PDS Application', () => {

  it('Client send a POST request "/api/user/add"', async () => {
    await users.POST(data.CREATE_USERS)
      .then((res) => {
        assert.equal(res.status, 200);
        assert.jsonSchema(res.data, schema.POST_USER)
        localStorage.setItem('UserId', res.data.response.uuid);
      })
      .catch((err) => {
        throw err;
      });
  });

  it('Client send a POST request using user has already exist', async () => {
      const res = await users.POST(data.USERNAME_ALREADY_EXIST)
        assert.equal(res.status, 500)
        assert.equal(res.data.message, 'user_name already exists')
  });
});
