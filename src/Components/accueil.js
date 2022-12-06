import React from "react";
import headImage from '../image/head.png'
// import sarykely from '../image/sarykely.png'
import DGI from '../image/DGI.jpg'
import backG from '../image/backG.jpg'
import maison from '../image/maison.png'
import loginImg from '../image/loginImg.png'
import Saina from '../image/saina.png'
import Facebook from '../image/facebook.png'
import Email from '../image/email.png'
import Google from '../image/google_plus.png'
import Twitter from '../image/Twitter.png'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

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
    function handleClick1() {
        navigate1('/loginAdmin')
    }
    const PageTransition = {
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0
        }
    }
    return(
        <>
            <motion.div
                        initial="out"
                        animate="in"
                        exit="out"
                        variants={PageTransition}
            >
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
                        {/* <footer className='footer'>
                        <div className='copyLogo'>
                            <p id="copyright">Copyright 2022 by Mirantsoa & Rija Andria</p>
                        </div>
                        </footer> */}
                        <div className="contact">
                            <div className="sous-contact">
                                <div className="DirGI">
                                    <p><b>DGI</b></p> 
                                    <p><b>D</b>irection <b>G</b>énérale des <b>I</b>mpôts</p> 
                                    <p>Immeuble MFB, Antaninarenina
                                            Antananarivo, 101, Madagascar
                                    </p>
                                    <p> Tel: (020) xx-xxx-xx</p>
                                    <p>Email: <a href="dgimpots@moov.mg">dgimpots@moov.mg</a></p>
                                </div>
                                <div className="SSIF">
                                    <p><b>SSIF</b></p>
                                    <p><b>S</b>ervice Du <b>S</b>ystème d'<b>I</b>nformation <b>F</b>iscale</p>
                                    <p>Mandrosoa, Ambohijatovo
                                        Antananarivo, 101, Madagascar
                                    </p>
                                    <p>Tél: (8h à 16h) 034 49 431 52, 032 12 011 74</p>
                                    <p>E-mail: <a href="impot.ssif.hotline@gmail.com">impot.ssif.hotline@gmail.com</a></p>
                                </div>
                                <div className="NOTRE_SITE">
                                    <p><b>NOTRE SITE</b></p>
                                    <a href="www.impots.mg">www.impots.mg</a>
                                    <p>Nifonline</p>
                                    <a href="nifonline.impots.mg">nifonline.impots.mg</a>
                                </div>
                            </div>
                            <div className="social">
                                <p>SOCIAL</p>
                                <div className="icone-social">
                                    <img src={Facebook}></img>
                                    <img src={Twitter}></img>
                                    <img src={Google}></img>
                                    <img src={Email}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </motion.div>
        </>
    )
}