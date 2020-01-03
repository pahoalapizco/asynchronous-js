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

const getInfo = async (url_api) => {
  try {
    const data = await fetchData(url_api)    
    const character = await fetchData(`${url_api}${data.results[0].id}`)    
    const origin = await fetchData(character.origin.url)  
    
    console.log(`Total characters: ${data.info.count}`)
    console.log(`Character: ${character.name}`)
    console.log(`Dimension: ${origin.dimension}`)

  } catch (error) {
    console.error(error)
  }
}

console.log('Before')
getInfo(API)
console.log('After')