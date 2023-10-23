import "./Hero.scss"
import {motion} from "framer-motion"
const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

export const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div 
             className="textContainer" 
            variants={textVariants} 
            initial="iniotial" 
            animate="animate">
                <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
                <motion.h1 variants={textVariants}>web developer and UI designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <div className="slidingTextContainer">
            Writer Content Creator Influencer
        </div>
        <div className="imageContainer">
            <img src="/900px-立绘_黑键_1.png" alt="" />
        </div>
    </div>
  )
}
