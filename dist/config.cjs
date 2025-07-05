'use strict';

const index = require('./shared/eslint-plugin-command-legacy.D74_hBXy.cjs');
require('./shared/eslint-plugin-command-legacy.CwiDAf4L.cjs');
require('@es-joy/jsdoccomment');

function config(options = {}) {
  const plugin = options.commands ? index.createPluginWithCommands(options) : index.defaultPlugin;
  const {
    name = "command-legacy"
  } = options;
  return {
    name,
    plugins: {
      [name]: plugin
    },
    rules: {
      [`${name}/command`]: "error"
    }
  };
}

module.exports = config;
