import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Doctors from './components/Doctors';
import Services from './components/Service';
import Contact from './components/contact';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path ='/' element = {<Home />}/>
        <Route path ='/about' element = {<About />}/>
        <Route path ='/doctors' element = {<Doctors />}/>
        <Route path ='/services' element = {<Services />}/>
        <Route path ='/contact' element = {<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
