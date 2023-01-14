import { Link } from 'react-router-dom';
import { useHeader } from '@/hooks';
import { mainLogo } from '@/assets';
const Start = () => {
  const { changePageHandler } = useHeader();
  return (
    <div className='bg-light-gray w-screen h-screen flex overflow-x-hidden flex-col justify-center items-center'>
      <img className='mb-24 start' src={mainLogo} alt='Logo' />
      <button onClick={() => changePageHandler(1)}>
        <div className='overflow-hidden'>
          <Link className='start-text2' to='/identification'>
            <h2 className='start-questionare-text opacity-0 text-center font-bold text-3xl text-light-black'>
              კითხვარის <br />
              დაწყება
            </h2>
          </Link>
        </div>
      </button>
    </div>
  );
};
export default Start;
