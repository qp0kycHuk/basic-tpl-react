import React, { useRef, useEffect } from "react"
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import { OptionsType } from "@fancyapps/ui/types/Fancybox/options"

export function Fancybox({ options, className, children }: Props) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const delegate = "[data-fancybox]"

    NativeFancybox.bind(container, delegate, options || {})

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  })

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  )
}

interface Props extends React.PropsWithChildren {
  options?: Partial<OptionsType>
  className?: string
}
