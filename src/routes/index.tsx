import { Suspense, lazy, ComponentType } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import DashboardLayout from '../layouts/DashboardLayout';
import UserLayout from '../layouts/UserLayout';
import AuthLayout from '../layouts/AuthLayout';
import HomeLayout from '../layouts/HomeLayout';
import CommonLayout from '../layouts/CommonLayout';
import { ANY } from '../types';

const Loadable = (Component: ComponentType<ANY>) => (props: ANY) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const AppOverview = Loadable(lazy(() => import('../pages/dashboard/AppOverview')));
const Analytics = Loadable(lazy(() => import('../pages/dashboard/Analytics')));
const Account = Loadable(lazy(() => import('../pages/user/Account')));
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));
const Home = Loadable(lazy(() => import('../pages/Home')));
const AboutUs = Loadable(lazy(() => import('../pages/AboutUs')));
const ContactUs = Loadable(lazy(() => import('../pages/ContactUs')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const PrivacyPolicy = Loadable(lazy(() => import('../pages/PrivacyPolicy')));
const TermsAndConditions = Loadable(lazy(() => import('../pages/TermsAndConditions')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const UnderMaintenance = Loadable(lazy(() => import('../pages/UnderMaintenance')));
const Error = Loadable(lazy(() => import('../pages/Error')));

export default function Router() {
  return useRoutes([
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <AppOverview /> },
        { path: 'analytics', element: <Analytics /> },
        { path: '', element: <Navigate to='/dashboard/app' replace /> },
        { path: '*', element: <Error code={404} /> },
      ],
    },
    {
      path: 'user',
      element: <UserLayout />,
      children: [
        { path: 'account', element: <Account /> },
        { path: '', element: <Navigate to='/user/account' replace /> },
        { path: '*', element: <Error code={404} /> },
      ],
    },
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify-code', element: <VerifyCode /> },
        { path: '', element: <Navigate to='/auth/login' replace /> },
        { path: '*', element: <Error code={404} /> },
      ],
    },
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'contact-us', element: <ContactUs /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'terms-and-conditions', element: <TermsAndConditions /> },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
      ],
    },
    {
      path: '/',
      element: <CommonLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'under-maintenance', element: <UnderMaintenance /> },
        { path: '404', element: <Error code={404} /> },
      ],
    },
    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
}
