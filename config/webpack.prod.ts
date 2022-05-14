/* Node & Webpack Modules */
import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

/* Webpack Plugins */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

/* Project Modules */
import { PROD_ENV, OUTPUT_DIR, ROOT_DIR } from './webpack.const';
import common from './webpack.common';

const config: Configuration = merge(common, {
  mode: PROD_ENV,
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(ROOT_DIR, OUTPUT_DIR),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});

export default config;
