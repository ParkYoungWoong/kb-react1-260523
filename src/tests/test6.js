import { delay } from '@/utils'

const res = await Promise.allSettled([
  delay(3000),
  delay(2000),
  delay(5000),
  delay(7000)
])

console.log(123)
