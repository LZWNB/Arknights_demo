import "./test.scss";
import {motion} from "framer-motion";

export const Test = () => {
  return (
    <div className="test">
        const [selectedId, setSelectedId] = useState(null)
 
 {items.map(item => (
   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
     <motion.h5>{item.subtitle}</motion.h5>
     <motion.h2>{item.title}</motion.h2>
   </motion.div>
 ))}
 
 <AnimatePresence>
   {selectedId && (
     <motion.div layoutId={selectedId}>
       <motion.h5>{item.subtitle}</motion.h5>
       <motion.h2>{item.title}</motion.h2>
       <motion.button onClick={() => setSelectedId(null)} />
     </motion.div>
   )}
 </AnimatePresence>
    </div>
  )
}
