import { Link as NavigationLink } from '@/navigation';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: string;
  muted?: boolean;
};

export default function Link({ href, children, muted }: Props) {
  const classes = cn('font-medium hover:underline', {
    'text-muted-foreground': muted,
  });

  return (
    <NavigationLink className={classes} href={href}>
      {children}
    </NavigationLink>
  );
}
