import testBase from '../config/testBase.service';

const path = `/api/user`;
const pathId = localStorage.getItem('UserId');
const wrongId = '601ce702-3c91-4519-9626-9f72370d82aa';

const users = {
  POST: (data) => testBase.post(`${path}/add`, data),
  GET: () => testBase.get(`${path}/${pathId}`),
  GETWRONGID: () => testBase.get(`${path}/${wrongId}`),
  PUT: (data) => testBase.put(`${path}/${pathId}`, data),
  DELETE: () => testBase.delete(`${path}/${pathId}`),
};

export default users;
