import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Beranda from '../pages/home';
import TentangKami from '../pages/tentang-kami';
import  CoordinateDetails from '../pages/coordinate-details';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Beranda />} path="/" exact />
        <Route element={<TentangKami />} path="/tentang-kami" />
        <Route element={<CoordinateDetails/>} path='/coordinate-details'/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;