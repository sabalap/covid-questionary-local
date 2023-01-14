import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IdentificationSchema } from '@/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { Store } from '@/store';

const useIdentification = () => {
  const navigate = useNavigate();
  const ctx = useContext(Store);
  const { changePageHandler } = ctx;

  const form = useForm({
    mode: 'onBlur',
    resolver: yupResolver(IdentificationSchema),
    defaultValues: {
      first_name: localStorage.getItem('first_name') || '',
      last_name: localStorage.getItem('last_name') || '',
      email: localStorage.getItem('email') || '',
    },
  });

  const { errors } = form.formState;

  const formSubmit = () => {
    changePageHandler(2);
    navigate('/covid');
  };
  return {
    form,
    formSubmit,
    errors,
  };
};

export default useIdentification;
