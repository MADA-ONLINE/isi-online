
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
        // daty_paiement:"",
        // daty_isi:"",
        isi_aloha : ""
    })
    const [isi_daty, setIsi_daty] = useState()
    const [pay_daty, setPay_daty] = useState()

    const {isi_aloha, daty_isi}= infoisi
    const handleChange =(e)=>{
        let valeur = e.target.value;
        // const val = valeur.split('-');
        setInfoisi(valeur);
        // console.log(val)
        // var date_achat = new Date(valeur)
        // console.log(date_achat.getMonth() + 3);
    }
    // console.log(isi_daty + ": date de déclaration")
    // console.log(pay_daty + ": date de paiement")
    const setdate_isi = new Date(isi_daty)
    const setdate_pay = new Date(pay_daty)
    const jour_isi = setdate_isi.getDate() + 1
    const mois_isi = setdate_isi.getMonth() + 1
    const annee_isi = setdate_isi.getFullYear()
    console.log(jour_isi + "/" + mois_isi + "/" + annee_isi + ": io ny daty ISI")
    // const {nif,anarana_feno,cin,daty_androany,anarana_entana,vidina_entana,isany,daty_nividianana}= infoisi
    // var date_achat = new Date(infoisi.daty_isi)
    // var Date_1 = new Date(date1)
    // var Date_2 = new Date(date2)

    var Limit_Date= 15
    var Limit_Mouth = setdate_isi.getMonth() + 2
    var Limit_Year = setdate_isi.getFullYear()
    var next_Year = setdate_isi.getFullYear() + 1
    // console.log(Limit_Mouth + " ny daty")
    var jour_pay = setdate_pay.getDate() + 1
    var mois_pay = setdate_pay.getMonth() + 1
    var annee_pay = setdate_pay.getFullYear()
    console.log(jour_pay + "/" + mois_pay + "/" + annee_pay + ": io ny daty PAY")
    // alert("Alohan'ny " + Limit_Date_1 + '/' + Limit_Mouth_1 + '/' + Limit_Year_1 + " ianao no mila mandoa ny hetra ISI")
    if(mois_isi == 12){
        Limit_Mouth = 1
        Limit_Year += Limit_Year
        if(annee_pay <= Limit_Year && mois_pay <= Limit_Mouth && jour_pay <= 15){
            var msg = "Tsy misy sazy // mois_isi == 12"
        }else{
            var msg = "Misy sazy 10% // mois_isi == 12"
        }
    }
    else if(mois_isi < 12){
        if(mois_pay < Limit_Mouth && annee_pay <= Limit_Year){
            if(jour_pay < 31){
                // alert("Tsy misy sazy")
                    var msg = "Tsy misy sazy // mois_isi < 12"
            }
        }else if(mois_pay == Limit_Mouth && annee_pay <= Limit_Year){
            if(jour_pay < 15){
                // alert("Tsy misy sazy")
                    var msg = "Tsy misy sazy // mois_isi < 12"
            }else{
                // alert("⚠️Voasazy ianao!!!!")
                    var msg = "Misy sazy 10% // mois_isi < 12"
            }
        }else{
            // alert("⚠️Voasazy ianao!!!!")
                var msg = "Misy sazy 10% // mois_isi < 12"
        }
    }
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
                                <input id = "date1" className="input-text" required="required" type="date" name="daty_isi"
                                    onChange = {e => setIsi_daty(e.target.value)}
                                    // value={daty_isi} onChange = {e => handleChange(e)}
                                />
                                <label for="date1" className="label">Daty nisoratana ISI</label>
                            </div>
                            <div className="form-field">
                                <input id = "date2" className="input-text" required="required" type="date" name="daty_paiement"
                                    onChange = {e => setPay_daty(e.target.value)}
                                />
                                <label for="date2" className="label">Daty andoavam-bola</label>
                            </div>
                            <div className="form-field">
                                <input id = "price" className="input-text" required="required" type="text" name="vidina_entana"
                                    value={isi_aloha} onChange = {e => handleChange(e)}
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
                        <p>⚠️ {msg}</p>
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