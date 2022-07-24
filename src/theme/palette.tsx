import { alpha } from '@mui/material/styles';

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
  MAX: '#000000',
};

const PRIMARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: GREY[0],
};
const SECONDARY = {
  lighter: '#FDD9E5',
  light: '#F78EC5',
  main: '#E744B9',
  dark: '#A6229A',
  darker: '#640D6E',
  contrastText: GREY[0],
};
const INFO = {
  lighter: '#D6F9FE',
  light: '#85DDFD',
  main: '#34AEF9',
  dark: '#1A66B3',
  darker: '#093377',
  contrastText: GREY[800],
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#A9F27C',
  main: '#51d429',
  dark: '#209814',
  darker: '#07650C',
  contrastText: GREY[800],
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#b98303',
  darker: '#7A4F01',
  contrastText: GREY[800],
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: GREY[0],
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const COMMON = {
  common: { black: GREY['MAX'], white: GREY[0] },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: GREY[0], default: GREY[0], neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: GREY[0], secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
