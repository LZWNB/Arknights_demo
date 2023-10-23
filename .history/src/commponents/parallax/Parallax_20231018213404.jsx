import "./Parallax.scss"

const Parallax = (type) => {
  return (
    <div className="parallax" style={{background:type==="services"
    ? "Linear-gradient(180deg, #111132, #0c0c1d)" 
    : "Linear-gradient(180deg, #111132, #505064 )" }}>
        <h1>{type==="services" ? "What we do" : "What we Did?"}</h1>
        <div className="Mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}

export default Parallax
