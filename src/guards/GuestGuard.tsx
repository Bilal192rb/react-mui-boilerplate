import PropTypes, { InferProps } from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { PATH_DASHBOARD } from '../routes/paths';

const GuestGuardPropTypes = {
  children: PropTypes.node.isRequired,
};

type GuestGuardTypes = InferProps<typeof GuestGuardPropTypes>;

function GuestGuard({ children }: GuestGuardTypes) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}

GuestGuard.propTypes = GuestGuardPropTypes;

export default GuestGuard;
