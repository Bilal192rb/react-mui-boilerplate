import { Any } from '../../types';

export default function Badge(theme: Any) {
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
