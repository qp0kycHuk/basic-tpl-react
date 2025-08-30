import React from "react"
import { Menu, Transition } from "@headlessui/react"
import { twMerge } from "tailwind-merge"

const placementClassName = {
  top: "left-1/2 -translate-x-1/2 bottom-full mb-2 origin-bottom",
  "top-start": "left-0 bottom-full mb-2 origin-bottom-left",
  "top-end": "right-0 bottom-full mb-2 origin-bottom-right",
  bottom: "left-1/2 -translate-x-1/2 top-full mt-2 origin-top",
  "bottom-start": "left-0 top-full mt-2 origin-top-left",
  "bottom-end": "right-0 top-full mt-2 origin-top-right",
  right: "top-1/2 -translate-y-1/2 left-full ml-2 origin-left",
  "right-start": "top-0 left-full ml-2 origin-top-left",
  "right-end": "bottom-0 left-full ml-2 origin-bottom-left",
  left: "top-1/2 -translate-y-1/2 right-full mr-2 origin-right",
  "left-start": "top-0 right-full mr-2 origin-top-right",
  "left-end": "bottom-0 right-full mr-2 origin-bottom-right",
}

export function MenuItems({
  children,
  className,
  placement = "bottom-start",
}: IMenuItemsProps) {
  return (
    <Transition
      as={React.Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className={twMerge(
          "z-1 absolute w-56 bg-white rounded-md shadow-lg",
          placementClassName[placement],
          className
        )}
      >
        {children}
      </Menu.Items>
    </Transition>
  )
}

interface IMenuItemsProps extends React.PropsWithChildren {
  className?: string
  placement?: Placement
}

type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end"
