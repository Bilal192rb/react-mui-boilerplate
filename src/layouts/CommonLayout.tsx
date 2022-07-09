import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';

function CommonLayout() {
  return (
    <Layout>
      <>
        <h1>CommonLayout</h1>
        <Outlet />
      </>
    </Layout>
  );
}
export default CommonLayout;
