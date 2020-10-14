import React from 'react'
import Routing from './routing/Routing'
import { NavigationBar } from './components/Naivigationbar/NavigationBar'
import './App.css'

function App() {
  return (
    <div>
      <Routing>
        <NavigationBar/>
      </Routing>
    </div>
  );
}

export default App;
