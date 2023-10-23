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
    <motion.div className="contact">
      <div className="textContainer">
        <h1>Let’s work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>hello street New York</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+1 123 456 789</span>
        </div>
      </div>
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
