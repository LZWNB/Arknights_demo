import { useState } from "react"
import { motion } from "framer-motion"
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
    <motion.div className="sidebar">
      <div className="bg">
        <Links></Links>
      </div>
      <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.div>
  )
}
