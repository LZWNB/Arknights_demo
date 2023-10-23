import "./Parallax.scss"

const Parallax = (type) => {
  return (
    <div className="parallax">
        <h1>{type==="services" ? "What we do" : "What we Did?"}</h1>
    </div>
  )
}

export default Parallax
