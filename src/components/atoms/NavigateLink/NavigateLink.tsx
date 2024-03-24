import { Link, Location, useLocation } from 'react-router-dom';

import { routesMapper } from '@src/components/constants';

import styles from './NavigateLink.module.scss';

type INavigateLinkProps = {
  linkTo: string;
  label: string;
  className?: string;
};

export default function NavigateLink({ linkTo, label, className }: INavigateLinkProps) {
  const location: Location<'/' | '/business' | '/about'> = useLocation();
  const isActive = routesMapper[location.pathname] === label;

  return (
    <Link
      className={`${className} ${isActive ? styles.activeLink : styles.inactiveLink}`}
      to={linkTo}
    >
      {label}
    </Link>
  );
}
