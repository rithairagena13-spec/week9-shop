
import { useEffect, useRef, useState } from 'react'
import {
  fetchProducts,
  fetchProductsByCategory,
} from '../api/products'

export default function useProducts({ category = '', limit = 12, skip = 0 } = {}) {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState(null)

  const hasPreviousProducts = useRef(false)

  useEffect(() => {
    const controller = new AbortController()

    const loadProducts = async () => {
      const hasProducts = hasPreviousProducts.current

      setLoading(!hasProducts)
      setRefreshing(hasProducts)
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

        if (!controller.signal.aborted) {
          setProducts(data.products)
          setTotal(data.total)
          hasPreviousProducts.current = data.products.length > 0
        }
      } catch (err) {
        if (
          !controller.signal.aborted &&
          err.name !== 'CanceledError' &&
          err.name !== 'AbortError'
        ) {
          setError(err.message || 'Failed to load products')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
          setRefreshing(false)
        }
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [category, limit, skip])

  return {
    products,
    setProducts,
    total,
    loading,
    refreshing,
    error,
  }
}
