import React from 'react'
import Routing from './routing/Routing'
import { NavigationBar } from './components/Naivigationbar/NavigationBar'
import './App.css'
import { UserProvider } from '../src/utils/context/UserContext'

function App() {
  return (
    <div>
      <UserProvider>
        <Routing>
          <NavigationBar/>
        </Routing>
      </UserProvider>
    </div>
  );
}

export default App;
