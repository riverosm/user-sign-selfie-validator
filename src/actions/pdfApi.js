import api from "./api";

const pdfApi = () => {
  async function add(data) {
    try {
      const response = await api.pdfs.create(data);
      return { loading: false, pdfs: response.data.response, error: null };
    } catch (error) {
      return { loading: false, pdfs: [], error };
    }
  }

  return {
    add,
  };
};

export default pdfApi();
