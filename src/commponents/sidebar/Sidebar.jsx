import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

export const Sidebar = () => {
  // 添加一个状态来控制组件是否已经挂载
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  // 使用 useEffect 确保组件挂载后再渲染完整内容
  useEffect(() => {
    setMounted(true);
  }, []);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px ) ",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links></Links>
      </motion.div>
      {/* 确保组件已挂载后再渲染 ToggleButton */}
      {mounted && <ToggleButton setOpen={setOpen}></ToggleButton>}
    </motion.div>
  );
};
