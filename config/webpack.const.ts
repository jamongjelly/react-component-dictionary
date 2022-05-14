import path from 'path';

export const ROOT_DIR = path.join(__dirname, '..');
export const SOURCE_DIR = 'src';
export const PUBLIC_DIR = 'public';
export const OUTPUT_DIR = 'dist';

export const DEV_ENV = 'development';
export const PROD_ENV = 'production';
export const isDevMode = process.env.NODE_ENV !== PROD_ENV;

export const PORT = 3000;
