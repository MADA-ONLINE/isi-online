import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './css/accueil.css';
import './css/login.css';
import './css/List.css';
import './css/ListAdmin.css';
import './css/Add.css';
import './css/Paiement.css';
import React from 'react';
import Accueil from './Components/accueil';
import LoginClient from './Components/loginClient';
import LoginAdmin from './Components/loginAdmin';
import List from './Components/List';
import Add from './Components/Add';
import ListAdmin from './Components/ListAdmin';
import Edit from './Components/Edit';
import Paiement from './Components/Paiement';


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
          <Route exact path="/ListAdmin" element={ <ListAdmin /> } />
          <Route exact path="/:nif/Edit" element={ <Edit /> } />
          <Route exact path="/:nif/Paiement" element={ <Paiement /> } />
        </Routes>
    </Router>
  );
}

export default App;
