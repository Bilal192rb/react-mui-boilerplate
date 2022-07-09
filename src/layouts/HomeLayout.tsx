import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

function HomeLayout() {
  return (
    <Layout>
      <>
        <h1>HomeLayout</h1>
        <Outlet />
      </>
    </Layout>
  );
}
export default HomeLayout;
