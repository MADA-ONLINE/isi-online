import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Search from '../image/search.png'
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'


 function ListPaiement(){
    const {nif} =  useParams();
    // let navigate= useNavigate();
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
    // useEffect(()=>{
    //     loadUsers();
    // },[]);
    // useEffect(()=>{
    //     loadUser();
    // },[] );
    // const loadUsers = async ()=>{
    //     const result = await axios.get("http://localhost/ISI_online/ListIsi.php?nif="+nif);
    //     //console.log(result.data);
    //     setInfoisi(result.data); 
    //     console.log(typeof(result.data) + " ny result");
    // };
    // const loadUser = async ()=>{
    //     const result_1 = await axios.get("http://localhost/ISI_online/ViewNif.php?nif="+nif);
    //         //console.log(result.data);
    //     setInfoisi_1(result_1.data);
    //     console.log(typeof(result_1.data) + " ny result_1");   
    // }
    console.log(infoisi);   
    return (
        <>
            <body className="bodyList">
                <div className="All_pay">
                    <nav className='nav1_pay'>
                        <div className='sary floating1'>
                            <img src={headImage} id="headImage2"/>
                        </div>
                        <div className='saina3'>
                            <img src={Saina1} id="saina4"/>
                            <img src={DGI} id="DGI3"/>
                        </div>
                        <p id='isiOnline2'>isi-online</p>
                    </nav>
                    <div className="info_pay">
                        {/* {infoisi_1.map(infoisi_1=>{ return (  */}
                            <div>                                          
                                <div className="infoname_pay">
                                    <p id="nif">Totaly ISI (Ariary): <b>{infoisi_1.totaly_isi}</b></p>
                                </div>                  
                            </div>
                        {/* )})} */}
                        <div className="search">
                            <input type="texte" placeholder="Tadiavo"
                             onChange = {handleChange}
                             />
                            <img src={Search} />
                        </div>                         
                    </div>                   
                    <div className="table">
                        <table className="content-table_pay">
                            <thead>
                                <tr>
                                    <th>NIF</th>
                                    <th>Anarana feno</th>
                                    <th>Anaran'ny entana</th>
                                    <th>Ny isany</th>
                                    <th>Daty nisoratana ISI</th>
                                    <th>Daty nandoavam-bola</th>
                                    <th>Vola haloa (Ariary)</th>
                                    <th>Vola voaloa (Ariary)</th>
                                </tr>
                            </thead>
                            <tbody>                           
                                {infoisi.filter((infoisi)=>{
                                    return (infoisi.anarana_entana.includes(chercher) 
                                        ||  infoisi.daty_nividianana.includes(chercher) 
                                        ||  infoisi.daty_isi.includes(chercher) 
                                        ||  infoisi.daty_androany.includes(chercher))            
                                    }).map(infoisi=>{ return (                           
                                        <tr>
                                            <td>{infoisi.nif}</td>
                                            <td>{infoisi.Nom_prenom}</td>
                                            <td>{infoisi.anarana_entana}</td>
                                            <td>{infoisi.isany}</td>
                                            <td>{infoisi.daty_isi}</td>
                                            <td>{infoisi.daty_andoavambola}</td>
                                            <td>{infoisi.vola_aloa}</td>                                           
                                            <td>{infoisi.vola_voaloa}</td>                                           
                                        </tr>                             
                                    )})
                                }                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>
        </>
    )
}
export default ListPaiement;