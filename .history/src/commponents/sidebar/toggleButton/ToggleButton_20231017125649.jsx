import { motion } from "framer-motion"

export const ToggleButton = ({setOpen}) => {
  return (

    <button onClick={() => setOpen(prev=>!prev)}>
        <svg width="23" height= "23" viewBox="0 0 23 23" fill="none">
          <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" 
          variants={{open:{d:"M 3 16.5 L 17 2.5"}, closed:{d:"M 2 2.5 L 20 2.5"}}}></motion.path>
          <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"></motion.path>
          <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"></motion.path>
        </svg>
    </button>
  )
}

export default ToggleButton
