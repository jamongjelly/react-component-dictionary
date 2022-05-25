import path from 'path';
import dotenv from 'dotenv';

export const ROOT_DIR = path.join(__dirname, '..');
export const SOURCE_DIR = 'src';
export const PUBLIC_DIR = 'public';
export const OUTPUT_DIR = 'dist';

export const DEV_ENV = 'development';
export const PROD_ENV = 'production';
export const isDevMode = process.env.NODE_ENV !== PROD_ENV;

const env = dotenv.config({ path: path.join(ROOT_DIR, '.env') }).parsed;
export const ENV = Object.keys(env).reduce((obj, key) => {
  obj[key] = JSON.stringify(env[key]);
  return obj;
}, {});

export const PORT = process.env.PORT;
