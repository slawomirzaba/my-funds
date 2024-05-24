import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export enum SUPPORTED_LOCALE {
  EN = 'en',
}

export const SUPPORTED_LOCALES = Object.values(SUPPORTED_LOCALE);

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!SUPPORTED_LOCALES.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
