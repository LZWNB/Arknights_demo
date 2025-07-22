import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef, } from "react"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "./111.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",

    },
    {
        id: 2,
        title: "VitePress Blog",
        img: "./222.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",

    }, {
        id: 3,
        title: "Mini program",
        img: "./333.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",

    }, {
        id: 4,
        title: "Web size",
        img: "./444.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",

    },
]

const Single = ({ item }) => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )

}

export const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        // restDelta: 0.001
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}></Single>
            ))}
        </div>
    )
}