/* Node & Webpack Modules */
import path from 'path';
import { Configuration } from 'webpack';

/* Webpack Plugins */
import HtmlWebpackPlugin from 'html-webpack-plugin';

/* Project Modules */
import { SOURCE_DIR, PUBLIC_DIR, ROOT_DIR } from './webpack.const';

const config: Configuration = {
  name: 'react-component-dictionary',
  entry: path.join(ROOT_DIR, SOURCE_DIR, 'index'),
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT_DIR, PUBLIC_DIR, 'index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(ROOT_DIR, SOURCE_DIR),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
};

export default config;
