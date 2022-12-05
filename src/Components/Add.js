
import React, { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Give1 from '../image/give1.png'
import Give2 from '../image/give2.png'
import Give3 from '../image/give3.png'
import Give4 from '../image/give4.png'
// import Trace from '../image/trace.png'

export default function Add(){
    // const [isi_daty, setIsi_daty] = useState()
    // const setdate_isi = new Date(isi_daty)
    let history = useNavigate(); //use navigate on previous
    const {Nif} =  useParams();
    const [infoisi,setInfoisi] = useState( {
         nif:"",
         anarana_feno:"",
         cin:"",
         daty_androany:"",
         anarana_entana:"",
         vidina_entana:"0",
         isany:"1",
         daty_nividianana:"",
         isi_aloha : "",
         charge : ""
    })
    const setdate_isi = new Date(infoisi.daty_androany)
    const mois_isi = setdate_isi.getMonth() + 1   
    var Limit_Date = 15
    var Limit_Mouth = setdate_isi.getMonth() + 2
    var Limit_Year = setdate_isi.getFullYear()
    var deadLine = "01" + "/" + "01" + "/" + "0001"
    if(infoisi.daty_androany){
        if(mois_isi == 12){
            Limit_Mouth = 1
            Limit_Year = Limit_Year + 1
            deadLine = Limit_Date + "/" + Limit_Mouth + "/" + Limit_Year
        }else{
            deadLine = Limit_Date + "/" + Limit_Mouth + "/" + Limit_Year
        }
    }
    //**************** CALCULE ISI ********************************* */
    var Net_a_payer = 0
    var Totaly_volanao = 0
    var prix = infoisi.vidina_entana
    var nombre = infoisi.isany
    if (infoisi.isany && infoisi.vidina_entana){
        Net_a_payer = (prix*nombre*5)/100
        Totaly_volanao = prix*nombre
        console.log(Net_a_payer);
    }

    //*****************DEFAULT CURRENT DATE********************************************* */
    // const toDay= new Date();
    

    const {nif,anarana_feno,cin,daty_androany,anarana_entana,vidina_entana,isany,daty_nividianana} = infoisi
    const handleChange =(e)=>{
        console.log(e.target.value)

        setInfoisi({...infoisi,[e.target.name] : e.target.value})        
    }

    const submitForm = async(e)=>{
        e.preventDefault();
        console.log(infoisi)       


     await axios.post("http://localhost/ISI_online/AddIsi.php?Nif="+Nif,infoisi)
        .then((result) => {
          console.log(result);
          if(result.status == 201){
            alert("Tontosa ny fanambarana ISI nataonao!!!")
             history(`/List/${infoisi.nif}`);
             
          }
        else{   
          /*alert(result.data.status) ;     
          alert("There is a problem for adding,please try again");*/
          alert("Diso ny NIF nampidirinao!!!")
        }   
 
    });
    }
    // mampiseho n reultats ISI
    useEffect(()=>{
        loadUsers();
    },[]);

    // const loadUsers = async ()=>{
    //     const result = await axios.get("http://localhost/ISI_online/ListIsi.php");
    //     //console.log(result.data);
    //      setInfoisi(result.data); 
    //      console.log(typeof(result.data));   
    //    };
    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost/ISI_online/ViewAdd.php?Nif="+Nif);
         //console.log(result.data);
         console.log(result.data.nif)
         setInfoisi(result.data); 
         console.log(typeof(result.data));   
    }

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
                                <input id = "nif" className="input-text" required="required" type="number" name="nif" 
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
                                <input id = "cin" className="input-text" required="required" type="number" name="cin"
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
                                <input id = "price" className="input-text" required="required" type="number" name="vidina_entana"
                                 value={vidina_entana} onChange = {e => handleChange(e)}
                                />
                                <label for="price" className="label">Ny vidiny (Ariary)</label>
                            </div>
                            <div className="form-field">
                                <input id = "number" className="input-text" required="required" type="number" name="isany"
                                 value={isany} onChange = {e => handleChange(e)}
                                />
                                <label for="price" className="label">Ny isany</label>
                            </div>
                            <div className="form-field">
                                <input id = "date2" className="input-text" required="required" type="date" name="daty_nividianana"
                                  value={daty_nividianana} onChange = {e => handleChange(e)}
                                />
                                <label for="date2" className="label">Daty nividianana ny entana</label>
                            </div>
                            <div className="form-field">
                                <input type="submit" className="btn4" name="submit" value="Add"/>
                            </div>
                        </div>
                    </div>
                    </form>   
                </section>
                <div className="picture">                   
                    <div className="container-give1 floating1">
                        <img src={Give1} id='give1'/>
                    </div>
                    <div className="container-give2 floating2">
                        <img src={Give2} id='give2'/>
                    </div>
                    <div className="container-give3 floating2">
                        <img src={Give3} id='give3'/>
                    </div>
                    <div className="container-give4 floating1">
                        <img src={Give4} id='give4'/>
                    </div>
                </div>
 
                {/* ************************************************************ */}
                <div className="payer">
                    <div className="Pay">
                        <table className="tableau">
                            <thead>
                                <tr>
                                    <th>Totalin'ny volanao (Ariary)</th>
                                    <th>Ny 5% miala aminy (Ariary)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{Totaly_volanao}</td>
                                    <td>{Net_a_payer}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="Vola_aloha">
                            <thead>
                                <tr>
                                    <th>Vola aloa (Ariary)</th>
                                    <th>Daty farary fandoavana azy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{Net_a_payer}</td>
                                    <td>{deadLine}</td>
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