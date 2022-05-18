import url from 'url';

const queryParams = (parameter) => {
  const params = new url.URLSearchParams(parameter);
  return params;
};

export default queryParams;
