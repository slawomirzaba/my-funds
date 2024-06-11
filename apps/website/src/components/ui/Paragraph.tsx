import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  muted?: boolean;
  size?: 'sm' | 'md';
};

const VARIANTS = {
  primary: 'text-copy-primary',
  secondary: 'text-copy-secondary',
};

const SIZE_VARIANTS = {
  sm: 'text-sm font-light',
  md: '',
};

export default function Paragraph({ children, muted, size = 'md' }: Props) {
  const classes = cn({
    'text-muted-foreground': muted,
    'text-sm font-medium leading-none': size === 'sm',
    'leading-7': size === 'md',
  });

  return <p className={classes}>{children}</p>;
}
