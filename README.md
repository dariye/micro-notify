# micro-notify

[![Maintainability](https://api.codeclimate.com/v1/badges/919060a3fd4cabdfc3af/maintainability)](https://codeclimate.com/github/pauldariye/micro-notify/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/919060a3fd4cabdfc3af/test_coverage)](https://codeclimate.com/github/pauldariye/micro-notify/test_coverage)[![Build Status](https://travis-ci.org/pauldariye/micro-notify.svg?branch=master)](https://travis-ci.org/pauldariye/micro-notify)[![dependencies Status](https://david-dm.org/pauldariye/micro-notify/status.svg)](https://david-dm.org/pauldariye/micro-notify) [![devDependencies Status](https://david-dm.org/pauldariye/micro-notify/dev-status.svg)](https://david-dm.org/pauldariye/micro-notify?type=dev)![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

A simple [`.notify`](https://github.com/bugsnag/bugsnag-js) wrapper to send micro errors to Bugsnag.

## Usage

```bash
yarn add micro-notify # or npm install micro-notify
```

## Basic Example

```javascript

const notify = require('micro-notify')
const key = 'YOUR BUG SNAG API KEY'

module.exports = notify(key)(async (req, res) => {
  throw Error('Test micro-notify')
})

```


## Example with options

```javascript

const notify = require('micro-notify')
const key = 'YOUR BUG SNAG API KEY'

module.exports = notify(key, { autoNotify: true })(async (req, res) => {
  throw Error('Test micro-notify')
})

```

## Development
```
git clone git@github.com:pauldariye/micro-notify.git
cd micro-notify && yarn # or npm install
yarn test
```

## Acknowledgements
- [micro-sentry](https://github.com/tanmulabs/micro-sentry)
- [micro-boom](https://github.com/onbjerg/micro-boom)
- [npm-module-boilerplate](https://github.com/flexdinesh/npm-module-boilerplate)

## License
MIT

