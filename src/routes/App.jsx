import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';


import Beranda from '../pages/home';
import TentangKami from '../pages/tentang-kami';
const App = () => {
  axios.defaults.baseURL = 'https://run.mocky.io/v3/07e88d94-b1de-4e13-89c3-1851cc16019b';
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Beranda />} path="/" />
        <Route element={<TentangKami />} path="/tentang-kami" />

        </Routes>
    </BrowserRouter>
  );
};

export default App;