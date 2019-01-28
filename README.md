## uxcore-countdown

React countdown developed base on `react-countdown`, you can see detail usage [here](https://github.com/ndresx/react-countdown)


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-countdown.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-countdown
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-countdown.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-countdown
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-countdown.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-countdown?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-countdown.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-countdown
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-countdown.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-countdown#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-countdown.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-countdown.svg
[sauce-url]: https://saucelabs.com/u/uxcore-countdown


### Development

```sh
git clone https://github.com/uxcore/uxcore-countdown
cd uxcore-countdown
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-countdown
cd uxcore-countdown
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/countdown

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| date          | `Date/string/number`| `true` | `required`    | Date or timestamp in the future                   |
| daysInHours   | `boolean`           | `false` | `false`       | Days are calculated as hours                      |
| prefixCls     | `string`            | `false` | `false`       | uxcore-countdown                                  |
| className     | `string`              | `false` | `false`       | The className of component                        |
| zeroPadDays   | `number`            | `false` | `zeroPadTime` | Length of zero-padded days output, e.g.: `01`     |
| children      | `any`               | `false` | `null`        | A React child for the countdown's completed state |
| renderer      | `function`          | `false` | `undefined`   | Custom renderer callback                          |
| now           | `function`          | `false` | `Date.now`    | Alternative handler for the current date          |
| onComplete    | `function`          | `false` | `undefined`   | Callback when countdown ends                      |

