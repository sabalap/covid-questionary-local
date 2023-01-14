import {
  nextIcon,
  identificationImage,
  identificationImageLogo,
  nextDisable,
} from '@/assets';
import { FormProvider } from 'react-hook-form';
import { useIdentification } from '@/hooks';
import { Header, Layout, Input } from '@/components';

const Identification = () => {
  const { form, formSubmit, errors } = useIdentification();

  return (
    <div className='bg-light-gray w-screen h-screen overflow-x-hidden'>
      <Header />
      <Layout>
        <div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(formSubmit)}>
              <div className='flex flex-col mb-6'>
                <label
                  htmlFor='first_name'
                  className='text-xl font-TBC-Contractica-CAPS mb-3 text-light-black font-bold'
                >
                  სახელი*
                </label>
                <Input
                  type='text'
                  placeholder='იოსებ'
                  id='first_name'
                  name='first_name'
                />
                <span className='mt-1.5 text-base text-orange-600 h-6 font-TBC-Contractica-CAPS'>
                  {errors?.first_name?.message}
                </span>
              </div>
              <div className='flex flex-col mb-6'>
                <label
                  htmlFor='last_name'
                  className='text-xl font-TBC-Contractica-CAPS mb-3 text-light-black font-bold'
                >
                  გვარი*
                </label>
                <Input
                  type='text'
                  placeholder='ჯუღაშვილი'
                  id='last_name'
                  name='last_name'
                />
                <span className='mt-1.5 text-base text-orange-600 h-6 font-TBC-Contractica-CAPS'>
                  {errors?.last_name?.message}
                </span>
              </div>
              <div className='flex flex-col'>
                <label
                  htmlFor='email'
                  className='text-xl font-TBC-Contractica-CAPS mb-3 text-light-black font-bold'
                >
                  მეილი*
                </label>
                <Input id='email' name='email' placeholder='fbi@redberry.ge' />
                <span className='font-TBC-Contractica-CAPS mt-1.5 text-base text-orange-600 h-6'>
                  {errors?.email?.message}
                </span>
              </div>
              <button type='submit'>
                <img
                  className={`absolute top-[48.688rem] left-[48.5rem] ${
                    form.formState.isValid ? 'cursor-pointer' : 'cursor-auto'
                  }`}
                  src={form.formState.isValid ? nextIcon : nextDisable}
                  alt='next icon'
                />
              </button>
            </form>
          </FormProvider>
          <div className='bg-black h-px w-[14.813rem] mt-28'></div>
          <p className='font-TBC-Contractica-CAPS text-[#626262] mt-5 font-normal text-base'>
            *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
          </p>
        </div>
        <img
          className='relative z-20 -mt-20'
          src={identificationImage}
          alt='Identification'
        />
        <img
          className='identification-img z-10 absolute top-36 mt-2 right-36'
          src={identificationImageLogo}
          alt='Identification Logo'
        />
      </Layout>
    </div>
  );
};

export default Identification;
