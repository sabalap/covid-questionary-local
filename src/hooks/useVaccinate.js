import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Store } from '@/store';

const useVaccinate = () => {
  const ctx = useContext(Store);
  const { changePageHandler } = ctx;
  const navigate = useNavigate();
  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      had_vaccine: localStorage.getItem('had_vaccine') || '',
      vaccination_stage: localStorage.getItem('vaccination_stage') || '',
      i_am_waiting: localStorage.getItem('i_am_waiting') || '',
    },
  });

  const had_vaccine = form.watch('had_vaccine');
  const vaccination_stage = form.watch('vaccination_stage');
  const i_am_waiting = form.watch('i_am_waiting');

  const { errors } = form.formState;

  const formSubmit = () => {
    changePageHandler(4);
    navigate('/advices');
  };

  const prevPage = () => {
    changePageHandler(2);
    navigate('/covid');
  };

  return {
    form,
    formSubmit,
    errors,
    prevPage,
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
  };
};

export default useVaccinate;
