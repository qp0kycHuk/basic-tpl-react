import { useCallback, useState } from "react"

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const on = useCallback(() => setValue(true), [])
  const off = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue((prev) => !prev), [])

  return [value, toggle, on, off] as const
}
