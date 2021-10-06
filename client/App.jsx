import React from 'react';
import Navigation from './components/Navigation.jsx';
import ContactForm from './components/ContactForm.jsx';
import AboutMe from './components/AboutMe.jsx';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import './main.css';


const App = () => {

  return (
    <div>
      <Navigation></Navigation>
      <AboutMe></AboutMe>
      {/* <ContactForm></ContactForm> */}
    </div>
  )
}

export default App;