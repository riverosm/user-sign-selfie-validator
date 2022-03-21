import { labels, isNull } from "./utils";

const validateFields = (creditData) => {
  let errors = [];

  if (isNull(creditData.name)) {
    errors.push({ field: "name", message: labels.REQUIRED });
  }

  return errors;
};

export default validateFields;
