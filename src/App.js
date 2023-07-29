import logo from './assets/img/logo.svg';
import './css/ProjectCard.css';
import './css/App.css';
import './css/Banner.css';
import './css/Skills.css';
import './css/Projects.css';
import './css/Contact.css';
import './css/Footer.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import  Whatsapp  from './components/Whatsapp';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;
