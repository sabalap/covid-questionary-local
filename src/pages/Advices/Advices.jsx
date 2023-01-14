import { FormProvider } from 'react-hook-form';
import { useAdvices } from '@/hooks';
import { prevIcon, bikeImage, bikeImageLogo } from '@/assets';

import {
  RadioInput,
  Header,
  Layout,
  TextArea,
  AdvicesIntro,
} from '@/components';

const Advices = () => {
  const { form, formSubmit, errors, prevPage } = useAdvices();

  return (
    <div className='bg-light-gray w-screen pb-10 min-h-screen overflow-x-hidden'>
      <Header />
      <Layout>
        <div className='flex flex-col w-full'>
          <AdvicesIntro />
          <FormProvider {...form}>
            <form className='mb-11' onSubmit={form.handleSubmit(formSubmit)}>
              <div className='h-[13.5rem]'>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='non_formal_meetings'
                    id='twice-week'
                    value='twice_a_week'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='twice-week'
                  >
                    კვირაში ორჯერ
                  </label>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='non_formal_meetings'
                    id='once-week'
                    value='once_a_week'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='once-week'
                  >
                    კვირაში ერთხელ
                  </label>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='non_formal_meetings'
                    id='once-two-week'
                    value='once_in_a_two_weeks'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='once-two-week'
                  >
                    ორ კვირაში ერთხელ
                  </label>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='non_formal_meetings'
                    id='once-month'
                    value='once_in_a_month'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='once-month'
                  >
                    თვეში ერთხელ
                  </label>
                </div>
                <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                  {errors.non_formal_meetings?.message}
                </span>
              </div>
              <div className='h-[25rem]'>
                <div className='mb-5 mt-4'>
                  <p className='w-[39.575rem] text-[1.4rem] font-bold text-light-black font-TBC-Contractica-CAPS'>
                    კვირაში რამდენი დღე ისურვებდი ოფისიდან <br /> მუშაობას?*
                  </p>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='number_of_days_from_office'
                    id='zero-day'
                    value='0'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='zero-day'
                  >
                    0
                  </label>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='number_of_days_from_office'
                    id='one-day'
                    value='1'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='one-day'
                  >
                    1
                  </label>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='number_of_days_from_office'
                    id='two-day'
                    value='2'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='two-day'
                  >
                    2
                  </label>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='number_of_days_from_office'
                    value='3'
                    id='three-day'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='three-day'
                  >
                    3
                  </label>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='number_of_days_from_office'
                    value='4'
                    id='four-day'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='four-day'
                  >
                    4
                  </label>
                </div>
                <div className='flex items-center mb-5 ml-2'>
                  <RadioInput
                    name='number_of_days_from_office'
                    value='5'
                    id='five-day'
                    rules={{ required: 'ველის შევსება სავალდებულოა' }}
                  />
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='five-day'
                  >
                    5
                  </label>
                </div>
                <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                  {errors.number_of_days_from_office?.message}
                </span>
              </div>
              <div className='mb-5 mt-4'>
                <p className='w-[39.575rem] text-[1.4rem] font-bold text-light-black font-TBC-Contractica-CAPS'>
                  რას ფიქრობ ფიზიკურ შეკრებებზე?
                </p>
              </div>
              <div className='flex items-center mb-11'>
                <TextArea name='what_about_meetings_in_live' />
              </div>
              <div className='mb-5'>
                <p className='w-[33.999rem] text-[1.4rem] font-bold text-light-black font-TBC-Contractica-CAPS'>
                  რას ფიქრობ არსებულ გარემოზე: <br /> რა მოგწონს, რას
                  დაამატებდი, რას შეცვლიდი?
                </p>
              </div>
              <div className='flex items-center mb-11'>
                <TextArea name='tell_us_your_opinion_about_us' />
              </div>
              <div className='w-[36.575rem] text-end top-[127.688rem] left-[40.5rem]'>
                <button className='bg-[#208298] w-44 h-14 text-lg font-bold rounded-[2.625rem] text-white'>
                  დასრულება
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
        <img
          className='z-20 fixed top-[10rem] left-[57.5rem]'
          src={bikeImage}
          alt='bike'
        />
        <img
          className='advices-img z-10 fixed left-[63.5rem] top-[14rem]'
          src={bikeImageLogo}
          alt='bike logo'
        />
        <img
          onClick={() => prevPage(3)}
          className='cursor-pointer absolute top-[112.688rem] left-[40.5rem]'
          src={prevIcon}
          alt='prev icon'
        />
      </Layout>
    </div>
  );
};

export default Advices;
