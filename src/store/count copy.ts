import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useCountStore = create(
  // 상태의 타입 추론!
  combine(
    {
      count: 0
    },
    (set, get) => ({
      increase() {
        // const { count } = get()
        // set({
        //   count: count + 1
        // })
        set(({ count }) => {
          return {
            count: count + 1
          }
        })
      }
    })
  )
)
