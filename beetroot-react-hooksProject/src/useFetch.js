import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((defaultValue) => {
    defaultValue !== undefined
      ? setValue(defaultValue) //set true or false
      : setValue((value) => !value); //if param is not supplied, toggle the value
  }, []);

  return [value, toggle];
};

export default useToggle;