'use strict'

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const { readyState, status, API } = require('../utils/globals')

function fetchData (url_api, callback) {
  const xhttp = new XMLHttpRequest()
  // Method, URL, async 
  xhttp.open('GET', url_api, true) 
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === readyState.FINISHED) {
      if (xhttp.status === status.OK) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error(`Error con ${url_api}`)
        return callback(error, null)
      }
    }
  }
  xhttp.send()
}

// This is an example to callback hell!
fetchData (API, function (errorCount, dataCount) {
  if (errorCount) return console.error(errorCount)
  fetchData (API + dataCount.results[0].id, function (errorName, dataName) {
    if (errorName) return console.error(errorName)
    fetchData (dataName.origin.url, function (errorDimension, dataDimension) {
      if (errorDimension) return console.error(errorDimension)
      console.log(dataCount.info.count);
      console.log(dataName.name);
      console.log(dataDimension.dimension);
    })
  })
})

