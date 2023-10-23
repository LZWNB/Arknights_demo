import "./portfolio.scss"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "../public/111.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",

    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",

    }, {
        id: 3,
        title: "Vanilla Js App",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",

    }, {
        id: 4,
        title: "Music App",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",

    },
]

const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    )

}

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll()

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <div className="progressBar"></div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}></Single>
            ))}
        </div>
    )
}

export default Portfolio;
