import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config';

// @todo Deal with extra bundle size or remove config/make static before release.
export const twConfig = resolveConfig(tailwindConfig);

// export const baseURL = 'https://the-cms-staging.herokuapp.com';
export const baseURL = 'https://the-cms.herokuapp.com';
// export const baseURL = 'http://the-cms.lndo.site';

export const defaultHostName = 'https://essential.cu.edu';

export const cacheTTL = 60 * 60 * 24;
