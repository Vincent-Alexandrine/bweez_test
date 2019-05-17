module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  },
  performance: {
    hints: 'warning',
  },
  optimization: {
    usedExports: true,
  },
};
