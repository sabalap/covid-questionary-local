import { logo } from '@/assets';
import { useHeader } from '@/hooks';
const Header = () => {
  const { page } = useHeader();
  return (
    <header className='2xl:w-[95.25rem] border-b-[0.15rem] pb-3 mb-10 z-0 border-light-black border-opacity-40 mx-auto pt-12 flex justify-between items-center'>
      <img src={logo} alt='Logo' />
      <div className='font-Anonymous-Pro text-4xl font-bold'>{page}/4</div>
    </header>
  );
};

export default Header;
