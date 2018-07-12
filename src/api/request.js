const API_URL = process.env.REACT_APP_API_URL;

const getOptions = (data, method, token = null, extraHeaders = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : undefined,
    ...extraHeaders,
  };

  const parsedBody =
    headers['Content-Type'] === 'application/json'
      ? JSON.stringify(data)
      : data;

  return {
    method: method.toUpperCase(),
    body: method.toLowerCase() === 'get' ? undefined : parsedBody,
    headers,
  };
};

function Unauthorized(response) {
  this.message = 'You dont have permissions.';
  this.status = response.status;

  return this;
}

function NotFound(response) {
  this.message = 'Not found';
  this.status = response.status;

  return this;
}

function InvalidData(response) {
  this.message = 'Data is invalid or malformed';
  this.response = response;
  this.status = response.status;

  return this;
}

function checkValidResponse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 401) {
    throw new Unauthorized(response);
  } else if (response.status === 404) {
    throw new NotFound(response);
  } else if (response.status === 422) {
    throw new InvalidData(response);
  } else {
    throw new Error(response.status);
  }
}

const parseJson = response => {
  if (response.status === 200) {
    return response.json();
  }

  return response.status;
};

const request = (url, method, data, token, extraHeaders) => {
  const options = getOptions(data, method, token, extraHeaders);

  return fetch(`${API_URL}${url}`, options)
    .then(checkValidResponse)
    .then(parseJson);
};

export default (url, method, data, token, extraHeaders) => {
  return request(url, method, data, token, extraHeaders);
};
