import PropTypes, { InferProps } from 'prop-types';
import { LazyMotion,domMax } from 'framer-motion';

const MotionLazyContainerPropTypes = {
  children: PropTypes.node,
};

type MotionLazyContainerTypes = InferProps<typeof MotionLazyContainerPropTypes>;

function MotionLazyContainer({ children }: MotionLazyContainerTypes) {
  return (
    <LazyMotion strict features={domMax}>
      {children}
    </LazyMotion>
  );
}

MotionLazyContainer.propTypes = MotionLazyContainerPropTypes;

export default MotionLazyContainer;
