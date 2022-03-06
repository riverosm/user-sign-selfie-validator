import api from "./api";

const usersApi = () => {
  async function get(parameters) {
    try {
      const response = await api.users.list(parameters);
      return {
        loading: false,
        users: response.data.rows,
        total: response.data.total,
        error: null,
      };
    } catch (error) {
      return { loading: false, products: [], error };
    }
  }

  // async function add(product) {
  //   try {
  //     const response = await api.products.create(product);
  //     return { loading: false, products: response.data.response, error: null };
  //   } catch (error) {
  //     return { loading: false, products: [], error };
  //   }
  // }

  // async function edit(product) {
  //   try {
  //     const response = await api.products.edit(product);
  //     return { loading: false, products: response.data.response, error: null };
  //   } catch (error) {
  //     return { loading: false, products: [], error };
  //   }
  // }

  // async function remove(parameter) {
  //   try {
  //     const response = await api.products.delete(parameter);
  //     return { loading: false, products: response.data.response, error: null };
  //   } catch (error) {
  //     return { loading: false, products: [], error };
  //   }
  // }

  return {
    get,
    // add,
    // edit,
    // remove,
  };
};

export default usersApi();
