// src/utils/localStorage.js
export const getLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };
  
  export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  