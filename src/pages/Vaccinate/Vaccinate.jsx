import { Fragment } from 'react';
import { FormProvider } from 'react-hook-form';
import { useVaccinate } from '@/hooks';
import {
  prevIcon,
  nextIcon,
  doctorImage,
  doctorImageLogo,
  nextDisable,
} from '@/assets';

import { Header, RadioInput, Layout } from '@/components';

const Vaccinate = () => {
  const {
    form,
    formSubmit,
    errors,
    prevPage,
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
  } = useVaccinate();

  return (
    <div className='bg-light-gray w-screen h-screen overflow-x-hidden'>
      <Header />
      <Layout>
        <div className='flex flex-col'>
          <div className='mb-5'>
            <p className='text-2xl font-bold text-light-black font-TBC-Contractica-CAPS'>
              უკვე აცრილი ხარ?*
            </p>
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(formSubmit)}>
              <div className='flex items-center mb-5 ml-2'>
                <RadioInput
                  value={true}
                  id='vaccine-yes'
                  name='had_vaccine'
                  rules={{ required: 'ველის შევსება სავალდებულოა' }}
                />
                <label
                  className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                  htmlFor='vaccine-yes'
                >
                  კი
                </label>
              </div>
              <div className='flex items-center mb-5 ml-2'>
                <RadioInput
                  value={false}
                  id='vaccine-no'
                  name='had_vaccine'
                  rules={{ required: 'ველის შევსება სავალდებულოა' }}
                />
                <label
                  className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                  htmlFor='vaccine-no'
                >
                  არა
                </label>
              </div>
              <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                {errors.had_vaccine?.message}
              </span>
              {had_vaccine === 'true' && (
                <Fragment>
                  <div className='mb-5'>
                    <p className='text-2xl font-bold text-light-black font-TBC-Contractica-CAPS'>
                      აირჩიე რა ეტაპზე ხარ*
                    </p>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <RadioInput
                      value='first_dosage_and_registered_on_the_second'
                      id='vaccination-stage-register'
                      name='vaccination_stage'
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />

                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='vaccination-stage-register'
                    >
                      პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
                    </label>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <RadioInput
                      value='fully_vaccinated'
                      id='vaccinated'
                      name='vaccination_stage'
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />
                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='vaccinated'
                    >
                      სრულად აცრილი ვარ
                    </label>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <RadioInput
                      value='first_dosage_and_not_registered_yet'
                      id='vaccination-stage-not-register'
                      name='vaccination_stage'
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />
                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='vaccination-stage-not-register'
                    >
                      პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                    </label>
                  </div>
                  <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                    {errors.vaccination_stage?.message}
                  </span>
                </Fragment>
              )}
              {had_vaccine === 'false' && (
                <Fragment>
                  <div className='mb-5'>
                    <p className='text-2xl font-bold text-light-black font-TBC-Contractica-CAPS'>
                      რას ელოდები?*
                    </p>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <RadioInput
                      name='i_am_waiting'
                      id='register-waiting-date'
                      value='registered_and_waiting'
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />
                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='register-waiting-date'
                    >
                      დარეგისტრირებული ვარ და ველოდები რიცხვს
                    </label>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <RadioInput
                      name='i_am_waiting'
                      id='no-plan'
                      value='not_planning'
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />
                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='no-plan'
                    >
                      არ ვგეგმავ
                    </label>
                  </div>
                  <div className='flex items-center mb-5 ml-2'>
                    <RadioInput
                      name='i_am_waiting'
                      id='plan-future'
                      value='had_covid_and_planning_to_be_vaccinated'
                      rules={{ required: 'ველის შევსება სავალდებულოა' }}
                    />
                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='plan-future'
                    >
                      გადატანილი მაქვს და ვგეგმავ აცრას
                    </label>
                  </div>
                  <span className='mt-1.5 text-base text-orange-600 font-TBC-Contractica-CAPS'>
                    {errors.i_am_waiting?.message}
                  </span>
                </Fragment>
              )}
              {had_vaccine === 'true' &&
                vaccination_stage === 'first_dosage_and_not_registered_yet' && (
                  <div className='flex items-center mb-5 ml-12 mt-5'>
                    <label
                      className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='vaccination-stage-not-register'
                    >
                      რომ არ გადადო, <br /> ბარემ ახლავე დარეგისტრირდი <br />
                      <a
                        href='https://booking.moh.gov.ge/'
                        className='text-[#1289AE]'
                        rel='noreferrer'
                      >
                        https://booking.moh.gov.ge/
                      </a>
                    </label>
                  </div>
                )}
              {had_vaccine === 'false' && i_am_waiting === 'not_planning' && (
                <div className='flex items-center mb-5 ml-12 mt-5'>
                  <label
                    className='text-xl font-normal text-light-black font-TBC-Contractica-CAPS'
                    htmlFor='vaccination-stage-not-register'
                  >
                    <a
                      href='https://booking.moh.gov.ge/'
                      className='text-[#1289AE]'
                      rel='noreferrer'
                    >
                      👉 https://booking.moh.gov.ge/
                    </a>
                  </label>
                </div>
              )}
              {had_vaccine === 'false' &&
                i_am_waiting === 'had_covid_and_planning_to_be_vaccinated' && (
                  <div className='flex flex-col items-start mb-5 ml-12 mt-5'>
                    <label
                      className='text-xl mb-5 font-normal text-light-black font-TBC-Contractica-CAPS'
                      htmlFor='vaccination-stage-not-register'
                    >
                      ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br /> თვის შემდეგ
                      შეგიძლიათ ვაქცინის გაკეთება. <br />
                    </label>
                    <div className='text-xl font-normal font-TBC-Contractica-CAPS'>
                      👉 რეგისტრაციის ბმული <br />{' '}
                      <a
                        href='https://booking.moh.gov.ge/'
                        className='text-[#1289AE]'
                        rel='noreferrer'
                      >
                        https://booking.moh.gov.ge/
                      </a>
                    </div>
                  </div>
                )}
              <button type='submit'>
                <img
                  className={`absolute top-[48.688rem] left-[51.5rem] ${
                    form.formState.isValid ? 'cursor-pointer' : 'cursor-auto'
                  }`}
                  src={form.formState.isValid ? nextIcon : nextDisable}
                  alt='next icon'
                />
              </button>
            </form>
          </FormProvider>
        </div>
        <img
          className='z-20 absolute top-[1rem] left-[46.5rem]'
          src={doctorImage}
          alt='doctor'
        />
        <img
          className='vaccinate-img z-10 absolute right-[28.5rem] -top-0'
          src={doctorImageLogo}
          alt='doctor logo'
        />
        <img
          onClick={() => prevPage(2)}
          className='cursor-pointer absolute top-[48.688rem] left-[42.5rem]'
          src={prevIcon}
          alt='prev icon'
        />
      </Layout>
    </div>
  );
};

export default Vaccinate;
