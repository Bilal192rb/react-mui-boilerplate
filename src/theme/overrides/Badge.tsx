import { ANY } from '../../types';

export default function Badge(theme: ANY) {
  return {
    MuiBadge: {
      styleOverrides: {
        dot: {
          width: 10,
          height: 10,
          borderRadius: '50%',
        },
      },
    },
  };
}
