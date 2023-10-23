import {motion} from "framer-motion";

const Links = () => {

  const items = ["Homepage","Projects","Blog","About","Contact",]

  const variants  = {
    open:{
      transition: {
        staggeredChildren: 0.1,
      }
    },
    closed:{
      transition: {
        staggeredChildren: 0.05,
        staggerDirection: -1
      }
    },
  }

  return (
    <motion.div className="links">{items.map(item=>(
      <a href={`#${item}`} key={item}>{item}</a>
    ))}</motion.div>
  )
}

export default Links

