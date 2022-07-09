import PropTypes, { InferProps } from 'prop-types';

const LoadingScreenPropTypes = {
  isFullScreen: PropTypes.bool,
};

type LoadingScreenTypes = InferProps<typeof LoadingScreenPropTypes>;

const LoadingScreenDefaultProps: LoadingScreenTypes = {
  isFullScreen: true,
};

function LoadingScreen({ isFullScreen, ...other }: LoadingScreenTypes) {
  return (
    <>
      <div {...other}>
        <h2>LoadingScreen</h2>
      </div>
    </>
  );
}

LoadingScreen.propTypes = LoadingScreenPropTypes;

LoadingScreen.defaultProps = LoadingScreenDefaultProps;

export default LoadingScreen;
