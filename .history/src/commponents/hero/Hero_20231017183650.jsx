import "./Hero.scss"

export const Hero = () => {
  return (
    <div className="hero">
        <div className="textContainer">
            <h2>HARVEY TYLER</h2>
            <h1>web developer and UI designer</h1>
            <div className="buttons">
                <button>See the Latest Works</button>
                <button>Contact Me</button>
            </div>

            <img src="/scroll.png" alt="" />
        </div>
        <div className="imageContainer">
            <img src="/900px-立绘_黑键_1.png" alt="" />
        </div>
    </div>
  )
}
