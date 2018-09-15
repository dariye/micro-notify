jest.unmock('bugsnag');
const bugsnag = require.requireActual('bugsnag');
const listen = require('test-listen');
const fetch = require('isomorphic-fetch');
const micro = require('micro');

const notify = require('../src');

test('throws error if no API key provided', () => {
  expect(() => notify()()).toThrow(
    'micro-bugsnag must be initialized with a Bugsnag API key.'
  );
});

test('throws error if no function provided', () => {
  const key = 'somekey';
  expect(() => notify(key)()).toThrow(
    'micro-bugsnag must be passed a function.'
  );
});

test('sends error to bugsnag', async () => {
  const service = async (req, res) => {
    throw new Error('Test error send');
  };

  const key = 'somekey';
  const server = micro(notify(key)(service));
  const url = await listen(server);

  bugsnag.notify = jest.fn();

  const response = await fetch(url);

  expect(bugsnag.notify).toBeCalled();

  await server.close();
});

test('works as expected if no errors', async () => {
  const service = async (req, res) => {
    return {message: 'no error'};
  };

  const key = 'somekey';
  const server = micro(notify(key)(service));
  const url = await listen(server);

  bugsnag.notify = jest.fn();

  const response = await fetch(url);
  const body = await response.json();

  expect(body.message).toBe('no error');

  await server.close();
});
