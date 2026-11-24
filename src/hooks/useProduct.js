
import { useEffect, useState } from 'react'
import { fetchProduct } from '../api/products'

export default function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(Boolean(id))
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) {
      setProduct(null)
      setLoading(false)
      setError(null)
      return
    }

    const controller = new AbortController()

    const loadProduct = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await fetchProduct(id, {
          signal: controller.signal,
        })

        setProduct(data)
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message || 'Failed to load product')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadProduct()

    return () => controller.abort()
  }, [id])

  return { product, loading, error }
}
