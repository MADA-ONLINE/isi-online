import React from "react";
import headImage from '../image/head.png'
// import sarykely from '../image/sarykely.png'
import DGI from '../image/DGI.jpg'
import backG from '../image/backG.jpg'
import maison from '../image/maison.png'
import loginImg from '../image/loginImg.png'
import Saina from '../image/saina.png'
import { useNavigate } from 'react-router-dom';

// import loginClient from './Components/loginClient'
export default function Accueil(){
    let navigate = useNavigate();
    function handleClick() {
        navigate('/loginClient')
    }
    let navigate1 = useNavigate();
    function handleClick1() {
        navigate1('/loginAdmin')
    }
    return(
        <>
            <body className="bodyAccueil">
                <img src={backG} id="background"/>
                
                <div className='content'>
                    <nav className='nav'>
                        <div className='sary floating1'>
                            <img src={headImage} id="headImage"/>
                        </div>
                        <div className='saina'>
                            <img src={Saina} id="saina1"/>
                            <img src={DGI} id="DGI"/>
                        </div>
                    
                        <p id='isiOnline'>isi-online</p>
                    </nav>
                    <div className='slogant'>
                    <p id='slogant'>"Raiso ny adidinao, aloavy ny hetra..."</p>
                    </div>
                    <div className='container'>
                        <div className='card1 floating1'>
                            <img src={loginImg} id='loginImg'/>
                            <div className='content1'>
                            <p id='sehatra'>Sehatrin'ny olon-tsotra</p>
                            </div>
                            <div className='content2'>
                            <p id='tongasoa'>Tongasoa eto amin'ny sehatrin'ny olon-tsotra</p>
                            <button onClick={handleClick} className='btn btn1'>Tsindrio</button>
                            </div>
                        </div>
                        <div className='card2 floating2'>
                            <img src={maison} id='maison'/>
                            <div className='content3'>
                            <p>Sehatrin'ny tompon'andraikitra</p>
                            </div>
                            <div className='content4'>
                            <p>Tongasoa eto amin'ny sehatrin'ny tompon'andraikitra</p>
                            <button onClick={handleClick1} className='btn0 btn2'>Tsindrio</button>
                            </div>
                        </div>
                    </div>
                    <footer className='footer'>
                    <div className='copyLogo'>
                        <p id="copyright">Copyright 2022 by Mirantsoa & Rija Andria</p>
                    </div>
                    </footer>
                </div>
            </body>
        </>
    )
}
