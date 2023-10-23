import "./app.scss";
import { Hero } from "./commponents/hero/Hero";
import { Navbar } from "./commponents/navbar/Navbar";
import Parallax from "./commponents/parallax/Parallax";
import { Portfolio } from "./commponents/portfolio/Portfolio";
import { Services } from "./commponents/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    
    <section id="Services"><Parallax type="services"> </Parallax></section>
    <section id="Portfolio"> <Services></Services> </section>
    <Portfolio id="About"></Portfolio>
    <section id="Blog">Hello World</section>
    <section>Hello World</section>
    <section id="Contact">Contact</section>
    
  </div>;
};

export default App;
