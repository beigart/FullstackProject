import React from 'react'
import Routing from './routing/Routing'
import { NavigationBar } from './components/Naivigationbar/NavigationBar'
import './App.css'
import { UserProvider } from '../src/utils/context/UserContext'
import { Footer } from './components/Footer/Footer'


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <UserProvider>
        <Routing>
          <NavigationBar/>
        </Routing>
      </UserProvider>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
