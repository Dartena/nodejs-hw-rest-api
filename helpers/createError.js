const statusMessages = {
  200: "Success",
  201: "Contact added",
  400: "Enter correct Password or Email",
  401: "Email or password is wrong",
  404: "Not Found",
  409: "Email in use",
};

const createError = (status, message = statusMessages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = { createError };
