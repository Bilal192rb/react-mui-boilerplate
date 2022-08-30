import { Any } from '../../types';
import { InputSelectIcon } from './CustomIcons';

export default function Select(theme: Any) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
}
