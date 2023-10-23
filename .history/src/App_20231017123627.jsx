import "./app.scss";
import { Navbar } from "./commponents/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar></Navbar>
    </section>
    <section id="Projects">Hello World</section>
    <section id="Resume">Hello World</section>
    <section id="Portfolio">Hello World</section>
    <section id="Blog">Hello World</section>
    <section id="About">Hello World</section>
    <section id="Contact">Contact</section> 
  </div>;
};

export default App;
