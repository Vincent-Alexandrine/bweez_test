const commonConfig = require('./config/common.js');
const devConfig = require('./config/dev.js');
const prodConfig = require('./config/prod.js');

module.exports = (env, argv) => {
  let envConfig;
  const { plugins: cmnPlugins, ...cmnCfg } = commonConfig;
  if (argv.mode === 'development')
    envConfig = devConfig;
  else if (argv.mode === 'production')
    envConfig = prodConfig;

  const { plugins: envPlugins, ...envCfg } = envConfig;
  const plugins = envPlugins
    ? [ ...cmnPlugins, ...envPlugins]
    : [ ...cmnPlugins];

  return {
    ...cmnCfg,
    ...envCfg,
    plugins,
  };
};
