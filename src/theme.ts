const font = 'Pacifico, cursive';

// Color palette
const white = '#ffffff';
const pink = '#ee1c41';
const gray = '#757575';
const lightGray = 'rgba(117,117,117,0.8)';
const error = '#ef0505';

const boxShadows = [
  '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  '0 3px 7px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22)',
];

const gradientLight = 'linear-gradient(180deg, #e5effa,#f5f9fd,#ffffff)';

export default {
  boxShadows,
  gradientColor: gradientLight,
  colors: {
    white,
    pink,
    gray,
    lightGray,
    error,
  },
  font,
  spaces: [0, 5, 10, 20, 30, 40, 50, 60, 80, 100, 150, 200, 250, 350, 450, 550, 650],
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 40],
  borderRadius: [5, 10, 15],
};
