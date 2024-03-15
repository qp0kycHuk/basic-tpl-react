import { CrossIcon } from "@/assets/icons/contur"
import React from "react"
import { twMerge } from "tailwind-merge"
import {
  CloseButton as CloseButtonCore,
  ToastContainer as Container,
  ToastContainerProps,
} from "react-toastify"

import { toast as toastCore } from "react-toastify"

export const toast = toastCore

const contextClass = {
  success: "bg-green text-white",
  error: "bg-red text-white",
  info: "bg-blue text-white",
  warning: "bg-yellow text-white",
  default: "bg-l3 text-default",
  dark: "bg-black text-white",
}

const CloseButton = ({
  closeToast,
  type,
}: React.ComponentProps<typeof CloseButtonCore>) => {
  return (
    <button
      onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation()
        closeToast(event)
      }}
      className={twMerge(
        "btn btn-icon btn-sm",
        type === "default" ? "btn-red" : "btn-white"
      )}
    >
      <CrossIcon className={type !== "default" ? "text-white" : "text-red"} />
    </button>
  )
}

export function ToastContainer(
  props: ToastContainerProps & React.RefAttributes<HTMLDivElement>
) {
  return (
    <Container
      toastClassName={(context) => {
        console.log(context)

        return twMerge(
          contextClass[context?.type || "default"],
          " min-h-[62px] shadow-lg p-3 relative flex mb-3 rounded-md overflow-hidden cursor-pointer text-sm font-semibold"
        )
      }}
      bodyClassName={() => "flex items-center flex-grow"}
      closeButton={CloseButton}
      position="bottom-center"
      theme="colored"
      draggablePercent={25}
      hideProgressBar={true}
      limit={8}
      autoClose={3000}
      closeOnClick
      {...props}
    />
  )
}
