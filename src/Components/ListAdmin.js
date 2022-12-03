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
                                    <th>Vola haloa (Ariary)</th>
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
                                        <td>{infoisi.vola_aloa}</td>
                                        <td  id="ovaina">
                                            <Link className ="Link" to={`/Edit/${infoisi.laharana}`}>
                                                <img src={Edit}/>
                                            </Link>
                                            <img src={Pay} onClick={ClickPaiement}/>
                                            <img src={Pdf} onClick={ClickListPaiement}/>
                                            <img src={Delete} onClick={() => deleteUser(infoisi.laharana)}/>
                                        </td>
                                    </tr>                            
                                )})}                           
                            </tbody>

                        </table>
                    </div>
        </>
    )
}