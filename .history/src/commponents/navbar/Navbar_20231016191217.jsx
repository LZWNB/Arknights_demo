import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Lama Dev</span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/twitter.png" alt="" /></a>
                <a href="#"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
