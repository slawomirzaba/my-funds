import React from 'react';

type Props = {
  id: string;
  ariaDescribedby: string;
  required: boolean;
  label: React.ReactNode;
};

export default function Checkbox({
  id,
  ariaDescribedby,
  required,
  label,
}: Props) {
  return (
    <div className="flex items-start">
      <div className="flex h-5 items-center">
        <input
          id={id}
          aria-describedby={ariaDescribedby}
          type="checkbox"
          className="focus:ring-3 focus:ring-checkbox-border-focus border-checkbox-border bg-checkbox-bg h-4 w-4 rounded border"
          required={required}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="terms" className="text-copy-secondary font-light">
          {label}
        </label>
      </div>
    </div>
  );
}
