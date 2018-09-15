const notify = require('../src');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv-safe').config();
}

const key = process.env.BUGSNAG_API_KEY;

module.exports = notify(key)(() => {
  throw new Error('Test micro-bugsnag');
});
