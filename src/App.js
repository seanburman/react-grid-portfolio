import Nav from './views/navigation/Nav';
import './App.css';
import './views/navigation/Nav.css'
import './assets/global-styles.css'
import { useSelector } from 'react-redux';
import About from './views/pages/About/About';
import Projects from './views/pages/Projects/Projects';
import Clients from './views/pages/Clients/Clients';
import Contact from './views/pages/Contact/Contact';

function App() {

  const view = useSelector(state => state.views)
  const { name } = view[0]
  return (
    <div className="grid-container">
      <div className="grid-item header work-sans black">
      <p className="em2 mb-0">Sean Burman</p>
      software developer</div>
      <Nav />
      <div className="grid-item main">
      {
        {
            'About': <About />,
            'Projects': <Projects />,
            'Clients': <Clients />,
            'Contact': <Contact />,
        }[name]
      }
      </div>

      <div className="grid-item footer">
        <a href="https://github.com/seanburman" target="blank">
          <i className="fab fa-github footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/seanburman/" target="blank">
          <i className="fab fa-linkedin-in footer-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
