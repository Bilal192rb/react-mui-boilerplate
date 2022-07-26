import { ANY } from '../../types';
import { InputSelectIcon } from './CustomIcons';

export default function Select(theme: ANY) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
}
