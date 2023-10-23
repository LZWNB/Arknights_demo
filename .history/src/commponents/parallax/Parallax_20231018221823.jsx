import {useRef} from "react"
import "./Parallax.scss";
import {motion,useScroll, useTransform } from "framer-motion"

  

const Parallax = (type) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "start start"],

  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
    className="parallax" 
    ref={ref}
    style={{background:type==="services"
    ? "Linear-gradient(180deg, #111132, #0c0c1d)" 
    : "Linear-gradient(180deg, #111132, #505064)" }}>
        <motion.h1 style={{y:yBg}}>{type==="services" ? "What we do" : "What we Did?"}</motion.h1>
        <motion.div className="Mountains"></motion.div>
        <motion.div className="planets"></motion.div>
        <motion.div className="stars"></motion.div>
    </div>
  )
}

export default Parallax
