import { createContext, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie"

const ThemeContext = createContext<IThemeContextValue>({} as IThemeContextValue)

export const useThemeContext = () => useContext(ThemeContext)

export function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<ITheme>(
    (Cookies.get("theme") as ITheme) || "light"
  )

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark")
    Cookies.set("theme", theme, { expires: 365 })
  }, [theme])

  const dark = () => setTheme("dark")
  const light = () => setTheme("light")
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <ThemeContext.Provider
      value={{
        theme,
        dark,
        light,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

type ITheme = "dark" | "light"

interface IThemeContextValue {
  theme: ITheme
  dark(): void
  light(): void
  toggle(): void
}
