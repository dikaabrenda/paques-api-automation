import chai, { assert } from 'chai';
import chaiJsonSchema from 'chai-json-schema';

chai.use(chaiJsonSchema);
// const prefix = res.data.response.datasets.test2;

const expect = {

  JsonSchema: async (res, dataSchema) => {
    if (!dataSchema) {
      throw new Error("Didn't matched " + data);
    }
    assert.jsonSchema(await res.data, dataSchema);
  },

  getCode: (err, res, statusCode) => {
    if(statusCode === '500'){
      throw err
    }
    assert.equal(res.status, statusCode);
  },

  getMessage: async (err, res, data) => {
    if(!data){
      throw err
    }
    assert.equal(await res.data.message, data)
  },

  getColumnQueryDataSet: async (err, res, colomNumber, data) => {
    if(!data){
      throw err
    }
    assert.equal(prefix.columns[colomNumber], data)
  }
};

export default expect;
