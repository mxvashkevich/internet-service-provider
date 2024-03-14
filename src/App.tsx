import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
// import { useBeforeunload } from 'react-beforeunload';

import {
  AboutPage,
  AuthPage,
  BusinessPage,
  HomePage,
  Layout,
} from '@src/components/pages/index.ts';

import './index.css';

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
  // useBeforeunload((e) => e.preventDefault());
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
