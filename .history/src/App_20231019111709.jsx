import "./app.scss";
import { Hero } from "./commponents/hero/Hero";
import { Navbar } from "./commponents/navbar/Navbar";
import Parallax from "./commponents/parallax/Parallax";
import { Services } from "./commponents/services/Services";
import { Test } from "./commponents/test/Test";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    <section id="Services"><Parallax type="services"> </Parallax></section>
    <section id="Portfolio"> <Services></Services> </section>
    <section > <Test></Test> </section>
     
    <section id="Blog">Hello World</section>
    <section>Hello World</section>
    <section id="Contact">Contact</section>
    
  </div>;
};

export default App;
