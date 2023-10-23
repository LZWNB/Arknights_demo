import "./services.scss"
import {motion} from "framer-motion"

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
              <img src="/people.webp" alt="" />
              <h1>
                <b> Unique </b>Ideas
              </h1>
            </div>
            
        </motion.div>
        <motion.div className="listContainer"></motion.div>
    </motion.div>
  )
}
