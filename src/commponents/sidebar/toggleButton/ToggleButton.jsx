import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export const ToggleButton = ({setOpen}) => {
  // 添加初始化状态控制
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    // 确保组件在客户端渲染后再显示完整内容
    setIsClient(true)
  }, [])

  return (
    <button onClick={() => setOpen(prev=>!prev)}>
        <svg width="23" height= "23" viewBox="0 0 23 23" fill="none">
          <motion.path 
            strokeWidth="3" 
            stroke="black" 
            strokeLinecap="round" 
            initial="closed"  // 添加明确的初始状态
            d="M 2 2.5 L 20 2.5"  // 设置默认路径
            variants={{
              closed:{d:"M 2 2.5 L 20 2.5"}, 
              open:{d:"M 3 16.5 L 17 2.5"}, 
            }}
          />
          <motion.path 
            strokeWidth="3" 
            stroke="black" 
            strokeLinecap="round"
            initial="closed"  // 添加明确的初始状态
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed:{opacity:1}, 
              open:{opacity:0}, 
            }}
          />
          <motion.path 
            strokeWidth="3" 
            stroke="black" 
            strokeLinecap="round" 
            initial="closed"  // 添加明确的初始状态
            d="M 2 16.346 L 20 16.346"  // 设置默认路径
            variants={{
              closed:{d:"M 2 16.346 L 20 16.346"}, 
              open:{d:"M 3 2.5 L 17 16.346"}, 
            }}
          />
        </svg>
    </button>
  )
}

export default ToggleButton