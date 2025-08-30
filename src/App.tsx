import {
  Dialog,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Tooltip,
  toast,
} from "@shared/ui"
import { PirateIcon } from "@icons/fill"
import { useToggle } from "@shared/hooks"



function App() {
  const message = "Yohohohohohohohoho!"
  const [isOpen, , openDialog, closeDialog] = useToggle()

  const showToast = () => {
    toast(message, {
      icon: <PirateIcon className="text-2xl text-red" />,
    })
  }

  return (
    <section className="py-20">
      <div className="flex gap-4 justify-center items-center">
        <Menu>
          <MenuButton className="btn btn-primary btn-fill rounded-lg gap-3">
            <PirateIcon className="text-2xl" />
            {message}
          </MenuButton>

          <MenuItems className="p-1 rounded-lg" placement="bottom">
            <MenuItem>
              <button
                className="btn btn-primary w-full rounded-lg justify-start btn-sm"
                onClick={openDialog}
              >
                Dialog
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="btn btn-primary w-full rounded-lg justify-start btn-sm"
                onClick={showToast}
              >
                Toast
              </button>
            </MenuItem>
            <MenuItem>
              <div>
                <Tooltip content={message} placement="bottom">
                  <button className="btn btn-primary w-full rounded-lg justify-start btn-sm">
                    Tooltip
                  </button>
                </Tooltip>
              </div>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      <Dialog isOpen={isOpen} onClose={closeDialog} className="max-w-2xl p-10">
        <PirateIcon className="text-6xl mx-auto text-red" />
        <div className="text-2xl mt-6 text-center">{message}</div>
   
      </Dialog>
    </section>
  )
}

export default App
