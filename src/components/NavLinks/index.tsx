'use client';
import Link from 'next/link';
import { NAVIGATION } from '@/utils/constant';
import { usePathname } from 'next/navigation';

export interface Props {
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

const NavbarLinks = ({
  className = '',
  activeClassName = '',
  onClick = () => {},
}: Props) => {
  const pathname = usePathname();
  const isActive = (link: string) => {
    return pathname.startsWith(link);
  };

  return (
    <>
      {NAVIGATION.map((navigation) => (
        <Link
          className={`${className} ${isActive(navigation.to) && activeClassName}`}
          key={navigation.label}
          title={navigation.title}
          href={navigation.to}
          target={navigation.external ? `_blank` : undefined}
          rel={navigation.external ? `noopener noreferrer` : undefined}
          onClick={onClick}
        >
          {navigation.label}
        </Link>
      ))}
    </>
  );
};

export default NavbarLinks;
