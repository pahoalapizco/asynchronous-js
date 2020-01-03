'use strict'

const doSomethingAsync = (value) => {
  return new Promise ((resolve, reject) => {
    (value)
      ? setTimeout(() => { resolve('Doing something') }, 3000)
      : reject(new Error('whooops! :c'))
  })
}

const doSomething = async (value) => {
  const something = await doSomethingAsync(value)
  console.log(something)
}

console.log('Before')
doSomething(true)
console.log('After')

const anotherFuntion = async (value) => {
  try {
    const something = await doSomethingAsync(value)
    console.log(something)
  } catch (error) {
    console.error(error)
  }
}

console.log('Before 2')
anotherFuntion(false)
console.log('After 3')