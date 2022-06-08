import testBase from '../config/testBase.service';

const path = `/api/dataset/query`;

const dataset = {
  POST: (data) => testBase.post(`${path}`, data),
};

export default dataset;
