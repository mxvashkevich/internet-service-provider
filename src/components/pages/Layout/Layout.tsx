import { Footer, Header } from '@src/components/organisms/index.js';
import { ReactElement } from 'react';

interface ILayoutProps {
  children: ReactElement;
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
