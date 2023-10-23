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
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const slderVariants = {
    initial:{
        x: 0,
        opacity: 0,
    },
    animate:{
        x: "-220%",
        
        transition:{
            repeat:Infinity,
            duration:20,
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
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" 
            variants={slderVariants}
            initial="initial"
            animate="animate"
        >
            Writer Content Creator Influencer
        </motion.div>
        <div className="imageContainer">
            <img src="/900px-立绘_黑键_1.png" alt="" />
        </div>
    </div>
  )
}
