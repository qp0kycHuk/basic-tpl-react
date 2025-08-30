import { Transition, Dialog as DialogWrap } from "@headlessui/react"
import { twMerge } from "tailwind-merge"
import { Fragment } from "react"
import { CrossIcon } from "@icons/contur"

export interface IDialogProps extends React.PropsWithChildren {
  isOpen: boolean
  onClose: () => unknown
  className?: string
}

export function Dialog({ children, isOpen, className, onClose }: IDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <DialogWrap as="div" className="relative z-8" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 print:hidden" />
        </Transition.Child>

        <div className="fixed print:relative inset-0 overflow-y-auto print:overflow-auto">
          <div className="flex min-h-full p-4 print:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-5"
              enterTo="opacity-100 "
              leave="ease-in duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0 scale-95 translate-y-5"
            >
              <DialogWrap.Panel
                className={twMerge(
                  "w-full m-auto transition-all bg-l3 shadow-xl rounded-2xl print:bg-transparent relative",
                  className
                )}
              >
                <div className="fixed -z-1" tabIndex={0}></div>
                <button
                  className="btn btn-icon btn-sm absolute right-1 top-1 rounded-full btn-default"
                  onClick={onClose}
                >
                  <div className="absolute -inset-4"></div>
                  <CrossIcon />
                </button>
                {children}
              </DialogWrap.Panel>
            </Transition.Child>
          </div>
        </div>
      </DialogWrap>
    </Transition>
  )
}
