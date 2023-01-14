import { Fragment } from 'react';
import { FormProvider } from 'react-hook-form';
import { useCovid } from '@/hooks';
import { DateInput, RadioInput, Header, Layout } from '@/components';
import {
  prevIcon,
  nextIcon,
  covidImage,
  covidImageLogo,
  nextDisable,
} from '@/assets';

const Covid = () => {
  const { form, formSubmit, errors, prevPage, had_covid, had_antibody_test } =
    useCovid();

  return (
    <div className='bg-light-gray w-screen h-screen overflow-x-hidden'>
      <Header />
      <Layout>
        <div className='flex flex-col'>
          <div className='mb-5'>
            <p className='text-2xl font-bold text-light-black font-TBC-Contractica-CAPS'>
              გაქვს გადატანილი Covid-19?*
            </p>
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(formSubmit)}>
              <div className='flex items-center mb-5 ml-2'>
                <RadioInput
                  value='yes'
                  id='covid-yes'
                  name='had_covid'
                  rules={{ required: 'ველის შევსება სავალდებულოა' }}
                />
                <label
                  className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                  htmlFor='covid-yes'
                >
                  კი
                </label>
              </div>
              <div className='flex items-center mb-5 ml-2'>
                <RadioInput
                  value='no'
                  id='covid-no'
                  name='had_covid'
                  rules={{ required: 'ველის შევსება სავალდებულოა' }}
                />
                <label
                  className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                  htmlFor='covid-no'
                >
                  არა
                </label>
              </div>
              <div className='flex items-center mb-5 ml-2'>
                <RadioInput
                  value='have_right_now'
                  id='covid-now'
                  name='had_covid'
                  rules={{ required: 'ველის შევსება სავალდებულოა' }}
                />
                <label
                  className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                  htmlFor='covid-now'
                >
                  ახლა მაქვს
                </label>
              </div>
              <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                {errors?.had_covid?.message}
              </span>
              {had_covid === 'yes' && (
                <Fragment>
                  <div className='mb-5 mt-12'>
                    <p className='text-2xl font-bold text-light-black font-TBC-Contractica-CAPS'>
                      ანტისხეულების ტესტი გაქვს გაკეთებული?*
                    </p>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <RadioInput
                      name='had_antibody_test'
                      id='antibody-test-yes'
                      value={true}
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />
                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='antibody-test-yes'
                    >
                      კი
                    </label>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <RadioInput
                      name='had_antibody_test'
                      id='antibody-test-no'
                      value={false}
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />
                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='antibody-test-no'
                    >
                      არა
                    </label>
                  </div>
                  <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                    {errors?.had_antibody_test?.message}
                  </span>
                </Fragment>
              )}
              {had_antibody_test === 'false' && (
                <Fragment>
                  <div className='mb-5 mt-12'>
                    <p className='w-[40.188rem] text-2xl font-bold text-light-black font-TBC-Contractica-CAPS'>
                      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                      Covid-19*
                    </p>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <DateInput
                      name='covid_sickness_date'
                      placeholder='დდ/თთ/წწ'
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />
                  </div>
                  <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                    {errors.covid_sickness_date?.message}
                  </span>
                </Fragment>
              )}
              {had_covid === 'yes' && had_antibody_test === 'true' && (
                <Fragment>
                  <div className='mb-5 mt-12'>
                    <p className='w-[40.188rem] text-2xl font-bold text-light-black font-TBC-Contractica-CAPS'>
                      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                      ანტისხეულების რაოდენობა*
                    </p>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <DateInput
                      name='test_date'
                      placeholder='რიცხვი'
                      rules={{}}
                    />
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <DateInput
                      name='number'
                      placeholder='ანტისხეულების რაოდენობა'
                      type='number'
                      rules={{
                        pattern: {
                          value: /^[1-9]+$/,
                          message: 'შეიყვანეთ ვალიდური მნიშვნელობა',
                        },
                        min: {
                          value: 1,
                          message: 'შეიყვანეთ ვალიდური მნიშვნელობა',
                        },
                      }}
                    />
                  </div>
                  <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                    {errors.number?.message}
                  </span>
                </Fragment>
              )}
              <button type='submit'>
                <img
                  className={`z-30 absolute top-[48.688rem] left-[50.5rem]  ${
                    form.formState.isValid ? 'cursor-pointer' : 'cursor-auto'
                  }`}
                  src={form.formState.isValid ? nextIcon : nextDisable}
                  alt='next icon'
                />
              </button>
            </form>
          </FormProvider>
        </div>
        <div className='relative w-[57rem]'>
          <img
            className='absolute z-20 -top-[2rem] -right-2 h-[48rem]'
            src={covidImage}
            alt='Covid Img'
          />
          <img
            className='covid-img z-10 absolute top-44 mt-2 right-[33rem]'
            src={covidImageLogo}
            alt='Covid logo'
          />
          <img
            onClick={() => prevPage(1)}
            className='cursor-pointer absolute z-20 top-[48.688rem] right-[52.5rem]'
            src={prevIcon}
            alt='prev icon'
          />
        </div>
      </Layout>
    </div>
  );
};

export default Covid;
