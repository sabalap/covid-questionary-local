import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Store } from '@/store';

const useAdvices = () => {
  const navigate = useNavigate();
  const ctx = useContext(Store);
  const { changePageHandler, submitHandler } = ctx;
  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      non_formal_meetings: localStorage.getItem('non_formal_meetings') || '',
      number_of_days_from_office:
        localStorage.getItem('number_of_days_from_office') || '',
      what_about_meetings_in_live:
        localStorage.getItem('what_about_meetings_in_live') || '',
      tell_us_your_opinion_about_us:
        localStorage.getItem('tell_us_your_opinion_about_us') || '',
    },
  });

  const { errors } = form.formState;

  const formSubmit = () => {
    submitHandler();
    navigate('/thanks');
  };

  const prevPage = () => {
    changePageHandler(3);
    navigate('/vaccinate');
  };

  return {
    form,
    formSubmit,
    errors,
    prevPage,
  };
};

export default useAdvices;
