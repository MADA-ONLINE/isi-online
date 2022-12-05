import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Search from '../image/search.png'
import Pay from '../image/Pay.png'
import Edit from '../image/Edit.png'
import Delete from '../image/Delete.png'
import Pdf from '../image/Pdf.png'
import Facebook from '../image/facebook.png'
import Email from '../image/email.png'
import Google from '../image/google_plus.png'
import Twitter from '../image/Twitter.png'


export default function ListAdmin(){
    let navigate = useNavigate();
    // function handleClick() {
    //     navigate('/:nif/Edit/')
    // }
    // const handleClick = (laharana)=>{
    //     navigate(`/Edit/${infoisi.laharana}`)
    // }
    function ClickPaiement() {
        navigate('/:nif/Paiement')
    }
    function ClickListPaiement() {
        navigate('/ListPaiement')
    }
    const [infoisi,setInfoisi] = useState([]);
//*****************RECHERCHE*****************************************************************************/
    const [chercher,setChercher] = useState("");
    const handleChange =(e)=>{
        //setSear({...sear,[e.target.name] : e.target.value})        
        let value = e.target.value;
        setChercher(value);
     }

    useEffect(()=>{
        loadUsers();
    },[]);

     const loadUsers = async ()=>{
     const result = await axios.get("http://localhost/ISI_online/Listadmin.php");
     //console.log(result.data);
      setInfoisi(result.data); 
      console.log(typeof(result.data));   
    };
    console.log(infoisi);
//*************DELETE************************************************************************************/
    const deleteUser = (laharana) =>{
        axios.delete("http://localhost/ISI_online/DeleteIsi.php",{ data : { laharana: laharana} })
        .then((result)=>{
            loadUsers();
        }).catch(()=>{
            alert('error in the code');
        })

    }


    return(
        <>
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
                    <div className="info">
                        <div className="search">
                                <input type="texte" placeholder="Date/Num"
                                 onChange = {handleChange}
                                 />
                                <img src={Search} />
                        </div>
                    </div>
                    <div className="table">
                        <table className="content-tablee">
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
                                    <th>vola voaloha (Ariary) </th>
                                    <th>Ampiasao</th>
                                </tr>
                            </thead>
                            <tbody>
     {/* misy link ato************************ */}
                                {infoisi.filter((infoisi)=>{
                                    return ( infoisi.nif.includes(chercher) || infoisi.anarana_feno.includes(chercher) || infoisi.anarana_entana.includes(chercher) ||
                                    infoisi.daty_nividianana.includes(chercher) || infoisi.daty_androany.includes(chercher)  )            
                                    }).map(infoisi=>{ return ( 
                                        <tr>
                                            <td>{infoisi.nif}</td>
                                            <td>{infoisi.anarana_feno}</td>
                                            <td>{infoisi.anarana_entana}</td>
                                            <td>{infoisi.vidina_entana}</td>
                                            <td>{infoisi.isany}</td>
                                            <td>{infoisi.daty_androany}</td>
                                            <td>{infoisi.daty_nividianana}</td>
                                            <td>{infoisi.daty_fandoavana}</td>
                                            <td>{infoisi.vola_aloa}</td> 
                                            <td>{infoisi.vola_voaloha}</td>

                                            <td  id="ovaina">
                                                <Link className ="Link" to={`/Edit/${infoisi.laharana}`}>
                                                    <img src={Edit}/>
                                                </Link>
                                                <img src={Delete} onClick={() => deleteUser(infoisi.laharana)}/>
                                                <Link className ="Link" to={`/Paiement/${infoisi.laharana}`}>
                                                    <img src={Pay}/>
                                                </Link>
                                                <img src={Pdf} onClick={ClickListPaiement}/>
                                                

                                            </td>
                                        </tr>
                                    )
                                })}                           
                            </tbody>
                        </table>
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
        </>
    )
}