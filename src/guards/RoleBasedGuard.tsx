import PropTypes, { InferProps } from 'prop-types';
import useAuth from '../hooks/useAuth';
import Error from '../pages/Error';

const RoleBasedGuardPropTypes = {
  children: PropTypes.node.isRequired,
  accessibleRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

type RoleBasedGuardTypes = InferProps<typeof RoleBasedGuardPropTypes>;

function RoleBasedGuard({ children, accessibleRoles }: RoleBasedGuardTypes) {
  const { user } = useAuth();

  if (!accessibleRoles.includes(user?.['role'])) {
    return <Error code={403} />;
  }

  return <>{children}</>;
}

RoleBasedGuard.propTypes = RoleBasedGuardPropTypes;

export default RoleBasedGuard;
