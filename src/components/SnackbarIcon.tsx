import PropTypes, { InferProps } from 'prop-types';
import { alpha } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ANY } from '../types';
import Iconify from './Iconify';

const SnackbarIconPropTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error'])
    .isRequired,
};

type SnackbarIconTypes = InferProps<typeof SnackbarIconPropTypes>;

function SnackbarIcon({ icon, color }: SnackbarIconTypes) {
  return (
    <Box
      component='span'
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme: ANY) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      <Iconify icon={icon} other={{ width: 24, height: 24 }} />
    </Box>
  );
}

SnackbarIcon.propTypes = SnackbarIconPropTypes;

export default SnackbarIcon;
