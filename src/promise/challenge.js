'use strict'

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const { readyState, status, API } = require('../utils/globals')

const fetchData = url_api => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest()
    // Method, URL, async 
    xhttp.open('GET', url_api, true) 
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === readyState.FINISHED) {

        xhttp.status === status.OK
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error(`Error con ${url_api}`))
      }
    })
    xhttp.send()
  })
}


fetchData(API)
  .then(data => {
    console.log(data.info.count)
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
  })
  .then(data => {
    console.log(data.dimension)
  })
  .catch(error => console.log(error))