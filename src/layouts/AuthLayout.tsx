import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

function AuthLayout() {
  return (
    <Layout>
      <>
        <h1>AuthLayout</h1>
        <Outlet />
      </>
    </Layout>
  );
}
export default AuthLayout;
