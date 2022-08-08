import PropTypes, { InferProps } from 'prop-types';
import { styled } from '@mui/material/styles';
import ProgressBar from './ProgressBar';

const RootStyle = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

const LoadingScreenPropTypes = {
  isFullScreen: PropTypes.bool,
  other: PropTypes.any,
};

type LoadingScreenTypes = InferProps<typeof LoadingScreenPropTypes>;

const LoadingScreenDefaultProps: LoadingScreenTypes = {
  isFullScreen: true,
};

function LoadingScreen({ isFullScreen, other }: LoadingScreenTypes) {
  return (
    <>
      <ProgressBar />
      {isFullScreen && (
        <RootStyle {...other}>
          <h2>Loading...</h2>
        </RootStyle>
      )}
    </>
  );
}

LoadingScreen.propTypes = LoadingScreenPropTypes;

LoadingScreen.defaultProps = LoadingScreenDefaultProps;

export default LoadingScreen;
