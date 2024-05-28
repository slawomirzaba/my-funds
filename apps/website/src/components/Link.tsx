import { Link as NavigationLink } from '@/navigation';

type Props = {
  href: string;
  children: string;
};

export default function Link({ href, children }: Props) {
  return (
    <NavigationLink
      className="text-link font-medium hover:underline"
      href={href}
    >
      {children}
    </NavigationLink>
  );
}
