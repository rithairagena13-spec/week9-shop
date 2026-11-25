
import { useEffect, useState } from 'react'

export default function useDelayedFlag(value, delay = 300) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!value) {
      setShow(false)
      return
    }

    const timer = setTimeout(() => {
      setShow(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return show
}
