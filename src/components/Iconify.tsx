import PropTypes, { InferProps } from 'prop-types';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { AnyObject } from '../types';

const IconifyPropTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

type IconifyTypes = InferProps<typeof IconifyPropTypes> | AnyObject;

function Iconify({ icon, sx, ...other }: IconifyTypes) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}

Iconify.propTypes = IconifyPropTypes;

export default Iconify;
