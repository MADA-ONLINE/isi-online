import './css/App.css';
import React from 'react';
import headImage from './image/head.png'
import sarykely from './image/sarykely.png'
import DGI from './image/DGI.jpg'
import backG from './image/backG.jpg'
import maison from './image/maison.png'
import loginImg from './image/loginImg.png'
// import { Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <img src={backG} id="background"/>
      <div className='content'>
        <nav className='nav'>
          <div className='sary floating1'>
            <img src={headImage} id="headImage"/>
          </div>
          <div className='floating2'>
            <img src={sarykely} id="sarykely"/>
          </div>
          <p id='isiOnline'>ISI-ONLINE</p>
        </nav>
        <div className='slogant'>
          <p id='slogant'><b>"Raiso ny adidinao, aloavy ny hetra..."</b></p>
        </div>
        <div className='container'>
          <div className='card1 floating1'>
            <img src={loginImg} id='loginImg'/>
            <div className='content1'>
              <p id='sehatra'>Sehatrin'ny olon-tsotra</p>
            </div>
            <div className='content2'>
              <p id='tongasoa'>Tongasoa eto amin'ny sehatrin'ny olon-tsotra</p>
              <button className='btn btn1'><b>Tsindrio</b></button>
            </div>
          </div>
          <div className='card2 floating2'>
            <img src={maison} id='maison'/>
            <div className='content3'>
              <p>Sehatrin'ny tompon'andraikitra</p>
            </div>
            <div className='content4'>
              <p>Tongasoa eto amin'ny sehatrin'ny tompon'andraikitra</p>
              <button className='btn0 btn2'><b>Tsindrio</b></button>
            </div>
          </div>
        </div>
        <footer className='footer'>
          <div className='copyLogo'>
            <p id="copyright">Copyright 2022</p>
            <img src={DGI} id="DGI"/>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
