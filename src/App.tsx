import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useBeforeunload } from 'react-beforeunload';

import {
  AboutPage,
  AuthPage,
  BusinessPage,
  HomePage,
  Layout,
} from '@src/components/pages/index.ts';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: '/business',
    element: (
      <Layout>
        <BusinessPage />
      </Layout>
    ),
  },
  {
    path: '/auth',
    element: (
      <Layout>
        <AuthPage />
      </Layout>
    ),
  },
]);

export default function App() {
  useBeforeunload((e) => e.preventDefault());
  return <RouterProvider router={router} />;
}
