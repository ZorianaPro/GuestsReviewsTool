import { isProduction } from '../enviroment';

export default (() => {
  if (isProduction) {
    return require('./config.prod').default;
  } else {
    return require('./config.dev').default;
  }
})();
