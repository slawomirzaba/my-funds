import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Form({ children }: Props) {
  return <form className="space-y-4 md:space-y-6">{children}</form>;
}
