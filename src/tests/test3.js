const user = {
  name: 'John',
  age: 30,
  city: 'New York',
  email: 'john@example.com'
}

const { name, ...abc } = user
console.log(name) // 'John'
console.log(abc) // { age: 30, city: 'New York', email: 'john@example.com' }

const newUser = {
  name: 'HEROPY',
  // ...abc,
  age: 30,
  city: 'New York',
  email: 'john@example.com'
}
