import { c as createPluginWithCommands, d as defaultPlugin } from './shared/eslint-plugin-command-legacy.DWVmpdvt.mjs';
import './shared/eslint-plugin-command-legacy.rddN-8UR.mjs';
import '@es-joy/jsdoccomment';

function config(options = {}) {
  const plugin = options.commands ? createPluginWithCommands(options) : defaultPlugin;
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

export { config as default };
