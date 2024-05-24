import { useTranslations } from 'next-intl';
import InputField from '@/components/form/InputField';
import InputLabel from '@/components/form/InputLabel';
import FormControl from '@/components/form/FormControl';
import Form from '@/components/form/Form';
import LogoLink from '@/components/LogoLink';
import Checkbox from '@/components/form/Checkbox';
import Link from '@/components/Link';
import Button from '@/components/Button';
import Paragraph from '@/components/Paragraph';
import Heading from '@/components/Heading';
import Card from '@/components/Card';

export default function RegisterPage() {
  const t = useTranslations('Register');

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
          <FormControl>
            <InputLabel htmlFor="confirm-password">
              {t('passwordConfirmationLabel')}
            </InputLabel>
            <InputField
              type="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              required
            />
          </FormControl>
          <FormControl>
            <Checkbox
              id="terms"
              ariaDescribedby="terms"
              required
              label={
                <>
                  {t('acceptTermsPrefix')}{' '}
                  <Link href="#">{t('acceptTermsLink')}</Link>
                </>
              }
            />
          </FormControl>
          <Button type="submit">{t('registerButton')}</Button>
          <Paragraph variant={'secondary'} size={'sm'}>
            {t('loginLinkPrefix')} <Link href="#">{t('loginLink')}</Link>
          </Paragraph>
        </Form>
      </Card>
    </>
  );
}
