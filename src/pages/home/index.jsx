import  { useState } from 'react';
import Header from '../../components/Header';
import BannerImage from '../../components/BannerImage';
import DisplayMap from '../../components/DisplayMap';

function Beranda() {
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [pageTitle, setPageTitle] = useState('');

  const handleCoordinateClick = (pageTitle) => {
    setSelectedCoordinate('DisplayMap');
    setPageTitle(pageTitle);
  };

  return (
    <>
      <Header />
      <BannerImage selectedCoordinate={selectedCoordinate} pageTitle={pageTitle} />
      <DisplayMap onCoordinateClick={handleCoordinateClick} />
    </>
  );
}

export default Beranda;
