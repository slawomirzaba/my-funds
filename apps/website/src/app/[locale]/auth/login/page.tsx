import LogoLink from '@/components/LogoLink';
import Card from '@/components/Card';
import Heading from '@/components/Heading';
import Form from '@/components/form/Form';
import FormControl from '@/components/form/FormControl';
import InputLabel from '@/components/form/InputLabel';
import InputField from '@/components/form/InputField';
import Link from '@/components/Link';
import Button from '@/components/Button';
import Paragraph from '@/components/Paragraph';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('Login');

  return (
    <>
      <LogoLink />
      <Card>
        <Heading>{t('header')}</Heading>
        <Form>
          <FormControl>
            <InputLabel htmlFor="email">{t('emailLabel')}</InputLabel>
            <InputField
              type="email"
              id="email"
              placeholder="name@company.com"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">{t('passwordLabel')}</InputLabel>
            <InputField
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </FormControl>
          <Button type="submit">{t('loginButton')}</Button>
          <Paragraph variant={'secondary'} size={'sm'}>
            {t('registerLinkPrefix')} <Link href="#">{t('registerLink')}</Link>
          </Paragraph>
        </Form>
      </Card>
    </>
  );
}
