import PropTypes, { InferProps } from 'prop-types';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { ANY } from '../types';

const IconifyPropTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  other: PropTypes.any,
};

type IconifyTypes = InferProps<typeof IconifyPropTypes>;

function Iconify({ icon, sx, other }: IconifyTypes) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}

Iconify.propTypes = IconifyPropTypes;

export default Iconify;
