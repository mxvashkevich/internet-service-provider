import { Link } from 'react-router-dom';

type INavigateLinkProps = {
  linkTo: string;
  label: string;
  className?: string;
};

export default function NavigateLink({ linkTo, label, className }: INavigateLinkProps) {
  return (
    <Link
      className={className}
      to={linkTo}
      style={{ color: '#5f6367', textDecoration: 'none', fontSize: '20px' }}
    >
      {label}
    </Link>
  );
}
