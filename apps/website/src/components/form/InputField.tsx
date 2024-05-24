type Props = {
  type: 'password' | 'confirm-password' | 'email' | 'text';
  id: string;
  placeholder: string;
  required?: boolean;
};

export default function InputField({ type, id, placeholder, required }: Props) {
  return (
    <input
      type={type}
      name={id}
      id={id}
      className="bg-input-bg border-input-border text-copy-primary focus:border-input-border-focus placeholder:input-placeholder block w-full rounded-lg border p-2.5 sm:text-sm"
      placeholder={placeholder}
      required={required}
    />
  );
}
