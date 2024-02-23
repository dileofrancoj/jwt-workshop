/* eslint-disable import/no-extraneous-dependencies */
(() => {
  if (process.env.NODE_ENV === 'dev') {
    // eslint-disable-next-line global-require
    require('dotenv').config({ path: '.env.dev' });
  }
})();
