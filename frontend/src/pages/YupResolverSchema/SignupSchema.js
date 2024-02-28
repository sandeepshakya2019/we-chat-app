import * as yup from "yup";

let specialChars = "<>@!#$%^&*()+[]{}?:;|'\"\\,./~`=";
var checkForSpecialChar = function (string) {
  for (let i = 0; i < specialChars.length; i++) {
    if (string.indexOf(specialChars[i]) > -1) {
      return true;
    }
  }
  return false;
};

let numbers = "0123456789";
var checkForNumber = function (string) {
  for (let i = 0; i < numbers.length; i++) {
    if (string.indexOf(numbers[i]) > -1) {
      return true;
    }
  }
  return false;
};

export const SignupSchema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .test(
        "len",
        "Name can contain at most 20 chars",
        (val) => val.length <= 50
      ),
    bio: yup
      .string()
      .required("Bio is required")
      .test(
        "len",
        "Bio can containe at most 50 chars",
        (val) => val.length <= 50
      ),
    username: yup
      .string()
      .required("Username is required")
      .test(
        "len",
        "Name can contain at most 20 chars",
        (val) => val.length <= 50
      )
      .test(
        "specialChar",
        "Username can contains only underscore (_) or dash (-)",
        (val) => !checkForSpecialChar(val)
      ),
    password: yup
      .string()
      .required("Password is required")
      .test(
        "len",
        "Password should be greater then 5 characters",
        (val) => val.length > 5
      )
      .test(
        "specialChar",
        "Password should contains a speacial character",
        (val) => checkForSpecialChar(val)
      )
      .test("number", "Password should contains a number ", (val) =>
        checkForNumber(val)
      ),
  })
  .required();
