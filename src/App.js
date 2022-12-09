import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './css/accueil.css';
import './css/login.css';
import './css/List.css';
import './css/ListPaiement.css';
import './css/ListAdmin.css';
import './css/Add.css';
import './css/Paiement.css';
import './css/Edit.css';
import React from 'react';
import Accueil from './Components/accueil';
import LoginClient from './Components/loginClient';
import LoginAdmin from './Components/loginAdmin';
import List from './Components/List';
import Add from './Components/Add';
import ListAdmin from './Components/ListAdmin';
import Edit from './Components/Edit';
import Paiement from './Components/Paiement';
import ListPaiement from './Components/ListPaiement';
import {AnimatePresence} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init()


function App() {
  return (
    <Router>
      <ToastContainer/>
      {/* <div className='App'>       
      </div> */}
      <AnimatePresence>
        <Routes>
          <Route index element={ <Accueil />} />
          <Route exact path="/LoginClient" element={ <LoginClient /> } />
          <Route exact path="/LoginAdmin" element={ <LoginAdmin /> } />
          <Route exact path="/List/:nif" element={ <List /> } />
          <Route exact path="/Add/:Nif" element={ <Add /> } />
          <Route exact path="/ListAdmin" element={ <ListAdmin /> } />
          <Route exact path="/Edit/:laharana" element={ <Edit /> } />
          <Route exact path="/Paiement/:laharana" element={ <Paiement /> } />
          {/* <Route exact path="/:nif/Paiement" element={ <Paiement /> } /> */}
          <Route exact path="/ListPaiement" element={ <ListPaiement /> } />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
