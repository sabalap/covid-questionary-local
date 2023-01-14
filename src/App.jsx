import { Route, Routes, BrowserRouter } from 'react-router-dom';

import {
  Start,
  Identification,
  Covid,
  Vaccinate,
  Advices,
  Thanks,
} from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/identification' element={<Identification />} />
        <Route path='/covid' element={<Covid />} />
        <Route path='/vaccinate' element={<Vaccinate />} />
        <Route path='/advices' element={<Advices />} />
        <Route path='/thanks' element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
