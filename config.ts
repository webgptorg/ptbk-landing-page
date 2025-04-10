import { ConfigChecker } from 'configchecker';
import packageJson from './package.json';

export const LANDING_PAGE_VERSION = packageJson.version;

const config = ConfigChecker.from({
    ...process.env,

    // Note: To expose env variables to the browser, using this seemingly strange syntax:
    //       @see https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF,
});

export const VERCEL_GIT_COMMIT_MESSAGE = config.get('VERCEL_GIT_COMMIT_MESSAGE').value;
export const VERCEL_GIT_COMMIT_SHA = config.get('VERCEL_GIT_COMMIT_SHA').value;

export const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
    ? process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'main'
        ? // Production:
          config.get('NEXT_PUBLIC_URL').url().required().value
        : // Preview branch:
          new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}/`)
    : // Local development:
      config.get('NEXT_PUBLIC_URL').url().required().value;
