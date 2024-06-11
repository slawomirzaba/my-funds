import LogoLink from '@/components/LogoLink';
import Link from '@/components/ui/Link';
import Paragraph from '@/components/ui/Paragraph';
import { useTranslations } from 'next-intl';
import { REGISTER_ROUTE } from '@/routes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LoginForm from '@/app/[locale]/auth/login/_components/LoginForm';

export default function LoginPage() {
  const t = useTranslations('Login');

  return (
    <>
      <LogoLink />
      <Card>
        <CardHeader>
          <CardTitle>{t('header')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <LoginForm />
            <Paragraph size={'sm'}>
              {t('registerLinkPrefix')}{' '}
              <Link href={REGISTER_ROUTE} muted>
                {t('registerLink')}
              </Link>
            </Paragraph>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
