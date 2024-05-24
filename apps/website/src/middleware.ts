import createMiddleware from 'next-intl/middleware';
import { SUPPORTED_LOCALE, SUPPORTED_LOCALES } from '@/i18n';

export default createMiddleware({
  locales: SUPPORTED_LOCALES,
  defaultLocale: SUPPORTED_LOCALE.EN,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
