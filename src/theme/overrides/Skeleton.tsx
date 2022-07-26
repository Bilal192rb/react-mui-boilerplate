import { ANY } from '../../types';

export default function Skeleton(theme: ANY) {
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },

      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
