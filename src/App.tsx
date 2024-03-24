import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material';
// import { useBeforeunload } from 'react-beforeunload';

import { AboutPage, BusinessPage, HomePage, Layout } from '@src/components/pages/index.ts';

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
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/about',
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/business',
    element: (
      <Layout>
        <BusinessPage />
      </Layout>
    ),
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/super-admin',
    element: (
      <Layout>
        <BusinessPage />
      </Layout>
    ),
    errorElement: <div>Something went wrong</div>,
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
