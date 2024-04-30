import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material';
// import { useBeforeunload } from 'react-beforeunload';

import {
  AboutPage,
  AdminPage,
  BusinessPage,
  HomePage,
  Layout,
} from '@src/components/pages/index.ts';
import FallbackPage from './components/pages/FallbackPage/FallbackPage';

import './index.css';
import { useEffect } from 'react';
import { useAuthStore } from './store/authStore';

const theme = createTheme({
  typography: {
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <FallbackPage />,
  },
  {
    path: '/about',
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
    errorElement: <FallbackPage />,
  },
  {
    path: '/business',
    element: (
      <Layout>
        <BusinessPage />
      </Layout>
    ),
    errorElement: <FallbackPage />,
  },
  {
    path: '/super-admin',
    element: <AdminPage />,
    errorElement: <FallbackPage />,
  },
]);

export default function App() {
  // useBeforeunload((e) => e.preventDefault())
  const { isAuth, authMe } = useAuthStore((state) => state);

  useEffect(() => {
    authMe();
  }, [isAuth]);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
