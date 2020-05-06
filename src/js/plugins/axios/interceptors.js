const tokenKey = "my_app_token";

function setTokenOnLogin(response) {
  const isLoginUrl = response.config.url.includes("login");
  if (isLoginUrl) {
    const token = response.data.token;
    localStorage.setItem(tokenKey, token);
  }
  return response;
}

function getClearResponse(response) {
  return response.data;
}

function setToken(request) {
  const isAuthUrl = request.url.includes('auth');
  if(!isAuthUrl){
    const token = localStorage.getItem(tokenKey);
    request.headers['x-access-token'] = token;
  }
  return request;
}

function onError(error){
  console.dir(error);
  return Promise.reject(error);
}

export default function (axios) {
  axios.interceptors.response.use(setTokenOnLogin);
  axios.interceptors.request.use(setToken);
  axios.interceptors.response.use(getClearResponse, onError);
}
