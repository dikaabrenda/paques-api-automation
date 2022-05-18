/* eslint-disable linebreak-style */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import dataset from '../../../routes/dataset.api';
import * as data from '../../../data/dataset/query';

describe('as a user, i want to send querry dataset in PDS Application', () => {
  it('Client send a POST request /api/dataset/query', async () => {
    const res = await dataset.POST(data.DATA_SPLIT_EVENT);
    assert.equal(res.status, 200);
    assert.equal(res.data.response.datasets.test2.columns[1], 'NoPesanan');
    assert.equal(res.data.response.datasets.test2.columns[2], 'StatusPesanan');
    assert.equal(res.data.response.datasets.test2.columns[3], 'AlasanPembatalan');
    assert.isNotNull(res.data.response);
    assert.equal(res.headers['Content-Type'], 'application/json');
  });

  it('Client send a POST request using wrong querry', async () => {
    const res = await dataset.POST(data.DATA_WRONG_QUERY);
    assert.equal(res.status, 500);
    assert.equal(res.data.status, 'error');
    assert.equal(res.data.message, "Paques query error. Msg: Error initiate pool. Err : line 1:53 no viable alternative at input 'search from file '/Data_Penjualan/data_penjualan.csv''");
  });
});
