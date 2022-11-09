import './css/accueil.css';
import './css/login.css';
import React from 'react';
import Accueil from './Components/accueil';
import LoginClient from './Components/loginClient';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      {/* <div className='App'>       
      </div> */}
        <Routes>
          <Route index element={ <Accueil />} />
          <Route exact path="/LoginClient" element={ <LoginClient /> } />
        </Routes>
    </Router>
  );
}

export default App;
