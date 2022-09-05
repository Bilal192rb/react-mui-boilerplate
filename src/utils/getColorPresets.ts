import palette from '../theme/palette';

type ColorPalette = {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export const colorPresets: Array<ColorPalette> = [
  // DEFAULT
  {
    name: 'default',
    ...palette.light.primary,
  },
  // RED
  {
    name: 'red',
    lighter: '#FEE2E2',
    light: '#FCA5A5',
    main: '#EF4444',
    dark: '#B91C1C',
    darker: '#7F1D1D',
    contrastText: palette.light.grey[0],
  },
  // ORANGE
  {
    name: 'orange',
    lighter: '#FFEDD5',
    light: '#FDBA74',
    main: '#F97316',
    dark: '#C2410C',
    darker: '#7C2D12',
    contrastText: palette.light.grey[0],
  },
  // AMBER
  {
    name: 'amber',
    lighter: '#FEF3C7',
    light: '#FCD34D',
    main: '#F59E0B',
    dark: '#B45309',
    darker: '#B45309',
    contrastText: palette.light.grey[0],
  },
  // YELLOW
  {
    name: 'yellow',
    lighter: '#FEF9C3',
    light: '#FDE047',
    main: '#EAB308',
    dark: '#A16207',
    darker: '#713F12',
    contrastText: palette.light.grey[0],
  },
  // LIME
  {
    name: 'lime',
    lighter: '#ECFCCB',
    light: '#BEF264',
    main: '#84CC16',
    dark: '#4D7C0F',
    darker: '#365314',
    contrastText: palette.light.grey[0],
  },
  // GREEN
  {
    name: 'green',
    lighter: '#DCFCE7',
    light: '#86EFAC',
    main: '#22C55E',
    dark: '#15803D',
    darker: '#14532D',
    contrastText: palette.light.grey[0],
  },
  // EMERALD
  {
    name: 'emerald',
    lighter: '#D1FAE5',
    light: '#6EE7B7',
    main: '#10B981',
    dark: '#047857',
    darker: '#064E3B',
    contrastText: palette.light.grey[800],
  },
  // TEAL
  {
    name: 'teal',
    lighter: '#CCFBF1',
    light: '#5EEAD4',
    main: '#14B8A6',
    dark: '#0F766E',
    darker: '#134E4A',
    contrastText: palette.light.grey[800],
  },
  // CYAN
  {
    name: 'cyan',
    lighter: '#CFFAFE',
    light: '#67E8F9',
    main: '#06B6D4',
    dark: '#0E7490',
    darker: '#164E63',
    contrastText: palette.light.grey[800],
  },
  // LIGHT_BLUE
  {
    name: 'light_blue',
    lighter: '#E0F2FE',
    light: '#7DD3FC',
    main: '#0EA5E9',
    dark: '#0369A1',
    darker: '#0C4A6E',
    contrastText: palette.light.grey[800],
  },
  // BLUE
  {
    name: 'blue',
    lighter: '#DBEAFE',
    light: '#93C5FD',
    main: '#3B82F6',
    dark: '#1D4ED8',
    darker: '#1E3A8A',
    contrastText: palette.light.grey[0],
  },
  // INDIGO
  {
    name: 'indigo',
    lighter: '#E0E7FF',
    light: '#A5B4FC',
    main: '#6366F1',
    dark: '#4338CA',
    darker: '#312E81',
    contrastText: palette.light.grey[0],
  },
  // VIOLET
  {
    name: 'violet',
    lighter: '#E0E7FF',
    light: '#C4B5FD',
    main: '#8B5CF6',
    dark: '#6D28D9',
    darker: '#4C1D95',
    contrastText: palette.light.grey[0],
  },
  // PURPLE
  {
    name: 'purple',
    lighter: '#F3E8FF',
    light: '#D8B4FE',
    main: '#A855F7',
    dark: '#7E22CE',
    darker: '#581C87',
    contrastText: palette.light.grey[0],
  },
  // FUCHSIA
  {
    name: 'fuchsia',
    lighter: '#FAE8FF',
    light: '#F0ABFC',
    main: '#D946EF',
    dark: '#A21CAF',
    darker: '#701A75',
    contrastText: palette.light.grey[0],
  },
  // PINK
  {
    name: 'pink',
    lighter: '#FCE7F3',
    light: '#F9A8D4',
    main: '#EC4899',
    dark: '#BE185D',
    darker: '#831843',
    contrastText: palette.light.grey[0],
  },
  // ROSE
  {
    name: 'rose',
    lighter: '#FFE4E6',
    light: '#FDA4AF',
    main: '#F43F5E',
    dark: '#BE123C',
    darker: '#881337',
    contrastText: palette.light.grey[0],
  },
  // WARM_GRAY
  {
    name: 'warm_gray',
    lighter: '#F5F5F4',
    light: '#D6D3D1',
    main: '#78716C',
    dark: '#44403C',
    darker: '#1C1917',
    contrastText: palette.light.grey[0],
  },
  // GRAY
  {
    name: 'gray',
    lighter: '#F4F4F5',
    light: '#D4D4D8',
    main: '#71717A',
    dark: '#3F3F46',
    darker: '#18181B',
    contrastText: palette.light.grey[0],
  },
  // BLUE_GRAY
  {
    name: 'blue_gray',
    lighter: '#F1F5F9',
    light: '#CBD5E1',
    main: '#64748B',
    dark: '#334155',
    darker: '#0F172A',
    contrastText: palette.light.grey[0],
  },
];

export default function getColorPresets(presetsKey: string) {
  return colorPresets.filter((color) => color.name === presetsKey)[0] || colorPresets[0];
}
