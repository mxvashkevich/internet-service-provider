import { Footer, Header } from '@src/components/organisms/index.js';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
