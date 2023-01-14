import { useEffect, useContext } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Store } from '@/store';

const useInput = (name) => {
  const ctx = useContext(Store);
  const { createEmployee } = ctx;
  const form = useFormContext();

  const inputValue = useWatch({
    name: name,
    control: form.control,
  });
  useEffect(() => {
    if (name) {
      localStorage.setItem(name, inputValue);
    } else {
      localStorage.removeItem(name);
    }
    createEmployee();
  }, [inputValue, name, createEmployee]);

  return { form };
};

export default useInput;
