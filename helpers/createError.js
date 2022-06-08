const statusMessages = {
  404: "Not Found",
  201: "Contact added",
  200: "Success",
};

const createError = (status, message = statusMessages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = { createError };
