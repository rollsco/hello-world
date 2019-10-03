const version = process.env.REACT_APP_VERSION;

export const getLocalStorageItem = (name, defaultValue) => {
  const value = JSON.parse(localStorage.getItem(name));
  const valueVersion = localStorage.getItem(`${name}_version`);

  if (value && version === valueVersion) {
    return value;
  } else {
    return defaultValue;
  }
};

export const setLocalStorageItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
  localStorage.setItem(`${name}_version`, version);
};
