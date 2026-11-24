
import { useEffect, useState } from 'react'
import {
  fetchProducts,
  fetchProductsByCategory,
} from '../api/products'

export default function useProducts({ category = '', limit = 12, skip = 0 } = {}) {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = category
          ? await fetchProductsByCategory(category, {
              limit,
              skip,
              signal: controller.signal,
            })
          : await fetchProducts({
              limit,
              skip,
              signal: controller.signal,
            })

        setProducts(data.products)
        setTotal(data.total)
      } catch (err) {
        if (err.name !== 'CanceledError' && err.name !== 'AbortError') {
          setError(err.message || 'Failed to load products')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [category, limit, skip])

  return { products, setProducts, total, loading, error }
}
