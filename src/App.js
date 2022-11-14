import './css/accueil.css';
import './css/login.css';
import './css/List.css';
import './css/Add.css';
import React from 'react';
import Accueil from './Components/accueil';
import LoginClient from './Components/loginClient';
import LoginAdmin from './Components/loginAdmin';
import List from './Components/List';
import Add from './Components/Add';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      {/* <div className='App'>       
      </div> */}
        <Routes>
          <Route index element={ <Accueil />} />
          <Route exact path="/LoginClient" element={ <LoginClient /> } />
          <Route exact path="/LoginAdmin" element={ <LoginAdmin /> } />
          <Route exact path="/List" element={ <List /> } />
          <Route exact path="/:nif/Add" element={ <Add /> } />
        </Routes>
    </Router>
  );
}

export default App;
