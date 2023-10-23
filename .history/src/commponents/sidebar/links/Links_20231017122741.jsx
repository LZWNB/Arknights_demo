

const Links = () => {

  const items = [
    "Homepage",
    "Projects",
    "Contact",
    "Resume",
    "Portfolio",
    "Blog",
    "About",
  ]

  return (
    <div className="links">{items.map(item=>{
      <a href={`#${item}`} key={item}>{}item</a>
    })}</div>
  )
}

export default Links

