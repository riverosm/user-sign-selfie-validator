import api from "./api";

const validationApi = () => {
  async function add(data) {
    try {
      const response = await api.validations.create(data);
      return { loading: false, validations: response.data.response, error: null };
    } catch (error) {
      return { loading: false, validations: [], error };
    }
  }

  return {
    add,
  };
};

export default validationApi();
