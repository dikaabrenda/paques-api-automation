import { assert } from 'chai';
import users from '../../../../routes/users.api';

describe('as a client, i want to delete user in PDS Application', () => {
  it('client send a DELETE request "/api/user/:id"', async () => {
    await users.DELETE()
      .then((res) => {
        assert.equal(res.status, 200);
        assert.equal(res.data.message, 'user deleted');
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  });
});
