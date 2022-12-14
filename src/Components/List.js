import React, { useState, useEffect} from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from "axios";
import Add from '../image/add.png'
import Search from '../image/search.png'
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Facebook from '../image/facebook.png'
import Email from '../image/email.png'
import Google from '../image/google_plus.png'
import Twitter from '../image/Twitter.png'
import { motion } from 'framer-motion'
import Logout from '../image/logout.png'
import Back from '../image/back.jpg'

 function List(){
    const {nif} =  useParams();
     let navigate= useNavigate();
    // function handleClick() {
    //     navigate('/Add')
    // }
        const [infoisi,setInfoisi] = useState([]);
        const [infoisi_1,setInfoisi_1] = useState([]);
        const [chercher,setChercher] = useState("");
        const handleChange =(e)=>{
            //setSear({...sear,[e.target.name] : e.target.value})
            
            let value = e.target.value;
            setChercher(value);
        }
        function Lougout() {
            navigate('/LoginClient')
        }
        useEffect(()=>{
            loadUsers();
        },
        [] 
        );
        useEffect(()=>{
            loadUser();
        },
        [] 
        );    
         const loadUsers = async ()=>{
         const result = await axios.get("http://localhost/ISI_online/ListIsi.php?nif="+nif);
         //console.log(result.data);
          setInfoisi(result.data); 
          console.log(typeof(result.data) + " ny result");
        };
        const loadUser = async ()=>{
            const result_1 = await axios.get("http://localhost/ISI_online/ViewNif.php?nif="+nif);
             //console.log(result.data);
             setInfoisi_1(result_1.data);
             console.log(typeof(result_1.data) + " ny result_1");   
        }
        console.log(infoisi);
        const PageVariants = {
            in: {
                opacity: 1,
                x: 0
            },
            out: {
                opacity: 0,
                x: "-100%"
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
        const PageTransition = {
            type: "spring",
            stiffness: 30
        }
        // const PageTransition_1 = {
        //     type: "spring",
        //     stiffness: 20
        // }
    return (
        <>
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={PageVariants}
                transition={PageTransition}
            >
                <body className="bodyList">
                    <img src={Back} id="back"/>
                    <div className="All">
                        <nav className='nav1'>
                            <div className='sary floating1'>
                                <img src={headImage} id="headImage2"/>
                            </div>
                            <div className='saina3'>
                                <img src={Saina1} id="saina4"/>
                                <img src={DGI} id="DGI3"/>
                            </div>
                            <p id='isiOnline2'>isi-online</p>
                        </nav>
                        <div className="titre" data-aos="zoom-in" data-aos-duration="1900">
                            {/* <hr id="hr1"/>
                            <hr id="hr2"/> */}
                            <p>Lisitr'ireo ISI anao</p>
                            {/* <hr id="hr3"/>
                            <hr id="hr4"/> */}
                        </div>
                        <div className="info">
                            <div className="add">
                                <Link className ="" to={`/Add/${infoisi_1.nif}`}>
                                    <img src={Add}/>
                                </Link>
                            </div>
                            <div className="info-info">                                          
                                <div className="infoname">
                                    <p id="nif">NIF: <b>{infoisi_1.nif}</b></p>
                                    {/* <hr></hr> */}
                                    <p id="anarana">Anarana feno:<b>{infoisi_1.anarana_feno}</b></p>
                                </div>
                            </div>
                            {/* )})} */}
                            <div className="deconnexion">
                                    <img src={Logout} onClick={Lougout}/>
                                    <p>D??connexion</p>
                            </div>
                            <div className="search_list">
                                <input type="texte" placeholder="Tadiavo"
                                onChange = {handleChange}
                                />
                                <img src={Search} />
                            </div>                           
                        </div> 
                        <motion.div
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={PageVariants_1}
                            transition={PageTransition}
                        >
                            <div className="table1">
                                <table className="content-table">
                                    <thead>
                                        <tr>
                                            <th>Laharana</th>
                                            <th>Anaran'ny entana</th>
                                            <th>Vidiny (Ariary)</th>
                                            <th>Ny isany</th>
                                            <th>Daty novidianana azy</th>
                                            <th>Daty nisoratana ISI</th>
                                            <th>Daty nandoavam-bola</th>
                                            <th>Vola aloha (Ariary)</th>
                                            <th>sazy</th>
                                            <th>Fanamarihana</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {infoisi.filter((infoisi)=>{
                                            return (infoisi.anarana_entana.toLowerCase().includes(chercher) ||
                                            infoisi.daty_nividianana.includes(chercher) || infoisi.daty_androany.includes(chercher) || infoisi.daty_fandoavana.includes(chercher) || infoisi.fanamarihana.toLowerCase().includes(chercher))            
                                            }).map(infoisi=>{ return (                           
                                            <tr>
                                                <td>{infoisi.laharana}</td>
                                                <td>{infoisi.anarana_entana}</td>
                                                <td>{infoisi.vidina_entana}</td>
                                                <td>{infoisi.isany}</td>
                                                <td>{infoisi.daty_nividianana}</td>
                                                <td>{infoisi.daty_androany}</td>
                                                <td>{infoisi.daty_fandoavana}</td>
                                                <td>{infoisi.vola_aloa}</td>
                                                <td>{infoisi.sazy}</td>
                                                <td>{infoisi.fanamarihana}</td>
                                            </tr>                             
                                        )})}           
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>                   
                        <div className="contact_List" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="2000">
                            <div className="sous-contact">
                                <div className="DirGI">
                                    <p><b>DGI</b></p> 
                                    <p><b>D</b>irection <b>G</b>??n??rale des <b>I</b>mp??ts</p> 
                                    <p>Immeuble MFB, Antaninarenina
                                            Antananarivo, 101, Madagascar
                                    </p>
                                    <p> Tel: (020) xx-xxx-xx</p>
                                    <p>Email: <a href="dgimpots@moov.mg">dgimpots@moov.mg</a></p>
                                </div>
                                <div className="SSIF">
                                    <p><b>SSIF</b></p>
                                    <p><b>S</b>ervice Du <b>S</b>yst??me d'<b>I</b>nformation <b>F</b>iscale</p>
                                    <p>Mandrosoa, Ambohijatovo
                                        Antananarivo, 101, Madagascar
                                    </p>
                                    <p>T??l: (8h ?? 16h) 034 49 431 52, 032 12 011 74</p>
                                    <p>E-mail: <a href="impot.ssif.hotline@gmail.com">impot.ssif.hotline@gmail.com</a></p>
                                </div>
                                <div className="NOTRE_SITE">
                                    <p><b>IREO TRANOKALA</b></p>
                                    <a href="www.impots.mg">www.impots.mg</a>
                                    <p>Nifonline</p>
                                    <a href="nifonline.impots.mg">nifonline.impots.mg</a>
                                </div>
                            </div>
                            <div className="social">
                                <p>SOCIAL</p>
                                <div className="icone-social">
                                <a href="https://www.facebook.com/profile.php?id=100010857341632"><img src={Facebook}></img></a>
                                    <a href="https://twitter.com/impotsmada?lang=fr"><img src={Twitter}></img></a>
                                    <a href="http://www.impots.mg/"><img src={Google}></img></a>
                                    <a href="mailto:impot.ssif.hotline@gmail.com"><img src={Email}></img></a>
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </motion.div>
        </>
    )
}
export default List;