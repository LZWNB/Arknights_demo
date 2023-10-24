import "./app.scss";
import { Contact } from "./commponents/contact/Contact";
import { Cursor } from "./commponents/cursor/Cursor";
import { Hero } from "./commponents/hero/Hero";
import { Navbar } from "./commponents/navbar/Navbar";
import Parallax from "./commponents/parallax/Parallax";
import { Portfolio } from "./commponents/portfolio/Portfolio";
import { Services } from "./commponents/services/Services";

const App = () => {
  return <div>
    <Cursor></Cursor>
    <section id="Homepage">
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    
    <section id="Services"><Parallax type="services"> </Parallax></section>
    <section id="Portfolio"> <Services></Services> </section>
    <Portfolio></Portfolio>
    <section id="Contact">
      <Contact></Contact>
    </section>
    
  </div>;
};

export default App;
