# micro-bugsnag

[![Maintainability](https://api.codeclimate.com/v1/badges/919060a3fd4cabdfc3af/maintainability)](https://codeclimate.com/github/pauldariye/micro-bugsnag/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/919060a3fd4cabdfc3af/test_coverage)](https://codeclimate.com/github/pauldariye/micro-bugsnag/test_coverage)[![Build Status](https://travis-ci.org/pauldariye/micro-bugsnag.svg?branch=master)](https://travis-ci.org/pauldariye/micro-bugsnag)[![dependencies Status](https://david-dm.org/pauldariye/micro-bugsnag/status.svg)](https://david-dm.org/pauldariye/micro-bugsnag) [![devDependencies Status](https://david-dm.org/pauldariye/micro-bugsnag/dev-status.svg)](https://david-dm.org/pauldariye/micro-bugsnag?type=dev)![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

Send micro errors to the Bugsnag

## Usage

```bash
yarn install micro-bugsnag # or npm install micro-bugsnag
```

## Basic Example

```javascript

const Bugsnag = require('bugsnag')
const key = 'YOUR BUG SNAG API KEY'

module.exports = Notify(key)(async (req, res) => {
  throw Error('Test micro-bugsnag')
})

```


## Example with options

```javascript

const Bugsnag = require('bugsnag')
const key = 'YOUR BUG SNAG API KEY'

module.exports = Notify(key, { autoNotify: true })(async (req, res) => {
  throw Error('Test micro-bugsnag')
})

```

## Development
```
git clone git@github.com:pauldariye/micro-bugsnag.git
cd micro-bugsnag && yarn # or npm install
yarn test
```

## Acknowledgements
- [micro-sentry](https://github.com/tanmulabs/micro-sentry)
- [micro-boom](https://github.com/onbjerg/micro-boom)

## License
MIT

