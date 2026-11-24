
import { useEffect, useState } from 'react'
import { fetchCategories } from '../api/products'

export default function useCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadCategories = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await fetchCategories({
          signal: controller.signal,
        })

        setCategories(data)
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message || 'Failed to load categories')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadCategories()

    return () => controller.abort()
  }, [])

  return { categories, loading, error }
}
