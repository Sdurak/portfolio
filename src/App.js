import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}
export default App;
