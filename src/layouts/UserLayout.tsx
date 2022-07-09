import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

function UserLayout() {
  return (
    <Layout>
      <>
        <h1>UserLayout</h1>
        <Outlet />
      </>
    </Layout>
  );
}
export default UserLayout;
