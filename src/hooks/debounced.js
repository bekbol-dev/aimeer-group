import {useEffect, useState} from "react";

export const useDebounce = (value, ms = 200) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), ms)
    return () => clearTimeout(handler)
  }, [value, ms])

  return debounced
}