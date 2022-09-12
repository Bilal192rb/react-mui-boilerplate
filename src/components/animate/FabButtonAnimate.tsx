import PropTypes, { InferProps } from 'prop-types';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Fab } from '@mui/material';
import { Any, AnyObject } from '../../types';

const FabButtonAnimatePropTypes = {
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
  sx: PropTypes.object,
  sxWrap: PropTypes.object,
};

type FabButtonAnimateTypes = InferProps<typeof FabButtonAnimatePropTypes> | AnyObject;

const FabButtonAnimate = forwardRef(
  (
    { color = 'primary', size = 'large', children, sx, sxWrap, ...other }: FabButtonAnimateTypes,
    ref: ForwardedRef<Any>
  ) => {
    const theme: AnyObject = useTheme();

    if (
      color === 'default' ||
      color === 'inherit' ||
      color === 'primary' ||
      color === 'secondary'
    ) {
      return (
        <AnimateWrap size={size} sxWrap={sxWrap}>
          <Fab ref={ref} size={size} color={color} sx={sx} {...other}>
            {children}
          </Fab>
        </AnimateWrap>
      );
    }

    return (
      <AnimateWrap size={size} sxWrap={sxWrap}>
        <Fab
          ref={ref}
          size={size}
          sx={{
            boxShadow: theme.customShadows[color],
            color: theme.palette[color].contrastText,
            bgcolor: theme.palette[color].main,
            '&:hover': {
              bgcolor: theme.palette[color].dark,
            },
            ...sx,
          }}
          {...other}
        >
          {children}
        </Fab>
      </AnimateWrap>
    );
  }
);

export default FabButtonAnimate;

const varSmall = {
  hover: { scale: 1.07 },
  tap: { scale: 0.97 },
};

const varMedium = {
  hover: { scale: 1.06 },
  tap: { scale: 0.98 },
};

const varLarge = {
  hover: { scale: 1.05 },
  tap: { scale: 0.99 },
};

const AnimateWrapPropTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  sxWrap: PropTypes.object,
};

type AnimateWrapTypes = InferProps<typeof AnimateWrapPropTypes>;

function AnimateWrap({ size, children, sxWrap }: AnimateWrapTypes) {
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
        ...sxWrap,
      }}
    >
      {children}
    </Box>
  );
}

AnimateWrap.propTypes = AnimateWrapPropTypes;
