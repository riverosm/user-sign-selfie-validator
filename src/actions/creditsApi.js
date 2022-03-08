import api from "./api";

const creditsApi = () => {
  async function get(parameters) {
    try {
      const response = await api.credits.list(parameters);
      return {
        loading: false,
        credits: response.data.rows,
        total: response.data.total,
        error: null,
      };
    } catch (error) {
      return { loading: false, credits: [], error };
    }
  }

  async function add(credit) {
    try {
      const response = await api.credits.create(credit);
      return { loading: false, response: response.data, error: null };
    } catch (error) {
      return { loading: false, response: [], error };
    }
  }

  // async function edit(credit) {
  //   try {
  //     const response = await api.credits.edit(credit);
  //     return { loading: false, credits: response.data.response, error: null };
  //   } catch (error) {
  //     return { loading: false, credits: [], error };
  //   }
  // }

  // async function remove(parameter) {
  //   try {
  //     const response = await api.credits.delete(parameter);
  //     return { loading: false, credits: response.data.response, error: null };
  //   } catch (error) {
  //     return { loading: false, credits: [], error };
  //   }
  // }

  return {
    get,
    add,
    // edit,
    // remove,
  };
};

export default creditsApi();
