import Tippy, { TippyProps } from "@tippyjs/react"
import { animateFill } from "tippy.js"

export function Tooltip({ ...props }: TippyProps) {
  return (
    <Tippy {...props} theme="material" plugins={[animateFill]} animateFill />
  )
}
