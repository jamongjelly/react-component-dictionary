import webpack, { Configuration } from 'webpack';
import path from 'path';

const DEV_ENV = 'development';
const PROD_ENV = 'production';
const isDevMode = process.env.NODE_ENV !== PROD_ENV;

const OUTPUT_DIR = 'dist';

const config: Configuration = {
  name: 'react-component-dictionary',
  mode: isDevMode ? DEV_ENV : PROD_ENV,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  entry: './src/index',
  target: ['web', 'es5'],
  output: {
    path: path.join(__dirname, OUTPUT_DIR),
    filename: '[name].js',
  },
  devtool: isDevMode ? 'inline-source-map' : 'hidden-source-map',
  module: {
    rules: [],
  },
  plugins: [],
};

export default config;
