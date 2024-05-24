import React from 'react';

type Props = {
  type: 'submit';
  children: React.ReactNode;
};

export default function Button({ type, children }: Props) {
  return (
    <button
      type={type}
      className="bg-button-primary-bg hover:bg-button-primary-hover-bg focus:ring-primary-300 dark:focus:ring-primary-800 text-button-primary-copy w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4"
    >
      {children}
    </button>
  );
}
