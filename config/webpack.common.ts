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
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=assets/images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 100,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 100,
              },
            },
          },
        ],
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
