import { star1, star2 } from '@/assets';

const Thanks = () => {
  return (
    <section className='bg-black relative h-screen w-screen flex justify-center items-center'>
      <h1 className='text-white text-[4rem] font-bold tracking-[1rem]'>
        მადლობა
      </h1>
      <img
        className='left-star absolute top-[40%] left-[40%]'
        src={star1}
        alt='star'
      />
      <img
        className='right-star absolute top-[54%] left-[57.5%]'
        src={star2}
        alt='star'
      />
    </section>
  );
};

export default Thanks;
