import { labels, isNull, isValidMail } from "./utils";

const validateFields = (creditData) => {
  let errors = [];

  if (isNull(creditData.areaCode)) {
    errors.push({ field: "areaCode", message: labels.REQUIRED });
  }

  if (isNull(creditData.phoneNumber)) {
    errors.push({ field: "phoneNumber", message: labels.REQUIRED });
  }

  if (!isValidMail(creditData.email)) {
    errors.push({ field: "email", message: labels.INVALID_MAIL });
  }

  if (creditData.ask_cbu && (isNull(creditData.cbu) || creditData.cbu.length !== 22)) {
    errors.push({ field: "cbuNumber", message: labels.INVALID_CBU });
  }

  return errors;
};

export default validateFields;
