import { useTranslations } from 'next-intl';
import LogoLink from '@/components/LogoLink';
import RegisterForm from '@/app/[locale]/auth/register/_components/RegisterForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from '@/components/ui/Link';
import { LOGIN_ROUTE } from '@/routes';
import Paragraph from '@/components/ui/Paragraph';

export default function RegisterPage() {
  const t = useTranslations('Register');

  return (
    <>
      <LogoLink />
      <Card>
        <CardHeader>
          <CardTitle>{t('header')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <RegisterForm />
            <Paragraph size={'sm'}>
              {t('loginLinkPrefix')}{' '}
              <Link href={LOGIN_ROUTE} muted>
                {t('loginLink')}
              </Link>
            </Paragraph>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
