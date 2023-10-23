import "./Parallax.scss"

const Parallax = (type) => {
  return (
    <div className="parallax">
        <h1>{type==="services" ? "What we do" : "What we Did?"}</h1>
        <div className="Mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}

export default Parallax
