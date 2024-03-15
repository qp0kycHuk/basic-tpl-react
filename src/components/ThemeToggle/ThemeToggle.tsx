import { twJoin } from "tailwind-merge"
import { useThemeContext } from "@/layout/ThemeContext"
import classes from "./ThemeToggle.module.scss"

interface IProps {
  className?: string
}

export function ThemeToggle({ className }: IProps) {
  const { theme, toggle } = useThemeContext()

  return (
    <label className={className}>
      <input
        type="checkbox"
        className={classes.checkbox}
        checked={theme === "light"}
        readOnly
        onChange={toggle}
      />
      <div className={classes.toggle}>
        <span className={classes.button}>
          <span className={twJoin(classes.crater, classes["crater-1"])}></span>
          <span className={twJoin(classes.crater, classes["crater-2"])}></span>
          <span className={twJoin(classes.crater, classes["crater-3"])}></span>
          <span className={twJoin(classes.crater, classes["crater-4"])}></span>
          <span className={twJoin(classes.crater, classes["crater-5"])}></span>
          <span className={twJoin(classes.crater, classes["crater-6"])}></span>
          <span className={twJoin(classes.crater, classes["crater-7"])}></span>
        </span>
        <span className={twJoin(classes.star, classes["star-1"])}></span>
        <span className={twJoin(classes.star, classes["star-2"])}></span>
        <span className={twJoin(classes.star, classes["star-3"])}></span>
        <span className={twJoin(classes.star, classes["star-4"])}></span>
        <span className={twJoin(classes.star, classes["star-5"])}></span>
        <span className={twJoin(classes.star, classes["star-6"])}></span>
        <span className={twJoin(classes.star, classes["star-7"])}></span>
        <span className={twJoin(classes.star, classes["star-8"])}></span>
      </div>
    </label>
  )
}
