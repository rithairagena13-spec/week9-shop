
import client from './client'

export const fetchProducts = async ({ limit = 12, skip = 0, signal } = {}) => {
  const response = await client.get('/products', {
    params: { limit, skip },
    signal,
  })
  return response.data
}

export const fetchProduct = async (id) => {
  const response = await client.get(`/products/${id}`)
  return response.data
}

export const fetchCategories = async () => {
  const response = await client.get('/products/categories')
  return response.data
}

export const fetchProductsByCategory = async (
  category,
  { limit = 12, skip = 0, signal } = {}
) => {
  const response = await client.get(
    `/products/category/${encodeURIComponent(category)}`,
    {
      params: { limit, skip },
      signal,
    }
  )
  return response.data
}

export const searchProducts = async (query, { limit = 12, skip = 0 } = {}) => {
  const response = await client.get('/products/search', {
    params: { q: query, limit, skip },
  })
  return response.data
}

export const createProduct = async (product) => {
  const response = await client.post('/products/add', product)
  return response.data
}

export const deleteProduct = async (id) => {
  const response = await client.delete(`/products/${id}`)
  return response.data
}
