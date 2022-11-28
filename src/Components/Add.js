
import React, { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Give1 from '../image/give1.png'
import Give2 from '../image/give2.png'
import Give3 from '../image/give3.png'
import Give4 from '../image/give4.png'
// import Trace from '../image/trace.png'

export default function Add(){
      
    let history = useNavigate(); //use navigate on previous
    const [infoisi,setInfoisi] = useState( {
         nif:"",
         anarana_feno:"",
         cin:"",
         daty_androany:"",
         anarana_entana:"",
         vidina_entana:"",
         daty_nividianana:"",
         isi_aloha : "",
         charge : ""
    })
    
    const {nif,anarana_feno,cin,daty_androany,anarana_entana,vidina_entana,daty_nividianana}= infoisi
    const handleChange =(e)=>{
        setInfoisi({...infoisi,[e.target.name] : e.target.value})
    }

    const submitForm = async(e)=>{
        e.preventDefault();
        console.log(infoisi)       

     await axios.post("http://localhost/ISI_online/AddIsi.php",infoisi)
        .then((result) => {
          console.log(result);
          if(result.data.status == 'valid'){
             history(`/List`);
             
          }
        else{   
          /*alert(result.data.status) ;     
          alert("There is a problem for adding,please try again");*/
          history(`/List`);
        }   
    });
    }
    // mampiseho n reultats ISI
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

    return(
        <>
            <body className="BodyAdd">
                
                {/* <img scr={Trace} id='trace'/> */}
                <nav className='nav2'>
                    <div className='sary floating1'>
                        <img src={headImage} id="headImage3"/>
                    </div>
                    <div className='saina5'>
                        <img src={Saina1} id="saina6"/>
                        <img src={DGI} id="DGI4"/>
                    </div>
                    <p id='isiOnline3'>isi-online</p>
                </nav>

                
                <section className="get_in_touch">
                <form onSubmit={e=>submitForm(e)}>
                    <div className="container">
                        <div className="contact-form row">
                            <div className="form-field">
                                <input id = "nif" className="input-text" required="required" type="text" name="nif" 
                                  value={nif} onChange = {e => handleChange(e) }
                                />
                                <label for="nif" className="label">NIF</label>
                            </div>
                            <div className="form-field">
                                <input id = "name1" className="input-text" required="required" type="text" name="anarana_feno"
                                  value={anarana_feno} onChange = {e => handleChange(e)}
                                />
                                <label for="name1" className="label">Anarana feno</label>
                            </div>
                            <div className="form-field">
                                <input id = "cin" className="input-text" required="required" type="text" name="cin"
                                  value={cin} onChange = {e => handleChange(e)}
                                />
                                <label for="cin" className="label">Laharan'ny kara-panondro</label>
                            </div>
                            <div className="form-field">
                                <input id = "date1" className="input-text" required="required" type="date" name="daty_androany"
                                  value={daty_androany} onChange = {e => handleChange(e)}
                                />
                                <label for="date1" className="label">Daty androany</label>
                            </div>
                            <div className="form-field">
                                <input id = "name2" className="input-text" required="required" type="text" name="anarana_entana"
                                  value={anarana_entana} onChange = {e => handleChange(e)}
                                />
                                <label for="name2" className="label">Anaran'ny entana novidiana</label>
                            </div>
                            <div className="form-field">
                                <input id = "price" className="input-text" required="required" type="text" name="vidina_entana"
                                 value={vidina_entana} onChange = {e => handleChange(e)}
                                />
                                <label for="price" className="label">Ny vidiny (Ariary)</label>
                            </div>
                            <div className="form-field">
                                <input id = "date2" className="input-text" required="required" type="date" name="daty_nividianana"
                                  value={daty_nividianana} onChange = {e => handleChange(e)}
                                />
                                <label for="date2" className="label">Daty nividianana ny entana</label>
                            </div>
                            <div className="form-field">
                            <input type="submit" className="btn btn-Warning" name="submit" value="Add"/>
                            </div>
                        </div>
                    </div>
                    </form>   
                </section>
 
                {/* ************************************************************ */}
                <div className="payer">
                    <div className="Pay">
                        <table className="tableau">
                            <thead>
                                <tr>
                                    <th>Ny volanao (Ariary)</th>
                                    <th>Ny 5% miala aminy (Ariary)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>80.000</td>
                                    <td>4.000</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="Vola_aloha">
                            <thead>
                                <tr>
                                    <th>Vola aloa (Ariary)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* ************************************************************* */}
                <footer className="footer2">
                    <div className="copyLogo2">
                        <p id="copyright2">Copyright 2022 by Mirantsoa & Rija Andria</p>
                    </div>
                </footer>
            </body>
            
        </>
    )
}