import {useRef} from "react"
import "./Parallax.scss";
import {motion,useScroll, useTransform } from "framer-motion"

  

const Parallax = (type) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"],

  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div 
    className="parallax" 
    ref={ref}
    style={{background:type==="services"
    ? "Linear-gradient(180deg, #111132, #0c0c1d)" 
    : "Linear-gradient(180deg, #111132, #505064)" }}>
        <motion.h1 style={{y:yText}}>{type==="services" ? "What we do" : "What we Did?"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div 
        style={{y:yBg}} className="planets"
        style={{backgroundImage:`url(${type==="services" ? "/planets.png" : "/sun.png"})`}}
        ></motion.div>
        <motion.div style={{y:yText}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
