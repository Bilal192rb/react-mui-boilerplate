import { Any } from '../../types';

export default function Link(theme: Any) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  };
}
