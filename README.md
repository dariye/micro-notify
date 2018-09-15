# micro-bugsnag

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

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

