import {motion} from "framer-motion";
import { useState } from "react";

export const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: { opacity: 1, x:800, transition:{type:"sprign"}},
        hidden: { opacity: 0, scale: 0.5 }
    }

  return (
    <div className='course'>
        <motion.div className="box" 
            variants={variants}
            transition={{ duration: 1 }}
            animate={open ? "visible" : "hidden"}
        ></motion.div>
        <button onClick={() => setOpen(prev =>!prev)}>onClick</button>
    </div>
  )
}
