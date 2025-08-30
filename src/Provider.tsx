import { ThemeContextProvider } from "@shared/ui/ThemeContext"
import { ToastContainer } from "@shared/ui"
import { createPortal } from "react-dom"

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <ThemeContextProvider>
      {children}
      {createPortal(<ToastContainer />, document.body)}
    </ThemeContextProvider>
  )
}
