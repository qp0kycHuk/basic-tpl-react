import {
  Dialog,
  Fancybox,
  FancyboxItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Tooltip,
  toast,
} from "@libs"
import { PirateIcon } from "@icons/fill"
import { useToggle } from "@hooks"

const images = [
  "img/test-1.jpg",
  "img/test-2.jpg",
  "img/test-3.jpg",
  "img/test-4.jpg",
  "img/test-5.jpg",
  "img/test-6.jpg",
  "img/test-7.jpg",
  "img/test-8.jpg",
]

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
        <Fancybox className="grid grid-cols-4 gap-5 mt-10">
          {images.map((src, index) => (
            <FancyboxItem
              className="ratio ratio-1/1 relative"
              key={index}
              href={src}
              group
            >
              <img
                className="absolute size-full inset-0 object-cover"
                src={src}
              />
            </FancyboxItem>
          ))}
        </Fancybox>
      </Dialog>
    </section>
  )
}

export default App
