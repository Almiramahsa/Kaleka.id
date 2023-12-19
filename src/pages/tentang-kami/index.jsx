import{ useState, useEffect } from 'react';
import Header from "../../components/Header";
import BannerImage from "../../components/BannerImage";
import data from '../../datas/about/about.json';
import { useLocation } from 'react-router-dom';

function TentangKami() {
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  const handleToggleAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return `${words.slice(0, limit).join(' ')}...`;
    } else {
      return text;
    }
  };

  return (
    <div>
      <Header />
      <BannerImage page={currentPage} />
      <div className="flex justify-center items-center mt-10 font-inter-medium ">
        <div className="text-start w-fit mx-16">
          <p className={`lg:text-justify text-sm lg:text-base xl:text-lg mb-2 ${isSmallScreen ? 'lg:mb-5 xl:mb-10' : ''}`}>
            {isSmallScreen ? (
              showFullAbout ? data.about : truncateText(data.about, 30)
            ) : (
              data.about
            )}
            {isSmallScreen && (
              <span onClick={handleToggleAbout} className="text-kalekaBlue cursor-pointer">
                {showFullAbout ? 'Read Less' : 'Read More'}
              </span>
            )}
          </p>

          <p className={`lg:text-justify text-sm lg:text-base xl:text-lg mb-2 pt-4 ${isSmallScreen ? 'lg:mb-5 xl:mb-10' : ''}`}>
            {isSmallScreen ? (
              showFullDescription ? data.description : truncateText(data.description, 30)
            ) : (
              data.description
            )}
            {isSmallScreen && (
              <span onClick={handleToggleDescription} className="text-kalekaBlue  cursor-pointer">
                {showFullDescription ? 'Read Less' : 'Read More'}
              </span>
            )}
          </p>

          <div className="grid lg:my-auto lg:text-left mt-10">
            <div className="font-italic_medium text-left text-sm lg:text-base xl:text-lg">
              <div>
                <p className="text-base underline font-inter-bold">Vission</p>
                <p className="font-italic_medium text-left text-sm lg:text-base xl:text-lg mb-4">
                  {data.vision}
                </p>
              </div>
              <div>
                <p className="text-base underline font-inter-bold">Mission</p>
                <p className="mb-4">
                  {data.mission}
                </p>
              </div>
              <div>
                <p className="text-base underline font-inter-bold">Purpose</p>
                <p>
                  {data.purpose1}
                </p>
                <p className="mb-10">
                  {data.purpose2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;
