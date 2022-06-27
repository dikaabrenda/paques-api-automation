import { assert } from 'chai';
import { describe, it } from 'mocha';
import auth from '../../routes/auth.api';
import * as data from '../../data/auth/Auththorization.data'

describe('as a client, i want to logged in PDS Application', () => {
  it('Client send a POST request "/api/login"', async () => {
    await auth.POST(data.Credentials)
      .then((res) => {
        const prefix = res.data.response.profile;
        assert.equal(res.status, 200);
        assert.equal(prefix.username, 'dikabrenda');
        assert.equal(prefix.email, 'dika.brenda@paques.id');
        assert.isNotNull(prefix.access_token);
        localStorage.setItem('token', res.data.response.access_token);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  });
});
