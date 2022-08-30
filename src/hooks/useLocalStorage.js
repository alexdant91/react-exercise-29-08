import { useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => { // storedValue -> null
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setStoredValue(newValue);
  }

  return [storedValue, setValue];
}

// const [user, setUser] = useLocalStorage('user', null);
