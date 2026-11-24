
import { useEffect, useState } from 'react'

export default function useUrlState() {
  const [params, setParams] = useState(
    () => new URLSearchParams(window.location.search)
  )

  useEffect(() => {
    const handlePopState = () => {
      setParams(new URLSearchParams(window.location.search))
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const updateParams = (updates) => {
    const nextParams = new URLSearchParams(window.location.search)

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        nextParams.delete(key)
      } else {
        nextParams.set(key, String(value))
      }
    })

    const query = nextParams.toString()
    const newUrl = query
      ? `${window.location.pathname}?${query}`
      : window.location.pathname

    window.history.pushState({}, '', newUrl)
    setParams(nextParams)
  }

  return {
    params,
    setParams: updateParams,
  }
}
