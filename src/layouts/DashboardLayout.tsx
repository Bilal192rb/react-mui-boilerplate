import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

function DashboardLayout() {
  return (
    <Layout>
      <>
        <h1>DashboardLayout</h1>
        <Outlet />
      </>
    </Layout>
  );
}
export default DashboardLayout;
