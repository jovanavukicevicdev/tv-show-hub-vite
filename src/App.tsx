import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/react-query';
import FindShows from './core/components/find-shows/FindShows';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ShowDetails from './core/components/show-details/ShowDetails';
import CssBaseline from '@mui/material/CssBaseline';
import NotFound from './core/components/shared/NotFound';
import RootLayout from './core/components/layout/RootLayout.tsx';
import Error from './core/components/shared/Error';
import EpisodesBySeason from './core/components/show-details/episodes-by-season/EpisodesBySeason';
import ScrollButton from './core/components/shared/ScrollButton';
import { ColorModeContextProvider } from './core/theme/mui-theme/mui-context-provider.tsx';
import { useEffect } from 'react';
import { setThemeColor } from './core/theme/colors/colors.ts';
import { episodesBySeasonLoader } from './core/components/show-details/episodes-by-season/episodes-by-season-loader.ts';
import { showDetailsLoader } from './core/components/show-details/show-details-loader.ts';

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
    setThemeColor('dark');
  }, []);

  return (
    <ColorModeContextProvider>
      <QueryClientProvider client={queryClient}>
        <>
          <CssBaseline />
          <RouterProvider router={router} />
          <ScrollButton />
        </>
      </QueryClientProvider>
    </ColorModeContextProvider>
  );
}

export default App;
