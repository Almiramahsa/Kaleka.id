const getPageTitle = () => {
  switch (location.pathname) {
    case '/tentang-kami':
      return 'TENTANG KAMI';
    case '/coordinate-details':
      return 'DETAIL COORDINATE';
    default:
      return '';
  }
};

export default getPageTitle;
