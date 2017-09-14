// File doesn't know anything about state
const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body)
  }

  return fetch(`/api/${uri}`, options)
    .then(response => response.json())
    .then(json => json.data)
}

export const getAllProducts = () => ajaxRequest('products', 'GET')

export const addProduct = (newProduct) => ajaxRequest('products', 'POST', newProduct)

export const deleteProduct = (productId) => ajaxRequest(`products/${productId}`, 'DELETE')

export const updateProduct = (product) => ajaxRequest(`/api/products/${product._id}`, 'PUT', product)

export const signUpUser = (user) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(user)
  }

  return fetch('api/signup', options)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => {
      console.log(data)
      return data
    })
    .catch(err => console.log(err))
}

export const loginUser = (email, password) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify({email, password})
  }

  return fetch('api/login', options)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => {
      console.log(data)
      return data
    })
    .catch(err => console.log(err))
}
