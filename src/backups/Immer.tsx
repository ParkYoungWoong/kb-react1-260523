import MovieSearch from '@/components/movies/MovieSearch'
import MovieList from '@/components/movies/MovieList'
import { useState } from 'react'
import { produce } from 'immer'

export default function App() {
  const [user, setUser] = useState({
    name: 'HEROPY',
    age: 85,
    address: {
      city: 'Seoul',
      emails: ['thesecon@gmail.com', 'test@gmail.com']
    }
  })

  function setUserFirstEmail(newEmail: string) {
    produce(user, draft => {
      draft.address.emails[0] = newEmail
    })
    // setUser({
    //   ...user,
    //   address: {
    //     ...user.address,
    //     emails: [newEmail, user.address.emails[1]]
    //   }
    // })
  }

  return (
    <>
      <MovieSearch />
      <MovieList />
    </>
  )
}
