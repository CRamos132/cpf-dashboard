import { useRef } from 'react'

const useDebounce = (action: (...args: any[]) => unknown, wait = 1000) => {
  const timeoutRef = useRef<undefined | number>(undefined)

  const debouncedAction = (...args: unknown[]) => {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      if (args) {
        action(...args)
      } else {
        action()
      }
    }, wait)
  }

  return {
    debouncedAction,
    cancelDebouncedAction: () => {
      window.clearTimeout(timeoutRef.current)
    },
  }
}

export default useDebounce
