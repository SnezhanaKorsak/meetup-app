const font = 'Pacifico, cursive';

// Color palette
const black = '#121212';
const white = '#ffffff';
const pink = '#ee1c41';
const light = 'rgba(255,255,255,0.9)';
const steelBlue = '#b3c7de';
const darkBlue = '#759ac6';
const lightGray = '#e8e8e8';
const gray = '#757575';
const aquamarine = '#64ffda';

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
    error,
  },
  font,
  spaces: [0, 5, 10, 20, 30, 40, 50, 60, 80, 100, 150, 200, 250, 350, 450, 550, 650],
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 40],
  borderRadius: [5, 10, 15],
};
