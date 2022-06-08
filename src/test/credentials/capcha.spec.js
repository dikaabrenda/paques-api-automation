import chai, { assert } from 'chai';
import { describe, it } from 'mocha';
import chaiJsonSchema from 'chai-json-schema';
import auth from '../../routes/auth.api';
import * as schema from '../../schema/pds/authorization/capcha.schema';

chai.use(chaiJsonSchema);

describe('as a client, i want to GET Capcha in PDS application', () => {
  it('Client send a GET request "/api/captcha"', async () => {
    await auth.GET()
      .then((res) => {
        assert.equal(res.status, 200);
        assert.jsonSchema(res.data, schema.CAPCHA);
        localStorage.setItem('CapchaId', res.data.response.captcha_id);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  });
});
