import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavigateLink({ linkTo, label, ...otherProps }) {
  return (
    <Link
      {...otherProps}
      to={linkTo}
      style={{ color: '#5f6367', textDecoration: 'none', fontSize: '20px'}}
      >
      {label}
    </Link>
    );
}

NavigateLink.propTypes = {
  linkTo: PropTypes.string,
  label: PropTypes.string,
}