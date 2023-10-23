import "./contact.scss";
import {motion} from "framer-motion";

const variants={
  initial:{
    opacity:0,
    y:500,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:0.5,
      staggerChildrenP:0.1,
    }
  }
}

export const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>hello street New York</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 123 456 789</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form >
          <input type="text" required placeholder="Name"/>
          <input type="email" required  placeholder="Email"/>
          <textarea rows={8} placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}
