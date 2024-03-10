import { Footer, Header } from '@src/components/organisms/index.js';
import PropTypes from 'prop-types';

export default function Layout({ children }: { children: React.JSX.Element }) {
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
