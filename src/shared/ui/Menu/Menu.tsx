import React from 'react'
import { Menu as MenuWrap } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

export const MenuButton = MenuWrap.Button
export const MenuItem = MenuWrap.Item

export function Menu({ children, className }: IMenuProps) {
  return (
    <MenuWrap as="div" className={twMerge('relative', className)}>
      {children}
    </MenuWrap>
  )
}

interface IMenuProps extends React.PropsWithChildren {
  className?: string
}
