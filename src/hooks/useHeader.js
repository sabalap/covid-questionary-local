import { useContext } from 'react';
import { Store } from '@/store';

const useHeader = () => {
  const ctx = useContext(Store);
  const { page, changePageHandler } = ctx;
  return { page, changePageHandler };
};
export default useHeader;
