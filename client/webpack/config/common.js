const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const manifestPlugin = require('webpack-pwa-manifest');
const faviconPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const htmlPage = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, '../../src/index.html'),
  filename: 'index.html',
});

const manifest = new manifestPlugin({
  author: "Vincent Alexandrine",
  manifest_version: 1,
  short_name: "boilerplate",
  name: "React,styled-components boilerplate",
  icons: [{
    src: path.resolve(__dirname, "../../src/assets/svg/logo.svg"),
    sizes: [48,96]
  }],
  start_url: "/",
  display: "standalone",
  background: "#FEFEFA",
  theme: "#FEFEFA",
  theme_color: "#E9CDE9"
});

const favicon = new faviconPlugin(
  path.resolve(__dirname, "../../src/assets/favicon.png")
)

module.exports = {
  entry: path.resolve(__dirname, '../../src/index.js'),
  output: {
    publicPath: '/',
    // filename: 'app.js',
  },
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, '../../src/actions/'),
      Assets: path.resolve(__dirname, '../../src/assets/'),
      Atoms: path.resolve(__dirname, '../../src/components/atoms/'),
      Molecules: path.resolve(__dirname, '../../src/components/molecules/'),
      Organisms: path.resolve(__dirname, '../../src/components/organisms/'),
      Reducers: path.resolve(__dirname, '../../src/reducers/'),
      Screens: path.resolve(__dirname, '../../src/components/screens/'),
      Src: path.resolve(__dirname, '../../src/'),
      Styles: path.resolve(__dirname, '../../src/styles/'),
    }
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }, {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        exclude: /\.(js|jsx|css|html|scss|sass)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
    ]
  },
  plugins: [htmlPage, manifest, favicon, new Dotenv()],
};
