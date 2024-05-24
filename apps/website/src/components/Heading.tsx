import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Heading({ children }: Props) {
  return (
    <h1 className="text-copy-primary text-xl font-bold leading-tight tracking-tight md:text-2xl">
      {children}
    </h1>
  );
}
