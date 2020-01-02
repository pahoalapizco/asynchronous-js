'use strict'

const somthingWillHappend = value => {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve('Hey! :) one')
    } else {
      reject('Whooops! :(')
    }
  })
}

somthingWillHappend(false)
  .then(response => console.log(response))
  .catch(error => console.error(error))
  
const somthingWillHappendTwo = value => {
  return new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        resolve('Hey! :) two')
      }, 3000)
    } else { 
      const error = new Error('Whooops! :(')
      reject(error)
    }
  })
}

somthingWillHappendTwo(true)
  .then(response => console.log(response))
  .catch(err => console.error(err))

Promise.all([somthingWillHappend(true), somthingWillHappendTwo(true)])
  .then(responses => console.log('Array of results: ', responses))
  .catch(error => console.error(error))
