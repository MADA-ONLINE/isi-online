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
// import 'bootstrap/dist/css/bootstrap.css';

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
    const PageVariants_1 = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: "-100%"
        }
    }
    const PageTransition_1 = {
        type: "spring",
        stiffness: 30
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
                        <nav className='navv'>
                            <div className='sary floatinge1'>
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
                        <div className='container' data-aos="zoom-out" data-aos-duration="1900">
                            <div className='card1 floating1'>
                                <img src={loginImg} id='loginImg'/>
                                <div className='content1'>
                                <p id='sehatra'>Sehatrin'ny olon-tsotra</p>
                                </div>
                                <div className='content2'>
                                <p id='tongasoa'>Tongasoa eto amin'ny sehatrin'ny olon-tsotra</p>
                                <button onClick={handleClick} className='btn_accueil btn1'>Tsindrio</button>
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
                        <motion.div
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={PageVariants_1}
                            transition={PageTransition_1}
                        > 
                            <div className="soratra">
                                <article className="soratra1">
                                    <p>...Ho tsotra kokoa ny fikarakaranao ny taratasy ISI</p>
                                </article>
                            </div>
                        </motion.div>
                        {/* **************************** */}
                        <div className="containerbox">
                            <div className="boxfirst">
                                <div className=" roww boxwelcome" data-aos="zoom-in" data-aos-duration="2000">
                                    <article className="text-centerr">
                                        <p></p>
                                        <h4 id="h4">Bienvenue sur "ISI-ONLINE"</h4>
                                        Ce site regroupe en un seul espace les
                                        différentes fonctionnalités (Télédéclaration,
                                        Paiement virtuel, Consultation
                                        de situation fiscale).
                                        <p></p>
                                    </article>
                                </div>
                                <div className="box_debut">
                                    <div className="roww" data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-duration="1500"
                                    >
                                        <article className="col-md-8 col-md-offset-2">
                                            <hr></hr>
                                            <h4>
                                                <span className="fa fa-clipboard">
                                                </span>
                                                Droit de communication
                                            </h4>
                                            <p>Le droit de communication est le droit reconnu à l'administration 
                                                fiscale de prendre connaissance et, au besoin,
                                                copie de documents détenus par des tiers 
                                                (entreprises privées, administrations, etc...).
                                                Les renseignements recueillis à cette occasion peuvent être 
                                                utilisés pour l'assiette et le contrôle de tous impôts et taxes 
                                                à la charge, soit de la personne physique ou morale auprès de laquelle
                                                il est exercé, soit de tiers à cette personne.
                                            </p>
                                            <ul className="list-inline">
                                                <li>
                                                    <a href="https://entreprises.impots.mg/dconline/">
                                                        <span className="glyphicon glyphicon-edit"></span>
                                                        Acceder au service
                                                    </a>
                                                </li>
                                            </ul>
                                        </article>
                                    </div>
                                    <div className="roww" data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos-duration="1500">
                                        <article className="col-md-8 col-md-offset-2">
                                            <hr></hr>
                                            <h4>
                                                <span className="fa fa-clipboard">
                                                </span>
                                                Télédeclaration
                                            </h4>
                                            <p>Ce service permet aux contribuables adhérents
                                                 de liquider et de payer leurs impôts à partir
                                                  de leur poste de travail en se connectant sur INTERNET.
                                                   Il permet de liquider et de payer les déclarations
                                                    mensuelles d’impôts ainsi que les déclarations annuelles:
                                                    dépôt et paiement des déclarations de l'Impôt sur le Revenu (IR),
                                                    de l'Impôt Synthétique (IS), de l'Impôt Synthétique Intermittent(ISI), 
                                                    de la Taxe sur la Valeur Ajoutée (TVA),
                                                    de l'Impôt sur les Revenus Salariaux et Assimilés (IRSA).
                                            </p>
                                            <ul className="list-inline">
                                                <li>
                                                    <a href="https://entreprises.impots.mg/dconline/">
                                                        <span className="glyphicon glyphicon-edit"></span>
                                                        Acceder au service
                                                    </a>
                                                </li>
                                            </ul>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ***************************** */}
                        <div className="contact" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="2000">
                            <div className="sous-contact">
                                <div className="DirGI" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom">
                                    <p><b>DGI</b></p> 
                                    <p><b>D</b>irection <b>G</b>énérale des <b>I</b>mpôts</p> 
                                    <p>Immeuble MFB, Antaninarenina
                                            Antananarivo, 101, Madagascar
                                    </p>
                                    <p> Tel: (020) xx-xxx-xx</p>
                                    <p>Email: <a href="dgimpots@moov.mg">dgimpots@moov.mg</a></p>
                                </div>
                                <div className="SSIF" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom">
                                    <p><b>SSIF</b></p>
                                    <p><b>S</b>ervice Du <b>S</b>ystème d'<b>I</b>nformation <b>F</b>iscale</p>
                                    <p>Mandrosoa, Ambohijatovo
                                        Antananarivo, 101, Madagascar
                                    </p>
                                    <p>Tél: (8h à 16h) 034 49 431 52, 032 12 011 74</p>
                                    <p>E-mail: <a href="impot.ssif.hotline@gmail.com">impot.ssif.hotline@gmail.com</a></p>
                                </div>
                                <div className="NOTRE_SITE" data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom">
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