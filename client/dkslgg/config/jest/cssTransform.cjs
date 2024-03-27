"use strict";

// http://facebook.github.io/jest/docs/en/webpack.html
module.exports = {
  process() {
    return "module.exports = {};";
  },
  getCacheKey() {
    return "cssTransform";
  },
};