
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
// const date1 = document.getElementById("date1").value
// const date2 = document.getElementById("date2").value
// var bouton = document.getElementById('bnt4')
// bouton.addEventListener('click', Paiement)
export default function Paiement(){
    
    const [infoisi,setInfoisi] = useState( {
        daty_androany:"",
        vidina_entana:"",
        daty_nividianana:"",
        isi_aloha : "",
        charge : ""
   })
   const {daty_androany,vidina_entana,daty_nividianana,isi_aloha,charge}= infoisi
   const handleChange =(e)=>{
        let valeur = e.target.value; 
        setInfoisi(valeur);
        console.log(valeur);
    }



    // const {nif,anarana_feno,cin,daty_androany,anarana_entana,vidina_entana,isany,daty_nividianana}= infoisi
    // var Date_1 = new Date(date1)
    // var Date_2 = new Date(date2)

    // var Limit_Date_1 = 15
    // var Limit_Mouth_1 = Date_1.getMonth() + 2
    // var Limit_Year_1 = Date_1.getFullYear()
    
    // var Date_2 = Date_2.getDate() + 1
    // var Mouth_2 = Date_2.getMonth() + 1
    // var Year_2 = Date_2.getFullYear()

    // alert("Alohan'ny " + Limit_Date_1 + '/' + Limit_Mouth_1 + '/' + Limit_Year_1 + " ianao no mila mandoa ny hetra ISI")

    //     if(Mouth_2 < Limit_Mouth_1 && Year_2 <= Limit_Year_1){
    //         if(Date_2 < 31){
    //             alert("Tsy misy sazy")
    //         }
    //     }else if(Mouth_2 == Limit_Mouth_1 && Year_2 <= Limit_Year_1){
    //         if(Date_2 < 15){
    //             alert("Tsy misy sazy")
    //         }else{
    //             alert("⚠️Voasazy ianao!!!!")
    //         }
    //     }else{
    //         alert("⚠️Voasazy ianao!!!!")
    //     }
    const submitForm = async(e)=>{
        e.preventDefault();
        // console.log(infoisi)       
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
                                <input id = "nif" className="input-text" required="required" type="text" name="nif" 
                                //   value={nif} onChange = {e => handleChange(e) }
                                />
                                <label for="nif" className="label">NIF</label>
                            </div>
                            <div className="form-field">
                                <input id = "name2" className="input-text" required="required" type="text" name="anarana_entana"
                                //   value={anarana_entana} onChange = {e => handleChange(e)}
                                />
                                <label for="name2" className="label">Anaran'ny entana novidiana</label>
                            </div>
                            <div className="form-field">
                                <input id = "date1" className="input-text" required="required" type="date" name="daty_androany"
                                  value={daty_androany} onChange = {e => handleChange(e)}
                                />
                                <label for="date1" className="label">Daty nisoratana ISI</label>
                            </div>
                            <div className="form-field">
                                <input id = "date2" className="input-text" required="required" type="date" name="daty_androany"
                                   value={daty_androany} onChange = {e => handleChange(e)}
                                />
                                <label for="date2" className="label">Daty andoavam-bola</label>
                            </div>
                            <div className="form-field">
                                <input id = "price" className="input-text" required="required" type="text" name="vidina_entana"
                                   value={vidina_entana} onChange = {e => handleChange(e)}
                                />
                                <label for="price" className="label">Vola ISI (Ariary)</label>
                            </div>
                            <div className="bouton">
                                <div className="form-field">
                                    <input type="button" className="btn4" id="btn4" name="submit" value="Kajiana"/>
                                </div>
                                <div className="form-field">
                                    <input type="submit" className="btn5" id="btn5" name="submit" value="Aloa"/>
                                </div>
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
                    <div className="Paiement">
                        <p>⚠️ Sazy: 10%</p>
                        <p>Miampy: 20.000 ariary</p>
                        <p className="Net">Vola haloa: 100.000 ariary</p>
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