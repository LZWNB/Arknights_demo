import "./test.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Test = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1, subtitle: "subtitle1", title: "title1" },
    { id: 2, subtitle: "subtitle2", title: "title2" },
    { id: 3, subtitle: "subtitle3", title: "title3" }
  ];
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <div className="test">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => {
            
            setSelectedId(item.id)}}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div layoutId={selectedItem.id}>
            <motion.h5>{selectedItem.subtitle}</motion.h5>
            <motion.h2>{selectedItem.title}</motion.h2>
            <motion.button onClick={() => {
            
            setSelectedId(item.id)}} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
