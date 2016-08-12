const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devtool: 'eval',
  // This will be our app's entry point (webpack will look for it in the 'src'
  // directory due to the modulesDirectory setting below). Feel free to change as desired.
  entry: [
    'index.tsx',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    // Look for modules in .ts(x) files first, then .js(x)
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    // Add 'src' to our modulesDirectories, as all our app
    // code will live in there, so Webpack should look in there for modules
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
