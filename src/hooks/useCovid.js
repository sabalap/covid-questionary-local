import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Store } from '@/store';

const useCovid = () => {
  const navigate = useNavigate();
  const ctx = useContext(Store);
  const { changePageHandler } = ctx;
  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      had_covid: localStorage.getItem('had_covid') || '',
      had_antibody_test: localStorage.getItem('had_antibody_test') || '',
      covid_sickness_date: localStorage.getItem('covid_sickness_date') || '',
      number: localStorage.getItem('number') || '',
      test_date: localStorage.getItem('test_date') || '',
    },
  });

  const had_covid = form.watch('had_covid');
  const had_antibody_test = form.watch('had_antibody_test');

  const { errors } = form.formState;

  const formSubmit = () => {
    changePageHandler(3);
    navigate('/vaccinate');
  };

  const prevPage = () => {
    changePageHandler(1);
    navigate('/identification');
  };

  return {
    form,
    formSubmit,
    errors,
    prevPage,
    had_covid,
    had_antibody_test,
  };
};

export default useCovid;
