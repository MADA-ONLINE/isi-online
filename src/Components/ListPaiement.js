import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {Modal,Button} from "react-bootstrap"

import { CSVLink } from "react-csv";

import axios from "axios";
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Search from '../image/search.png'
import Pay from '../image/Pay.png'
import Edit from '../image/Edit.png'
import Facebook from '../image/facebook.png'
import Email from '../image/email.png'
import Google from '../image/google_plus.png'
import Twitter from '../image/Twitter.png'
import { motion } from 'framer-motion'
import Logout from '../image/logout.png'
import Back from '../image/back.jpg'



export default function ListPaiement(){
    let navigate = useNavigate();
    function Logout_List_Admin() {
        navigate('/LoginAdmin')
    }
    function ClickListPaiement() {
        navigate('/ListPaiement')
    }
    function ClickListAdmin() {
        navigate('/ListAdmin')
    }
    const [infoisi,setInfoisi] = useState([]);
//*****************RECHERCHE*****************************************************************************/
    const [chercher,setChercher] = useState("");
    const [show,setShow] = useState(false);
    const [deleteId,setDeleteId] = useState("");
    const handleChange =(e)=>{
        let value = e.target.value;
        setChercher(value);
     }

    useEffect(()=>{
        loadUsers();
    },[]);

     const loadUsers = async ()=>{
     const result = await axios.get("http://localhost/ISI_online/ListPayement.php");
     //console.log(result.data);
      setInfoisi(result.data); 
      console.log(typeof(result.data));   
    };
    console.log(infoisi);
//*************DELETE************************************************************************************/
    const handleclickdeleteUser = (laharana) =>{
        console.log(laharana);
        setDeleteId(laharana);
        setShow(true)
        // axios.delete("http://localhost/ISI_online/DeleteIsi.php",{ data : { laharana: laharana} })
        // .then((result)=>{
        //     loadUsers();
        // }).catch(()=>{
        //     alert('error in the code');
        // })
    }
    const handleClose = () =>{
        setShow(false)
      }
    const handleDelete = () =>{
        const laharana = deleteId;
        console.log(laharana);
         axios.delete("http://localhost/ISI_online/DeleteIsi.php",{ data : { laharana: laharana} })
        .then((result)=>{
            loadUsers();
        }).catch(()=>{
            alert('error in the code');
        })
        setShow(false);

    }
         

    // }
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
   

    return(
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
                        <nav className='navv'>
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
                            <p>Lisitr'ireo ISI Voaloha</p>
                            <hr></hr>
                        </div>
                        <div className="info">
                            <div className="deconnexion_List_Admin">
                                <img src={Logout} onClick={Logout_List_Admin}/>
                                <p>D??connexion</p>
                                <CSVLink data = {infoisi} className ="btn btn-success mb-3" filename="Isi">Export</CSVLink>
                            </div>
                            <div className="search_Admin">
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

                     <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                             <Modal.Title>Famafana</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>??????Vonona ny hamafa ve ianao!???????</Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleDelete}>
                                ENY
                            </Button>
                             <Button variant="primary" onClick={handleClose}>
                                TSIA
                            </Button>
                        </Modal.Footer>
                    </Modal>
                            <div className="table_Admin">
                                <table className="content-tablee_Admin">
                                    <thead>
                                        <tr>
                                            <th>Nif</th>
                                            <th>Anarana feno</th>
                                            <th>Anaranan'ny entana</th>
                                            <th>Vidiny (Ariary)</th>
                                            <th>Ny isany</th>
                                            <th>Daty novidianana azy</th>
                                            <th>Daty nisoratana ISI</th>
                                            <th>Daty nandoavana ISI</th>
                                            <th>Vola haloa (Ariary)</th>
                                            <th>Sazy (Ariary)</th>
                                            <th>vola voaloha (Ariary) </th>
                                            <th>Laharan'ny rosia</th>
                                            <th>Fomba andoavam-bola</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                {/* misy link ato************************ */}
                                        {infoisi.filter((infoisi)=>{
                                            return ( infoisi.nif.includes(chercher) || infoisi.anarana_feno.toLowerCase().includes(chercher) || infoisi.anarana_entana.toLowerCase().includes(chercher) ||
                                            infoisi.daty_nividianana.includes(chercher) || infoisi.daty_androany.includes(chercher) || infoisi.daty_fandoavana.includes(chercher) || infoisi.type.toLowerCase().includes(chercher))            
                                            }).map(infoisi=>{ return ( 
                                                <tr>
                                                    <td>{infoisi.nif}</td>
                                                    <td>{infoisi.anarana_feno}</td>
                                                    <td>{infoisi.anarana_entana}</td>
                                                    <td>{infoisi.vidina_entana}</td>
                                                    <td>{infoisi.isany}</td>
                                                    <td>{infoisi.daty_nividianana}</td>
                                                    <td>{infoisi.daty_androany}</td>
                                                    <td>{infoisi.daty_fandoavana}</td>
                                                    <td>{infoisi.vola_aloa}</td> 
                                                    <td>{infoisi.sazy}</td> 
                                                    <td>{infoisi.vola_voaloha}</td>
                                                    <td>{infoisi.bordereau}</td>
                                                    <td>{infoisi.type}</td>
                                                </tr>
                                            )
                                        })}                           
                                    </tbody>
                                </table>
                            </div>
                            <div className="lisitra" onClick={ClickListAdmin}>
                                <p className="lisitra_voaloa_1">Lisitr'ireo tsy nandoa vola rehetra</p>
                            </div>
                        </motion.div>
                        
                        <div className="contact_admin" data-aos="fade-up"
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