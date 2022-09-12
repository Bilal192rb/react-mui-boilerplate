import PropTypes, { InferProps } from 'prop-types';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { varContainer } from './variants';
import { AnyObject } from '../../types';

const MotionContainerPropTypes = {
  action: PropTypes.bool,
  animate: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

type MotionContainerTypes = InferProps<typeof MotionContainerPropTypes> | AnyObject;

function MotionContainer({ animate, action = false, children, ...other }: MotionContainerTypes) {
  if (action) {
    return (
      <Box
        component={motion.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={motion.div}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}

MotionContainer.propTypes = MotionContainerPropTypes;

export default MotionContainer;
