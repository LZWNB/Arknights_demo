import { useState } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"


export const Sidebar = () => {
  const [open,setOpen] = useState(false)


  const variants  = {
    open:
    losed:
  }

  return (
    <div className="sidebar">
      <div className="bg">
        <Links></Links>
      </div>
      <ToggleButton></ToggleButton>
    </div>
  )
}
