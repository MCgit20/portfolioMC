import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Works from "./components/works";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Intro></Intro>
    <Skills></Skills>
    <Works></Works>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
