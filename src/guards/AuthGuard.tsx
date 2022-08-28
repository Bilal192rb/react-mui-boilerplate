import PropTypes, { InferProps } from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { PATH_AUTH } from '../routes/paths';
import LoadingScreen from '../components/LoadingScreen';

const AuthGuardPropTypes = {
  children: PropTypes.node.isRequired,
};

type AuthGuardTypes = InferProps<typeof AuthGuardPropTypes>;

function AuthGuard({ children }: AuthGuardTypes) {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to={PATH_AUTH.root} />;
  }

  return <>{children}</>;
}

AuthGuard.propTypes = AuthGuardPropTypes;

export default AuthGuard;
