import React from 'react';

type Props = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
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

export default function Paragraph({ children, variant, size = 'md' }: Props) {
  return (
    <p className={`${VARIANTS[variant]} ${SIZE_VARIANTS[size]}`}>{children}</p>
  );
}
