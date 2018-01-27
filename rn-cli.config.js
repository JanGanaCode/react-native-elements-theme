/* eslint-disable import/no-commonjs */

const path = require('path');
const glob = require('glob-to-regexp');
const blacklist = require('metro/src/blacklist');

module.exports = {
  getBlacklistRE() {
    return blacklist([
      glob(
        `${path.resolve(
          __dirname,
          '.'
        )}/node_modules/react-native-elements/node_modules/react-native/*`
      )
    ]);
  }
};
