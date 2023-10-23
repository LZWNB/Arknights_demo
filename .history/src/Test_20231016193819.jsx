import {motion} from "framer-motion";

export const Test = () => {



    const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 }
    }

  return (
    <div className='course'>
        <motion.div className="box" 
            variants={variants}
            initial="hidden"
            animate="visible"
        ></motion.div>
    </div>
  )
}
