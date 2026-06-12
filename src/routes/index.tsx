import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Default from './layouts/Default'

// https://heropy.dev/movies/1234 // ✅
// https://heropy.dev/#/movies/1234 // ❌
// http://localhost:5173/about

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/movies/:id',
        element: <MovieDetails />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
