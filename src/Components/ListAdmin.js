import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Search from '../image/search.png'


export default function ListAdmin(){
    let navigate = useNavigate();
    function handleClick() {
        navigate('/:nif/Edit')
    }
    const [infoisi,setInfoisi] = useState([]);

    useEffect(()=>{
        loadUsers();
    },
    [] 
    );

     const loadUsers = async ()=>{
     const result = await axios.get("http://localhost/ISI_online/Listadmin.php");
     //console.log(result.data);
      setInfoisi(result.data); 
      console.log(typeof(result.data));   
    };
    console.log(infoisi);


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
                                <input type="texte" placeholder="Date/Num"/>
                                <img src={Search} />
                        </div>
                    </div>
                    <div className="table">
                        <table className="content-tablee">
                            <thead>
                                <tr>
                                    <th>nif</th>
                                    <th>Anarana</th>
                                    <th>anarana_entana</th>
                                    <th>Vidiny (Ariary)</th>
                                    <th>Daty novidianana azy</th>
                                    <th>Daty nisoratana ISI</th>
                                    <th>Vola aloha (Ariary)</th>
                                    <th>Fanamarihana</th>
                                    <th>Ovaina</th>
                                </tr>
                            </thead>
                            {infoisi.map(infoisi=>{ return ( 
                            <tbody>
                                <tr>
                                    <td>{infoisi.nif}</td>
                                    <td>{infoisi.anarana_feno}</td>
                                    <td>{infoisi.anarana_entana}</td>
                                    <td>{infoisi.vidina_entana}</td>
                                    <td>{infoisi.daty_androany}</td>
                                    <td>{infoisi.daty_nividianana}</td>
                                    <td>{infoisi.vola_aloa}</td>
                                    <td>Voaloha</td>
                                    <td id="ovaina" onClick={handleClick}>Ovaina</td>
                                </tr>                            
                            </tbody>
                            )})}

                        </table>
                    </div>
        </>
    )
}