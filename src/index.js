const {send} = require('micro');
const Boom = require('boom');
const bugsnag = require('bugsnag');

module.exports = exports = (key, opts = {}) => fn => {
  if (!key) {
    throw new Error(
      'micro-notify must be initialized with a Bugsnag API key.'
    );
  }

  if (!fn || typeof fn !== 'function') {
    throw new Error('micro-notify must be passed a function.');
  }

  bugsnag.register(key, opts);

  return async function (req, res) {
    try {
      return await fn(req, res);
    } catch (error) {
      console.error(error);
      bugsnag.notify(error);

      let status = res.statusCode || 500;

      if (error.isBoom) {
        status = error.output.statusCode;
      } else if (error.statusCode) {
        status = error.statusCode;
      }

      if (status < 400) {
        status = 500;
      }

      const err = error.isBoom ?
        Boom.boomify(error) :
        Boom.boomify(error, status);

      send(
        res,
        status,
        Object.assign({}, err.output.payload, err.data && {data: err.data})
      );
    }
  };
};
