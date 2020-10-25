export const validate = (value, rules) => {
  let isValid = [true, ""];
  for (let rule in rules) {
    switch (rule) {
      case "minLength":
        isValid[0] = isValid[0] && minLengthValidator(value, rules[rule]);
        isValid[1] = !isValid[0] && "Minmum length of the name is 8 characters";
        break;
      case "isRequired":
        isValid[0] = isValid[0] && requiredValidator(value);
        isValid[1] = !isValid[0] && "This field is required";
        break;
      default:
        isValid = [true, ""];
    }
  }
  return isValid;
};
const requiredValidator = (value) => {
  return value.trim() !== "";
};
const minLengthValidator = (value, minLength) => {
  return value.trim().length >= minLength;
};
