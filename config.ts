import { ConfigChecker } from 'configchecker';
import packageJson from './package.json';

export const LANDING_PAGE_VERSION = packageJson.version;

const config = ConfigChecker.from(process.env);

export const VERCEL_GIT_COMMIT_MESSAGE = config.get('VERCEL_GIT_COMMIT_MESSAGE').value;
export const VERCEL_GIT_COMMIT_SHA = config.get('VERCEL_GIT_COMMIT_SHA').value;
