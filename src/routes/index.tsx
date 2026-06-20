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
import { dynamic } from './dynamic'
import type { DynamicOptions } from './dynamic'

const dynamicOptions: DynamicOptions = {
  error: ({ error }) => {
    if (error instanceof Error) return <h1>에러 발생: {error.message}</h1>
    return <h1>에러 발생!</h1>
  },
  loading: <Loader size={200} />
}
const About = dynamic(() => import('./pages/About'), dynamicOptions)
const NotFound = dynamic(() => import('./pages/NotFound'), dynamicOptions)
const SignIn = dynamic(() => import('./pages/SignIn'), dynamicOptions)

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
          // <ErrorBoundary
          //   fallbackRender={({ error }) => {
          //     if (error instanceof Error)
          //       return <h1>에러 발생: {error.message}</h1>
          //     return <h1>에러 발생!</h1>
          //   }}>
          //   <Suspense fallback={<Loader size={200} />}>
          //     <About />
          //   </Suspense>
          // </ErrorBoundary>
          <About />
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
