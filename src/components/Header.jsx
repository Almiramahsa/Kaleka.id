import { Icon } from '@iconify/react';
import Kaleka from '../assets/images/logo_kuning_kaleka-1.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isDropDownClick, setDropdownClick] = useState(false);

  const toggleMenu = () => {
    setDropdownClick(!isDropDownClick);
  };

  return (
    <>
      <nav className={`bg-kalekaBlack lg:p-4 md:p-4 flex justify-between items-center lg:w-full ${isDropDownClick ? 'lg:flex-grow' : ''}`}>
        <div className="mr-6 hidden lg:flex">
          <img src={Kaleka} alt="Logo Kaleka.id" className="h-10 w-auto" />
        </div>

        <div className="hidden lg:flex items-center justify-between mx-auto">
        <div className="flex-grow text-center">
          <Link to="/" className="text-kalekaYellow font-inter-bold text-base px-4 py-2 inline-flex items-center border-transparent mr-2 hover:border-kalekaGreen hover:border-t-2 transition-all duration-300 ease-in-out">BERANDA</Link>
          <Link to="/tentang-kami" className="text-kalekaYellow font-inter-bold text-base px-4 py-2 inline-flex items-center border-transparent mr-20 hover:border-kalekaGreen hover:border-t-2 transition-all duration-300 ease-in-out">TENTANG KAMI</Link>
        </div>
        </div>

        <div className="lg:hidden bg-kalekaBlack p-4 flex-grow flex justify-between items-center transition duration-700 ease-in-out">
          <div className='flex items-center justify-start px-4 '>
            <Icon onClick={toggleMenu} icon="ci:hamburger-md" color="white" width="24" height="24" className='' />
          </div>
          <div className='flex justify-end items-end'>
          <Link to="/">
            <img src={Kaleka} alt="Logo Kaleka.id" className="h-8 w-auto" />
          </Link>
              
        </div>
        </div>
      </nav>

      {isDropDownClick && (
      <div className='bg-kalekaBlack overflow-hidden'>
        <ul className='text-kalekaYellow font-inter-bold text-sm px-4 py-4 flex-col'>
      <li className="px-4 py-2 items-center border-transparent mb-2 hover:border-b hover:border-kalekaGreen">
        <Link to="/">BERANDA</Link>
      </li>
      <li className="px-4 py-2 items-center border-transparent mb-2">
        <Link to="/tentang-kami">TENTANG KAMI</Link>
      </li>
    </ul>
      </div>
    )}
    </>
  );
}

export default Header;
