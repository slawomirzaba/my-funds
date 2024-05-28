import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { SUPPORTED_LOCALES } from '@/i18n';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: SUPPORTED_LOCALES,
    localePrefix: 'always',
  });
