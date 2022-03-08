import { labels, isNull } from "./utils";

const validateFields = (creditData) => {
  let errors = [];

  if (isNull(creditData.name)) {
    errors.push({ field: "name", message: labels.REQUIRED });
  }

  if (isNull(creditData.surname)) {
    errors.push({ field: "surname", message: labels.REQUIRED });
  }

  return errors;
};

export default validateFields;
