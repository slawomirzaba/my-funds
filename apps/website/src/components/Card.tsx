import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="bg-card dark:border-card-border w-full rounded-lg shadow sm:max-w-md md:mt-0 xl:p-0 dark:border">
      <div className="space-y-4 p-6 sm:p-8 md:space-y-6">{children}</div>
    </div>
  );
}
