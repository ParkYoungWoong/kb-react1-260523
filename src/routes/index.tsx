import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Default'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import { requiresAuth, guestOnly } from './loaders'

// https://heropy.dev/movies/1234 // ✅
// https://heropy.dev/#/movies/1234 // ❌
// http://localhost:5173/about

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth,
        children: [
          {
            // http://localhost:5173/movies/tt1234568
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/signin',
        loader: guestOnly,
        element: <SignIn />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
