/* eslint-disable linebreak-style */

import testBase from '../config/testBase.service';

const path = '/api/dataset';

const dataset = {
  POST: (data) => testBase.post(`${path}`, data),
};

export default dataset;
