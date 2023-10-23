import {motion} from "framer-motion";
import { useState } from "react";

export const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: { opacity: 1, x:800, transition:{type:"sprign",stiffness:100,damping:100}},
        hidden: { opacity: 0 }
    }

    const items = [
        "item1","item2","item3","item4",
    ]
        
    

  return (
    <div className='course'>
        <motion.ul>
            <motion.li></motion.li>
        </motion.ul>
    </div>
  )
}
