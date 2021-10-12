import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation.jsx';
import AirlineWindow from './components/AirlineWindow.jsx';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
// let main = require('./main.css');
import main from './main.css';


const App = () => {
  console.log(main);
  const [airlineList, updateAirlines] = useState([]);
  useEffect(() => {
    axios.get('/airlines').then(data => {
      let list = data.data.split('/**/results(').join('');
      list = list.substring(0, list.length - 2);
      list = JSON.parse(list);
      updateAirlines(list);
    });
  }, [])

  return (
    <div>
      <Navigation></Navigation>
      <AirlineWindow airlines={airlineList}></AirlineWindow>
    </div>
  )
}

export default App;