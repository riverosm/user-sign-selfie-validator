import { labels, isNull } from "./utils";

const validateFields = (userData) => {
  let errors = [];

  if (isNull(userData.name)) {
    errors.push({ field: "name", message: labels.REQUIRED });
  }

  if (isNull(userData.surname)) {
    errors.push({ field: "surname", message: labels.REQUIRED });
  }

  return errors;
};

export default validateFields;
