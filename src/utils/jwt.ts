import jwtDecode from 'jwt-decode';
import { Any } from '../types';
import http from './http';

enum TOKEN {
  ACCESS = 'accessToken',
}

const isValidToken = (accessToken: string) => {
  if (!accessToken) return false;
  const decoded: Any = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  let expiredTimer;
  window.clearTimeout(expiredTimer);
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;
  expiredTimer = window.setTimeout(() => {
    console.log('expired');
  }, timeLeft);
};

const getSession = () => {
  return localStorage.getItem(TOKEN.ACCESS);
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem(TOKEN.ACCESS, accessToken);
    http.setAuthorization(accessToken);
    const { exp }: Any = jwtDecode(accessToken);
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem(TOKEN.ACCESS);
    http.setAuthorization(null);
  }
};

export { isValidToken, getSession, setSession };
