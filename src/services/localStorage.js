const version = process.env.REACT_APP_VERSION;

export const getLocalStorageItem = (name, defaultValue) => {
  const value = JSON.parse(localStorage.getItem(`${name}_${version}`));

  if (value) {
    return value;
  } else {
    return defaultValue;
  }
};

export const setLocalStorageItem = (name, value) => {
  localStorage.setItem(`${name}_${version}`, JSON.stringify(value));
};
