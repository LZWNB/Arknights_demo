import { motion } from "framer-motion"

export const ToggleButton = ({setOpen}) => {
  return (

    <button onClick={() => setOpen(prev=>!prev)}>
        <svg width="23" height= "23" viewBox="0 0 23 23" fill="none">
          <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"></motion.path>
          <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"></motion.path>
          <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"></motion.path>
        </svg>
    </button>
  )
}

export default ToggleButton
