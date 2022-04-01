import { labels, isNull } from "./utils";

const validateFields = (creditData) => {
  let errors = [];

  if (isNull(creditData.areaCode)) {
    errors.push({ field: "areaCode", message: labels.REQUIRED });
  }

  if (isNull(creditData.phoneNumber)) {
    errors.push({ field: "phoneNumber", message: labels.REQUIRED });
  }

  return errors;
};

export default validateFields;
