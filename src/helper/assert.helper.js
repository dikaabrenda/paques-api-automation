import chai, { assert } from 'chai';
import chaiJsonSchema from 'chai-json-schema';

chai.use(chaiJsonSchema);

const expect = {
  JsonSchema: (res, data) => {
    if (!data) {
      throw new Error(`Didn't matched ${data}`);
    }
    assert.jsonSchema(res.data, data);
  },
};

export default expect;
