// File doesn't know anything about state

const getAllProducts = (callback) => {
  const options = {
    method: 'GET'
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export const addProduct = (newProduct, callback) => {
  const headers = new Headers ({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(newProduct)
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export const deleteProduct = (product, callback) => {
  const options = {
    method: 'DELETE'
  }

  fetch(`/api/products/${product._id}`, options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export const updateProduct = (product, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: 'PUT',
    body: JSON.stringify(product)
  }

  fetch(`/api/products/${product._id}`, options)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      return json
    })
    .then(json => callback(json.data))
}

export { getAllProducts }
