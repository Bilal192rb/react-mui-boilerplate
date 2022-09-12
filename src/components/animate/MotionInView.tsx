import PropTypes, { InferProps } from 'prop-types';
import { useEffect } from 'react';
import { m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';
import { AnyObject } from '../../types';

const MotionInViewContainerPropTypes = {
  children: PropTypes.node.isRequired,
  variants: PropTypes.object,
  transition: PropTypes.object,
  triggerOnce: PropTypes.bool,
  threshold: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

type MotionInViewContainerTypes = InferProps<typeof MotionInViewContainerPropTypes> | AnyObject;

function MotionInView({
  children,
  variants,
  transition,
  threshold,
  ...other
}: MotionInViewContainerTypes) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!variants) return;
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
  }, [controls, inView, variants]);

  return (
    <Box
      ref={ref}
      component={m.div}
      initial={variants ? Object.keys(variants)[0] : false}
      animate={controls}
      variants={variants}
      transition={transition}
      {...other}
    >
      {children}
    </Box>
  );
}

MotionInView.propTypes = MotionInViewContainerPropTypes;

export default MotionInView;
