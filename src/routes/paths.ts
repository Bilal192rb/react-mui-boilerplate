function path(root: string, subLink: string): string {
  return `${root}${subLink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_USER = '/user';
const ROOTS_AUTH = '/auth';

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    appOverview: path(ROOTS_DASHBOARD, '/app'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
  },
};

export const PATH_USER = {
  root: ROOTS_USER,
  account: path(ROOTS_USER, '/account'),
};

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verifyCode: path(ROOTS_AUTH, '/verify-code'),
};

export const PATH_HOME = {
  root: '/',
  aboutUs: '/about-us',
  contactUs: '/contact-us',
  faqs: '/faqs',
  pricing: '/pricing',
  termsAndConditions: '/terms-and-conditions',
  privacyPolicy: '/privacy-policy',
  comingSoon: '/coming-soon',
  underMaintenance: '/under-maintenance',
  Error404: '/404',
};
