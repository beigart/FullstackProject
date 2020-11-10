import React from 'react'
import Routing from './routing/Routing'
import { NavigationBar } from './components/Naivigationbar/NavigationBar'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Alert }  from './components/Alert/Alert'

//Redux
import { Provider } from 'react-redux'
import store from './store';


function App() {
  return (
    <div className="page-container">
      <Provider store={store}>
        <Alert />
      <div className="content-wrap">
      
        <Routing>
          <NavigationBar/>
        </Routing>
      
      </div>
      <Footer/>
      </Provider>
    </div>
  );
}

export default App;
