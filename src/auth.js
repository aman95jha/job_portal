const isLoggedIn = () => {
  const data = JSON.parse(localStorage.getItem("terajob"));
  if (data) {
    return data;
  } else {
    return false;
  }
};

const logIn = (data) => {
  localStorage.setItem("terajob", JSON.stringify(data));
  return true;
};

const logMeOut = () => {
  localStorage.clear();
};

module.exports = {
  isLoggedIn,
  logIn,
  logMeOut,
};
