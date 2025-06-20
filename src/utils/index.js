import { useState, useEffect } from "react"

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const media = window.matchMedia(query)
    const updateMatch = () => setMatches(media.matches)

    updateMatch()
    media.addEventListener("change", updateMatch)

    return () => {
      media.removeEventListener("change", updateMatch)
    }
  }, [query])

  return matches
}