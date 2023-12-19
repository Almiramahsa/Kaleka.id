import PropTypes from 'prop-types';
import Banner from '../assets/images/kaleka-copyright-1.png';
import getPageTitle from '../utils/pageTitle';

function BannerImage({ selectedCoordinate, pageTitle }) {
  const pageTitleText = selectedCoordinate ? 'DETAIL COORDINATE' : getPageTitle(pageTitle);

  return (
    <div className="relative bg-fixed bg-contain overflow-auto">
      <div className="flex items-center absolute inset-0">
        <p className="font-inter-bold text-kalekaWhite text-center w-full text-xl sm:text-xxl ">
          {pageTitleText}
        </p>
      </div>
      <img src={Banner} alt="Banner" className="w-full h-full" />
  
    </div>
  );
}

BannerImage.propTypes = {
  selectedCoordinate: PropTypes.any,
  pageTitle: PropTypes.string,
};

export default BannerImage;
