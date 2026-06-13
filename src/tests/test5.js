// class Person {}
// const person = new Person()

// const promise = new Promise()
// await promise

function abc() {
  return new Promise(resolve => {
    resolve(123)
  })
}
await abc()
// const res1 = abc()
// console.log(res1) // Promise<123>

// async function xyz() {
//   return 123
// }
// const res2 = xyz()
// console.log(res2) // Promise<123>
