import * as conf from "./Config";

class ApiHandler {}
const getResult = (
  url,
  method = "GET",
  data = null,
  success = () => {},
  failed = () => {}
) => {
  let parameters = {};
  parameters.method = method;
  if (data) {
    parameters.body = data;
  }
  parameters.headers = {
    "Content-Type": "application/json",
    // Accept: x "application/json",
  };
  try {
    fetch(conf.apiUrl + url, parameters)
      .then((response) => response.json())
      .then((res) => {
        success(res);
      })
      .catch((error) => {
        failed(error);
      });
  } catch (error) {
    failed(error);
  }
};

export const otpGenerate = (
  phoneNo,
  success = (response) => {},
  failed = (error) => {}
) => {
  if (!phoneNo) {
    failed("not found");
    return;
  }
  getResult(
    "/otp/",
    "POST",
    JSON.stringify({ username: phoneNo }),
    (response) => {
      if (response.status === 200) {
        success(response);
      } else {
        failed(response);
      }
    }
  );
};
export const signin = (phoneNo, otp, success = () => {}, failed = () => {}) => {
  if (!otp || !phoneNo) return;
  getResult(
    "/login/",
    "POST",
    JSON.stringify({ username: phoneNo, password: otp }),
    (response) => {
      success(response);
    }
  );
};
export const signup = (fname, lname, phoneNo, success = () => {}) => {
  if (!fname || !lname || !phoneNo) return;
  getResult(
    "/user-register/",
    "POST",
    JSON.stringify({
      contact: phoneNo,
      username: phoneNo,
      first_name: fname,
      last_name: lname,
    }),
    (response) => {
      success(response);
    }
  );
};
export default ApiHandler;
