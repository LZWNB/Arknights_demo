import "./services.scss"
import { motion } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerCChildren: 0.1,
    },
  },
}

const varhr = {
  initial: {
    x: 200,
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      staggerCChildren: 0.1,
    },
  },
}

export const Services = () => {

  const ref = useRef()

  const isInView = (ref,{margin:"-100px"})

  return (
    <motion.div className="services" 
    variants={variants} 
    initial="initial" 
    // animate="animate"
    // whileInView={"animate"}
    ref={ref}
    animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>If there is a lack of an appreciator who applauds and shouts encore,
          <br></br>
          let me act as the one. Congratulations, Dr.</p>
        <hr style={{width:"200px",transition:"all 0.5s"}} 

        ></hr>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/456.jpg" alt="" />
          <h1>
            <b> Unique </b>Ideas
          </h1>
        </div>

        <div className="title">
          <h1>
            <b> For Your </b>Business.
          </h1>
          <button> WHAT WE DO ? </button>
        </div>

      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"Lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem obcaecati iure voluptatem cupiditate nisi laudantium nobis! Quo optio quos ad id,
            dolor distinctio, officia quaerat aspernatur animi modi dolores culpa!
          </p>
          <button>Go </button>
        </motion.div>

        <motion.div className="box" whileHover={{background:"Lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem obcaecati iure voluptatem cupiditate nisi laudantium nobis! Quo optio quos ad id,
            dolor distinctio, officia quaerat aspernatur animi modi dolores culpa!
          </p>
          <button>Go </button>
        </motion.div>

        <motion.div className="box" whileHover={{background:"Lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem obcaecati iure voluptatem cupiditate nisi laudantium nobis! Quo optio quos ad id,
            dolor distinctio, officia quaerat aspernatur animi modi dolores culpa!
          </p>
          <button>Go </button>
        </motion.div>

        <motion.div className="box" whileHover={{background:"Lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem obcaecati iure voluptatem cupiditate nisi laudantium nobis! Quo optio quos ad id,
            dolor distinctio, officia quaerat aspernatur animi modi dolores culpa!
          </p>
          <button>Go </button>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}









