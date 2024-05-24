import { FaCoins } from 'react-icons/fa6';

export default function LogoLink() {
  return (
    <a
      href="#"
      className="text-copy-primary mb-6 flex items-center text-2xl font-semibold"
    >
      <FaCoins className="mr-2" />
      My Funds
    </a>
  );
}
