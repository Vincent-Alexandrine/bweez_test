const path = require('path');
module.exports = {
  output: {
    publicPath: () => { // replace backlashes
      const buff = String.raw`${path.resolve(__dirname, '../../dist')}`;
      return buff.replace(/\\/g,"/") + '/';
    },
  },
  devtool: 'source-map', // NOTE: use it when server will be configured to not let access to source-map
  performance: {
    hints: 'error',
    maxEntrypointSize: 500000, // js file containing css with styled-components
    maxAssetSize: 500000, // js file containing css with styled-components
  }
};
