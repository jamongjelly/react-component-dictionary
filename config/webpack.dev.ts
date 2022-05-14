/* Node & Webpack Modules */
import { Configuration as WebpackConfig } from 'webpack';
import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

/* Project Modules */
import { DEV_ENV, PORT } from './webpack.const';
import common from './webpack.common';

interface Configuration extends WebpackConfig {
  devServer?: DevServerConfig;
}

const config: Configuration = merge(common, {
  mode: DEV_ENV,
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  devServer: {
    historyApiFallback: true,
    port: PORT,
    open: true,
    hot: true,
    compress: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['styled-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

export default config;
