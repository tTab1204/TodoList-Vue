import { VALID_INPUT_MESSAGE, VALID_DATE_MESSAGE } from "@/constants";

export const checkInputValidation = (value) => {
  if (!value.trim()) {
    alert(VALID_INPUT_MESSAGE);
    return false;
  }
  return true;
};

export const checkDateValidation = (date) => {
  const now = new Date();
  const today = date.setMinutes(date.getMinutes() + 1);

  if (today < now) {
    alert(VALID_DATE_MESSAGE);
    return false;
  }
  return true;
};
