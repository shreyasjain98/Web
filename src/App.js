
import './App.css';
import Nav from './Component/Navbar/Nav';
import Home from './Component/home/Home';
import About from './Component/about/About';
import Client from './Component/client/Client';
import Services from './Component/services/Services';
import Mission from './Component/mission/Mission';
import Team from './Component/strategicTeam/Team';
import Contact from './Component/contact/Contact';
import Foota from './Component/foo/Foota';
import Footlast from './Component/lastfoot/Footlast';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Client />
      <Services />
      <Mission />
      <Team />
      <Contact />
      <Foota />
      <Footlast/>
    </div>
  );
}

export default App;
