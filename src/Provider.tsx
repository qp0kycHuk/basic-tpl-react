import { createPortal } from "react-dom"
import { ThemeContextProvider } from "./layout/ThemeContext"
import { ToastContainer } from "./libs/Toast"

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <ThemeContextProvider>
      {children}
      {createPortal(<ToastContainer />, document.body)}
    </ThemeContextProvider>
  )
}
