import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
import Add from '../image/add.png'
import Search from '../image/search.png'
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'


 function List(){
     let navigate= useNavigate();
    function handleClick() {
        navigate('/:nif/Add')
    }
        const [infoisi,setInfoisi] = useState([]);
        const [chercher,setChercher] = useState("");
        const handleChange =(e)=>{
            //setSear({...sear,[e.target.name] : e.target.value})
            
            let value = e.target.value;
            setChercher(value);
         }

        useEffect(()=>{
            loadUsers();
        },
        [] 
        );
    
         const loadUsers = async ()=>{
         const result = await axios.get("http://localhost/ISI_online/ListIsi.php");
         //console.log(result.data);
          setInfoisi(result.data); 
          console.log(typeof(result.data));   
        };
        console.log(infoisi);
    

    
    return (
        <>
            <body className="bodyList">
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
                    <div className="info">
                        {infoisi.map(infoisi=>{ return ( 
                            <div>                                          
                                <div className="infoname">
                                    <p id="nif">NIF: <b>{infoisi.nif}</b></p>
                                    <p id="anarana">Anarana feno:<b> {infoisi.anarana_feno}</b></p>
                                </div>
                            

                                <div className="add">
                                    <img src={Add} onClick={handleClick}/>
                                </div>
                            </div>
                        )})}


                        <div className="search">
                            <input type="texte" placeholder="Date"
                             onChange = {handleChange}
                             />
                            <img src={Search} />
                        </div>

                           
                    </div>
                    
                    <div className="table">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>Laharana</th>
                                    <th>Anaran'ny entana</th>
                                    <th>Vidiny (Ariary)</th>
                                    <th>Ny isany</th>
                                    <th>Daty novidianana azy</th>
                                    <th>Daty nisoratana ISI</th>
                                    <th>Vola aloha (Ariary)</th>
                                    <th>sazy</th>
                                    <th>Fanamarihana</th>
                                </tr>
                            </thead>
                            <tbody>

                           
                    {infoisi.filter((infoisi)=>{
                return ( infoisi.laharana.includes(chercher) || infoisi.anarana_entana.includes(chercher) ||
                infoisi.daty_nividianana.includes(chercher) || infoisi.daty_androany.includes(chercher)  )            
                }).map(infoisi=>{ return (                           
                               <tr>
                                    <td>{infoisi.laharana}</td>
                                    <td>{infoisi.anarana_entana}</td>
                                    <td>{infoisi.vidina_entana}</td>
                                    <td>{infoisi.isany}</td>
                                    <td>{infoisi.daty_androany}</td>
                                    <td>{infoisi.daty_nividianana}</td>
                                    <td>{infoisi.vola_aloa}</td>
                                    <td>0</td>
                                    <td>tsy voaloha</td>
                                </tr>                             
                           )})}                                                          
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>
        </>
    )
}

export default List;