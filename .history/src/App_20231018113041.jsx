import "./app.scss";
import { Hero } from "./commponents/hero/Hero";
import { Navbar } from "./commponents/navbar/Navbar";
import Parallax from "./commponents/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    <section id="Services"><Parallax></Parallax></section>
    <section >Hello World</section>
    <section >Hello World</section>
     
    <section id="Blog">Hello World</section>
    <section>Hello World</section>
    <section id="Contact">Contact</section>
    
  </div>;
};

export default App;
