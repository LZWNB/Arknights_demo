import "./navbar.scss";
import {motion} from "framer-motion"
import { Sidebar } from "../sidebar/Sidebar";
import { useTranslation, } from "react-i18next";

export const Navbar = () => {
  const { i18n } = useTranslation();
 

  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar></Sidebar>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration: 0.5}} 
            style={{marginLeft:"20px"}}
            >Arknights</motion.span>
            <div className="social">
              <div className="language">
                <motion.button onClick={ () => i18n.changeLanguage("en")}>
                  EN
                </motion.button>
                <span>/</span>
                <motion.button onClick={ () => i18n.changeLanguage("zh")}>
                  中
                </motion.button >
                <span>/</span>
                <motion.button onClick={ () => i18n.changeLanguage("ja")}>
                  日
                </motion.button >
              </div>
                <a href="https://www.facebook.com/share/15j2WG6hQ2/"><img src="https://raw.githubusercontent.com/LZWNB/images/refs/heads/main/icon/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/luozhengwei4?igsh=MWUwdjV6djJ3OG5lcw=="><img src="https://raw.githubusercontent.com/LZWNB/images/refs/heads/main/icon/instagram.png" alt="" /></a>
                <a href="#"><img src="https://raw.githubusercontent.com/LZWNB/images/refs/heads/main/icon/youtube.png" alt="" /></a>
                <a href="https://m.bilibili.com/space/2132461246"><img src="https://raw.githubusercontent.com/LZWNB/images/refs/heads/main/icon/bilibili.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
