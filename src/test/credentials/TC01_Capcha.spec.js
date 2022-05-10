import { assert } from 'chai';
import { describe, it } from 'mocha';
import auth from '../../routes/auth.api';
import expect from '../../helper/assert.helper';
import * as schema from '../../schema/pds/authorization/capcha.json';

describe('as an user, i want to GET Capcha in PDS application', () => {
  it('client send a GET request /api/captcha', async () => {
    const res = await auth.GET();
    assert.equal(res.status, 200);
    expect.JsonSchema(res, schema);
    localStorage.setItem('CapchaId', res.data.response.captcha_id);
  });
});
