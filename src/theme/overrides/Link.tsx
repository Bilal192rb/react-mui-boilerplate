import { ANY } from '../../types';

export default function Link(theme: ANY) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  };
}
