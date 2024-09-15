import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Design Hub',
  locales: ['en', 'pt-BR','pt','es'],
  defaultLocale: 'pt-BR',
  localePrefix,
};
