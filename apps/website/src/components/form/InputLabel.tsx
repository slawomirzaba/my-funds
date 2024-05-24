import React from 'react';

type Props = {
  htmlFor: string;
  children: React.ReactNode;
};

export default function InputLabel({ htmlFor, children }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-copy-primary mb-2 block text-sm font-medium"
    >
      {children}
    </label>
  );
}
