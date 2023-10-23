import "./services.scss"
import { motion } from "framer-motion"

export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>If there is a lack of an appreciator who applauds and shouts encore,
          <br></br>
          let me act as the one. Congratulations, Dr.</p>
        <hr></hr>
      </motion.div>
      <motion.div className="titleContainer">
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
      <motion.div className="listContainer">
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










