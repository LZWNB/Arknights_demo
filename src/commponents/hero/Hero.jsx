import "./Hero.scss"
import {motion} from "framer-motion"
import { useTranslation } from 'react-i18next';

const textVariants = {
    //  初始状态
    initial: {
        x: -500,
        opacity: 0,
    },
    // 动画过渡状态
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
    },
    animate:{
        x: "-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        }
    }
}

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">

        <div className="wrapper">
            <motion.div 
            className="textContainer" 
            variants={textVariants} 
            initial="initial" 
            animate="animate">
                <motion.h2 variants={textVariants}>{t('Hero.title')}</motion.h2>
                <motion.h1 variants={textVariants}>{t('Hero.title-big')}</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>{t('Hero.buttons1')}</motion.button>
                    <motion.button variants={textVariants}>{t('Hero.buttons2')}</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="https://raw.githubusercontent.com/LZWNB/images/refs/heads/main/img/scroll.png" alt="" />
            </motion.div>
        </div>

        <motion.div className="slidingTextContainer" 
            variants={slderVariants}
            initial="initial"
            animate="animate"
        >
            {t('Hero.social')}
        </motion.div>
        <div className="imageContainer">
            <img src="https://raw.githubusercontent.com/LZWNB/images/refs/heads/main/img/900px-%E7%AB%8B%E7%BB%98_%E9%BB%91%E9%94%AE_1.png" alt="" />
        </div>
    </div>
  )
}
