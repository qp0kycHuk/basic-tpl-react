import { ThemeContextProvider } from "./layout/ThemeContext"
import { ToastContainer } from "./libs/Toast"

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <ThemeContextProvider>
      {children}
      <ToastContainer />
    </ThemeContextProvider>
  )
}
