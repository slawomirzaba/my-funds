import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function FormControl({ children }: Props) {
  return <div>{children}</div>;
}
