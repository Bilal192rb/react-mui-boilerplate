import PropTypes, { InferProps } from 'prop-types';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { Any, AnyObject } from '../../types';

const IconButtonAnimatePropTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'inherit',
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

type IconButtonAnimateTypes = InferProps<typeof IconButtonAnimatePropTypes> | AnyObject;

const IconButtonAnimateDefaultProps: IconButtonAnimateTypes = {
  color: 'inherit',
  size: 'medium',
};

const IconButtonAnimate = forwardRef(
  ({ children, size, color, ...other }: IconButtonAnimateTypes, ref: ForwardedRef<Any>) => (
    <AnimateWrap size={size}>
      <IconButton size={size} ref={ref} color={color} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  )
);

IconButtonAnimate.propTypes = IconButtonAnimatePropTypes;

IconButtonAnimate.defaultProps = IconButtonAnimateDefaultProps;

export default IconButtonAnimate;

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

const AnimateWrapPropTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

type AnimateWrapTypes = InferProps<typeof AnimateWrapPropTypes>;

function AnimateWrap({ size, children }: AnimateWrapTypes) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={motion.div}
      whileTap='tap'
      whileHover='hover'
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
      }}
    >
      {children}
    </Box>
  );
}

AnimateWrap.propTypes = AnimateWrapPropTypes;
