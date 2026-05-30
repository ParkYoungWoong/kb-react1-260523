import { create } from 'zustand'
import { combine, subscribeWithSelector, persist } from 'zustand/middleware'

export const useCountStore = create(
  subscribeWithSelector(
    persist(
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
      ),
      {
        name: 'count store'
      }
    )
  )
)

// useCountStore.subscribe(선택자, 실행할함수)
useCountStore.subscribe(
  state => state.count,
  count => {
    // const { count } = useCountStore.getState()
    useCountStore.setState({
      double: count * 2
    })
  }
)
