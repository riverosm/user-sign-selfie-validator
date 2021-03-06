import axios from "axios";

const BASE_URL = "https://financiaonline.com.ar/admin/api/";

async function callApi(endpoint, options = {}) {
  let restdb = await axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      // Authorization: localStorage.getItem("TOKEN_AUTH"),
    },
    //timeout: 2000, Acá debería ponerle un timeout
  });

  const errorInterceptor = (error) => {
    if (!error.response) {
      // Acá debería ir a por ejemplo alguna página de timeout excedido o de error 500
      return Promise.reject(error);
    }

    switch (error.response.status) {
      case 401:
        window.location.href = "/logout";
        break;
      default:
        console.error(error.response.status, error.message);
    }
    return Promise.reject(error);
  };

  restdb.interceptors.response.use(null, errorInterceptor);

  switch (options.method) {
    case "GET":
      if (options.parameter)
        return await restdb.get(`${endpoint}?${options.parameter}`);
      else return await restdb.get(`${endpoint}`);
    case "POST":
      return await restdb.post(endpoint, JSON.parse(options.body));
    case "PUT":
      return await restdb.put(endpoint, JSON.parse(options.body));
    case "DELETE":
      return await restdb.delete(`${endpoint}${options.parameter}`);
    default:
      break;
  }
}

const api = {
  validations: {
    create(data) {
      return callApi(`validate.php`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },
  credits: {
    list(parameter) {
      return callApi(`get.php`, {
        method: "GET",
        parameter,
      });
    },
  },
};

export default api;
