import { assert } from 'chai';
import { describe, it } from 'mocha';
import auth from '../../routes/auth.api';
import * as data from '../../data/auth/auththorization.data';

describe('as a user, i want to logged in PDS Application', () => {
  it('Client send a POST request "/api/login"', async () => {
    const res = await auth.POST(data.Credentials);
    assert.equal(res.status, 200);
    localStorage.setItem('token', res.data.response.access_token)
  });
});