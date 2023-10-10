import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/react-query';
import FindShows from './core/components/find-shows/FindShows';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ShowDetails, {
  loader as showDetailsLoader,
} from './core/components/show-details/ShowDetails';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './core/theme/mui-theme/mui-theme';
import { useEffect } from 'react';
import { setThemeColor } from './core/theme/colors/colors';
import NotFound from './core/components/shared/NotFound';
import RootLayout from './core/components/layout/RootLayout.tsx';
import Error from './core/components/shared/Error';
import EpisodesBySeason, {
  loader as episodesBySeasonLoader,
} from './core/components/show-details/episodes-by-season/EpisodesBySeason';
import ScrollButton from './core/components/shared/ScrollButton';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="shows" />,
      },
      {
        path: 'shows',
        element: <FindShows />,
      },
      {
        path: 'shows/:id',
        element: <ShowDetails />,
        errorElement: (
          <Error message="Failed to fetch show details. Please try again later." showCTA={true} />
        ),
        loader: showDetailsLoader,
      },
      {
        path: 'shows/:id/episodes',
        element: <EpisodesBySeason />,
        loader: episodesBySeasonLoader,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    setThemeColor();
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <QueryClientProvider client={queryClient}>
        <>
          <CssBaseline />
          <RouterProvider router={router} />
          <ScrollButton />
        </>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
