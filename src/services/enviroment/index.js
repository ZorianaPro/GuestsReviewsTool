import { platform } from '@haensl/services';

const env = platform.hasWindow && 'process' in window
  ? window.process.env
  : process.env;

export const isProduction = env.NODE_ENV === 'production';
export const isDevelopment = !(isProduction);