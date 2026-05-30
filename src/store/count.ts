import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useCountStore = create(
  combine(
    {
      count: 0,
      double: 0
    },
    set => ({
      increase() {
        set(({ count }) => ({ count: count + 1 }))
      }
    })
  )
)
