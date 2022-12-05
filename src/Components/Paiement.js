
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

export default function Paiement(){

    let history = useNavigate();
    const {laharana} =  useParams();
     
    const [infoisi,setInfoisi] = useState( {
      
        nif:"",
        anarana_entana:"",
        daty_androany:"",
        daty_fandoavana:"",
        vola_aloa:""          
   })


   useEffect(()=>{
    loadUsers();
   },[])

   const {nif,anarana_entana,daty_androany,daty_fandoavana,vola_aloa}= infoisi
   const handleChange =(e)=>{
    setInfoisi({...infoisi,[e.target.name] : e.target.value})        
}
const loadUsers = async ()=>{
    const result = await axios.get("http://localhost/ISI_online/ViewIsi.php?laharana="+laharana);
     //console.log(result.data);
     setInfoisi(result.data); 
     console.log(typeof(result.data));   
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
    const updateForm = async(e)=>{
        e.preventDefault();
        //console.log(student)       
    
     await axios.put("http://localhost/ISI_online/payement.php",infoisi)
        .then((result) => {
          console.log(result);
          if(result.status == 201){
            alert("⚠️ voaloha ny volanao ⚠️");
             history(`/ListAdmin`);
             
          }
        else{   
              
          alert("There is a problem for adding,please try again");
        }   
    })
}
    
    // const [isi_daty, setIsi_daty] = useState()
    // const [pay_daty, setPay_daty] = useState()
    // const [isi_vola, setIsi_vola] = useState()

    const setdate_isi = new Date(infoisi.daty_androany)
    const setdate_pay = new Date(infoisi.daty_fandoavana)

    const jour_isi = setdate_isi.getDate() + 1
    const mois_isi = setdate_isi.getMonth() + 1
    const annee_isi = setdate_isi.getFullYear()
    console.log(jour_isi + "/" + mois_isi + "/" + annee_isi + ": io ny daty ISI")
    var Limit_Date = 15
    var Limit_Mouth = setdate_isi.getMonth() + 2
    var Limit_Year = setdate_isi.getFullYear()
    var jour_pay = setdate_pay.getDate() + 1
    var mois_pay = setdate_pay.getMonth() + 1
    var annee_pay = setdate_pay.getFullYear()

    // ***********CONDITION SAZY + CALCULE SAZY******************************************************************
    var msg = "Tsy misy sazy"
    var penalite_retard = 0
    var net_a_payer = 0
    console.log(jour_pay + "/" + mois_pay + "/" + annee_pay + ": io ny daty PAY")
    console.log(typeof(infoisi.vola_aloa))
    if(mois_isi == 12){
        Limit_Mouth = 1
        Limit_Year = Limit_Year + 1
        if(annee_pay < Limit_Year){
            var msg = "Tsy misy sazy"
            penalite_retard = 0
            net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
        }else if(annee_pay == Limit_Year && mois_pay == Limit_Mouth && jour_pay <= Limit_Date){
            msg = "Tsy misy sazy"
            penalite_retard = 0
            net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
        }else{
            msg = "Misy sazy 10%"
            var sazy = 10
            penalite_retard = (infoisi.vola_aloa*sazy)/100
            net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
        }
    }
    else if(mois_isi < 12){
        if(mois_pay < Limit_Mouth && annee_pay <= Limit_Year){
            if(jour_pay < 31){
                msg = "Tsy misy sazy"
                penalite_retard = 0
                net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
            }
        }else if(mois_pay == Limit_Mouth && annee_pay <= Limit_Year){
            if(jour_pay < 15){
                msg = "Tsy misy sazy"
                penalite_retard = 0
                net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
            }else{
                msg = "Misy sazy 10%"
                var sazy = 10
                penalite_retard = (infoisi.vola_aloa*sazy)/100
                net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
            }
        }else{
            msg = "Misy sazy 10%"
            var sazy = 10
            penalite_retard = (infoisi.vola_aloa*sazy)/100
            net_a_payer = (Number(infoisi.vola_aloa)+penalite_retard)
        }
    }
    // const submitForm = async(e)=>{
    //     e.preventDefault();      

    // }
    
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
                <form onSubmit={e=>updateForm(e)}>
                    <div className="container">
                        <div className="contact-form row">
                            <div className="form-field">
                                <input id = "nif" className="input-text" required="required" type="text" name="nifd" 
                                  value={nif} onChange = {e => handleChange(e) }
                                />
                                <label for="nif" className="label">NIF</label>
                            </div>
                            <div className="form-field">
                                <input id = "name2" className="input-text" required="required" type="text" name="anarana_entanas"
                                  value={anarana_entana} onChange = {e => handleChange(e)}
                                />
                                <label for="name2" className="label">Anaran'ny entana novidiana</label>
                            </div>
                            <div className="form-field">

                                <input id = "date1" className="input-text" required="required" type="date" name="daty_androanys"
                                  value={daty_androany} onChange = {e => handleChange(e)}

                                // // <input id = "date1" className="input-text" required="required" type="date" name="daty_isi"
                                // //     onChange = {e => setIsi_daty(e.target.value)}
                                // //     // value={daty_isi} onChange = {e => handleChange(e)}

                                />
                                <label for="date1" className="label">Daty nisoratana ISI</label>
                            </div>
                            <div className="form-field">

                                <input id = "date2" className="input-text" required="required" type="date" name="daty_fandoavana"
                                   value={daty_fandoavana} onChange = {e => handleChange(e)}

                                // <input id = "date2" className="input-text" required="required" type="date" name="daty_paiement"
                                //     onChange = {e => setPay_daty(e.target.value)}

                                />
                                <label for="date2" className="label">Daty andoavam-bola</label>
                            </div>
                            <div className="form-field">

                                <input id = "price" className="input-text" required="required" type="text" name="vola_aloah"
                                   value={infoisi.vola_aloa} onChange = {e => handleChange(e)}

                                // <input id = "price" className="input-text" required="required" type="text" name="vidina_entana"
                                //     onChange = {e => setIsi_vola(e.target.value)}
                                //     // onChange = {e => handleChange(e)}

                                />
                                <label for="price" className="label">Vola ISI (Ariary)</label>
                            </div>
                            <div className="bouton">
                                <div className="form-field">
                                    <input type="submit" className="btn4" id="btn4" name="submit" value="Aloa"/>
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
                        <p>{msg}</p>
                        <p>Miampy: {penalite_retard} Ariary</p>
                        <p className="Net">Vola haloa: {net_a_payer} Ariary</p>
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