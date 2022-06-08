import chai, { assert } from 'chai';
import { describe, it } from 'mocha';
import dataset from '../../../routes/dataset.api';
import chaiJsonSchema from 'chai-json-schema';
import * as data from '../../../data/dataset/query';
import * as schema from '../../../schema/pds/query/query.dataset.shema'

chai.use(chaiJsonSchema);

describe('as a client, i want to query in PDS Application', () => {
  it('Client send a POST request "/api/dataset/query" using split _event', async () => {
    await dataset.POST(data.QUERY_SPLIT_EVENT)
    .then((res) => {
      const prefix = res.data.response.datasets.test2;
      assert.equal(res.status, 200);
      assert.equal(prefix.columns[1], 'NoPesanan');
      assert.equal(prefix.columns[2], 'StatusPesanan');
      assert.equal(prefix.columns[3], 'AlasanPembatalan');
    })
    .catch((err) => {
      throw new Error(err.message)
    });
  });

  it('Client send a POST request "/api/dataset/query" using tabular view', async () => {
    await dataset.POST(data.QUERY_TABULAR_VIEW)
    .then((res) => {
      const prefix = res.data.response.datasets.data;
      assert.equal(res.status, 200)
      assert.equal(res.data.response.total.data, 50)
      assert.equal(prefix.columns[0], 'NoPolisi')
      assert.equal(prefix.columns[1], 'SalesEmail')
      assert.equal(prefix.columns[2], 'CustomerEmail')
      assert.equal(prefix.columns[3], 'CustomerName')
      assert.jsonSchema(res.data, schema.QUERY_DATASET)
    })
    .catch((err) => {
      throw new Error(err.message)
    });
  });

  it('Client send a POST request using a wrong query', async () => {
    await dataset.POST(data.INVALID_QUERY)
    .then((res) => {
      assert.equal(res.status, 500);
      assert.equal(res.data.status, 'error');
      assert.equal(res.data.message, "Paques query error. Msg: Error initiate pool. Err : line 1:53 no viable alternative at input 'search from file '/Data_Penjualan/data_penjualan.csv';'")
    })
    .catch((err) => {
      throw new Error(err.message)
    })
  });
});
