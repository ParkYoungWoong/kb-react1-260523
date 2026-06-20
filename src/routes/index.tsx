import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Default'
import Empty from './layouts/Empty'
import Home from './pages/Home'
// import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
// import NotFound from './pages/NotFound'
// import SignIn from './pages/SignIn'
import { requiresAuth, guestOnly } from './loaders'
import Loader from '@/components/Loader'

const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
const SignIn = lazy(() => import('./pages/SignIn'))

// https://heropy.dev/movies/1234 // ✅
// https://heropy.dev/#/movies/1234 // ❌
// http://localhost:5173/about

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        )
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
      }
    ]
  },
  {
    element: <Empty />,
    children: [
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
