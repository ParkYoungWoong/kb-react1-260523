import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  immer(
    combine(
      {
        count: 0,
        user: {
          name: 'HEROPY',
          age: 85,
          address: {
            city: 'Seoul',
            emails: ['thesecon@gmail.com', 'test@gmail.com']
          }
        }
      },
      set => ({
        setUserFirstEmail(newEmail: string) {
          set(state => {
            state.user.address.emails[0] = newEmail
          })
          // set(({ user }) => ({
          //   user: {
          //     ...user,
          //     address: {
          //       ...user.address,
          //       address: [newEmail, user.address.emails[1]]
          //     }
          //   }
          // }))
        }
      })
    )
  )
)
