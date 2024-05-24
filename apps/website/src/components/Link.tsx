type Props = {
  href: string;
  children: string;
};

export default function Link({ href, children }: Props) {
  return (
    <a className="text-link font-medium hover:underline" href={href}>
      {children}
    </a>
  );
}
