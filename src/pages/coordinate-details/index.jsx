import BannerImage from '../../components/BannerImage.jsx';
import Header from '../../components/Header.jsx';
import SelectedMap from '../../components/SelectedMap.jsx';
import useCoordinateStore from '../../store/getCoordinate.js';

function CoordinateDetails() {
  const selectedCoordinate = useCoordinateStore((state) => state.selectedCoordinate);

  return (
    <div>
      <Header />
      <BannerImage />
      <SelectedMap selectedCoordinate={selectedCoordinate} />
      {selectedCoordinate ? (
        <div className='relative z-2 mt-10 mb-5 mx-auto flex flex-col text-xs md:text-md lg:text-lg font-inter-bold text-center justify-center lg:flex-row md:flex-row'>
          <h4>Coordinates Details : </h4>
          <p> {selectedCoordinate.coordinates[0]}</p>
          <p>, {selectedCoordinate.coordinates[1]}</p>
        </div>
      ) : (
        <p>No coordinate selected</p>
      )}
    </div>
  );
}

export default CoordinateDetails;
