
import React, { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from "react-toastify";
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Give1 from '../image/give1.png'
import Give2 from '../image/give2.png'
import Give3 from '../image/give3.png'
import Give4 from '../image/give4.png'
import Facebook from '../image/facebook.png'
import Email from '../image/email.png'
import Google from '../image/google_plus.png'
import Twitter from '../image/Twitter.png'
import { motion } from 'framer-motion'

export default function Paiement(){

    let history = useNavigate();
    const {laharana} =  useParams();
     
    const [infoisi,setInfoisi] = useState({      
        nif:"",
        anarana_entana:"",
        daty_androany:"",
        daty_fandoavana:"",
        vola_aloa:"",
        mode_pay_esp:"",       
        mode_pay_vir:"" ,
        bordereau:""       
    })
    const [Select, setSelect] = useState()
    useEffect(()=>{
    loadUsers();
    },[])

    const {nif,anarana_entana,daty_androany,daty_fandoavana,vola_aloa,mode_pay_esp,mode_pay_vir}= infoisi
    const handleChange =(e)=>{
        setInfoisi({...infoisi,[e.target.name] : e.target.value})
        // console.log(infoisi.mode_pay_esp)      
    }
    console.log(Select)
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
            toast.success('Tontosa ny fandoavana ny vola!!!',{
                position: toast.POSITION.TOP_LEFT,
                autoClose:2500,
                // innerWidth: 10
            })
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

    const jour_isi = setdate_isi.getDate()
    const mois_isi = setdate_isi.getMonth() + 1
    const annee_isi = setdate_isi.getFullYear()

    var jour_limit = 15
    var Limit_mois_isi = mois_isi + 1
    var Limit_annee_isi = annee_isi

    console.log(jour_limit + "/" + Limit_mois_isi + "/" + Limit_annee_isi + ": io ny daty limit ISI")
   
    var jour_pay = setdate_pay.getDate() 
    console.log(jour_pay)
    var mois_pay = setdate_pay.getMonth() + 1
    var annee_pay = setdate_pay.getFullYear()

    // ***********CONDITION SAZY + CALCULE SAZY******************************************************************
    var message = "Misy sazy"
    var penalite_retard = 0
    var net_a_payer = 0
    var result = mois_pay - mois_isi
    console.log("resultats:"+ result)
    console.log(jour_pay + "/" + mois_pay + "/" + annee_pay + ": io ny daty PAY")
    console.log(typeof(infoisi.vola_aloa))

      if(mois_isi == 12){
         message = "Tsy misy sazy"
         penalite_retard = 0
         net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
    }
    else{
        
        if(result == 0){
            message ="Tsy misy sazy"
            penalite_retard = 0
            net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
        }
        else if(result == 1 && jour_pay <= 15){

             message ="tsy misy sazy"
             penalite_retard = 0
             net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
  
        }
        else{

             
             if(result == 1 && jour_pay > 15){
                    message = "Tara" + " " + result + " volana" + ", " + " misy sazy" + " " + result + "%"
                    penalite_retard = (result*infoisi.vola_aloa)/100
                    net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)                

            }else{  
                    result = result-1
                    message = "Tara" + " " + result + " volana" + ", " + " misy sazy" + " " + result + "%" 
                    penalite_retard = ((result)*(infoisi.vola_aloa))/100
                    net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
                }          
        }
    }
    // if(mois_isi == 12){
    //     "Tsy misy sazy"
    // }
    
    //     if(annee_pay < Limit_Year){
    //         var msg = "Tsy misy sazy"
    //         penalite_retard = 0
    //         net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
    //     }else if(annee_pay == Limit_Year && mois_pay == Limit_Mouth && jour_pay <= Limit_Date){
    //         msg = "Tsy misy sazy"
    //         penalite_retard = 0
    //         net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
    //     }else{
    //         msg = "Misy sazy 10%"
    //         var sazy = 10
    //         penalite_retard = (infoisi.vola_aloa*sazy)/100
    //         net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
    //     }
    // }
    //  if(mois_isi < 12){
    //     if(mois_pay < Limit_Mouth && annee_pay <= Limit_Year){
    //         if(jour_pay < 31){
    //             msg = "Tsy misy sazy"
    //             penalite_retard = 0
    //             net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
    //         }
    //     }else if(mois_pay == Limit_Mouth && annee_pay <= Limit_Year){
    //         if(jour_pay < 15){
    //             msg = "Tsy misy sazy"
    //             penalite_retard = 0
    //             net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
    //         }else{
    //             msg = "Misy sazy 10%"
    //             var sazy = 10
    //             penalite_retard = (infoisi.vola_aloa*sazy)/100
    //             net_a_payer = (Number(infoisi.vola_aloa) + penalite_retard)
    //         }
    //     }else{
    //         msg = "Misy sazy 10%"
    //         var sazy = 10
    //         penalite_retard = (infoisi.vola_aloa*sazy)/100
    //         net_a_payer = (Number(infoisi.vola_aloa)+penalite_retard)
    //     }
    // }
    const submitForm = async(e)=>{
        e.preventDefault();      

    }
    const PageVariants = {
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0
        }
    }
    const PageVariantsForm = {
        in_1: {
            opacity: 1,
            y: 0
        },
        out_1: {
            opacity: 0,
            y: "100%"
        }
    }
    // const PageVariantsPrint = {
    //     in_2: {
    //         opacity: 1,
    //         y: 0
    //     },
    //     out_2: {
    //         opacity: 0,
    //         y: "-200%"
    //     }
    // }
    const PageTransition = {
        type: "spring",
        stiffness: 25
    }
    const PageTransition_All = {
        type: "spring",
        stiffness: 40
    }
    console.log(infoisi.bordereau)
    console.log(infoisi.daty_androany)
    return(
        <>
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={PageVariants}
            transition={PageTransition_All}
        >
            <body className="Body_pay">                
                {/* <img scr={Trace} id='trace'/> */}
                <nav className='nav_pay'>
                    <div className='sary floating1'>
                        <img src={headImage} id="headImage_pay"/>
                    </div>
                    <div className='saina_pay'>
                        <img src={Saina1} id="saina6"/>
                        <img src={DGI} id="DGI4"/>
                        <p id='isiOnline_pay'>isi-online</p>
                    </div>
                </nav>
                <div className="contenu">
                    <div className="consigne">
                        <div data-aos="fade-down" data-aos-duration="2000">
                            <p>Fandoavam-bola</p>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="3000">
                            <hr></hr>
                        </div>
                    </div>
                    <section className="get_in_touch_pay">
                    <motion.div
                        initial="out_1"
                        animate="in_1"
                        exit="out_1"
                        variants={PageVariantsForm}
                        transition={PageTransition}
                    >
                        <form onSubmit={e=>updateForm(e)}>
                            <div className="container_add">
                                <div className="contact-form_add rowww">
                                    <div className="form-field_add">
                                        <input id = "nif" className="input-text" required="required" type="text" name="nifd" 
                                        value={nif} onChange = {e => handleChange(e) }
                                        />
                                        <label for="nif" className="label_add">NIF</label>
                                    </div>
                                    <div className="form-field_add">
                                        <input id = "name2" className="input-text" required="required" type="text" name="anarana_entanas"
                                        value={anarana_entana} onChange = {e => handleChange(e)}
                                        />
                                        <label for="name2" className="label_add">Anaran'ny entana novidiana</label>
                                    </div>
                                    <div className="form-field_add">

                                        <input id = "date1" className="input-text" required="required" type="date" name="daty_androanys"
                                            value={daty_androany} onChange = {e => handleChange(e)}
                                        />
                                        <label for="date1" className="label_add">Daty nisoratana ISI</label>
                                    </div>
                                    <div className="form-field_add">

                                    <input id = "date2" className="input-text" required="required" type="date" name="daty_fandoavana"
                                            value={daty_fandoavana} onChange = {e => handleChange(e)}
                                        />
                                        <label for="date2" className="label_add">Daty andoavam-bola</label>
                                    </div>
                                    <div className="form-field_add">

                                        <input id = "price" className="input-text" required="required" type="text" name="vola_aloah"
                                            value={vola_aloa} onChange = {e => handleChange(e)}
                                        />
                                        <label for="price" className="label_add">Vola ISI (Ariary)</label>
                                    </div>
                                    <div className="form-field_add">
                                        <select name="pets" className="input-text" value={Select} onChange = {e => setSelect(e.target.value)} required = "required">
                                            <option></option>
                                            <option value="Espece">Espece</option>
                                            <option value="Virement">Virement</option>
                                        </select>
                                        <label for="price" className="label_add">Fomba fandoavanao vola</label>
                                    </div>

                                    
                                    
                                    {
                                        Select ==="Virement" &&(
                                         <div className="form-field_add">
                                         <input id = "price" className="input-text" required="required" type="text" name="bordereau"
                                          onChange = {e => handleChange(e)}
                                        />
                                        <label for="price" className="label_add">laharany bordereau</label>
                                        </div>
                                        )
                                    }
                                        
                                    <div className="bouton">
                                        <div className="form-field_add">
                                            <input type="submit" className="btn4" id="btn4" name="submit" value="Aloa"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>   
                    </motion.div>    
                    </section>
                    <div className="picture_add">                   
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
                            {/* <p>{msg}</p> */}
                            <p>{message}</p>
                            <p>Miampy: {penalite_retard} Ariary</p>
                            <p className="Net">Vola haloa: {net_a_payer} Ariary</p>
                        </div>
                    </div>
                </div>
                    {/* ************************************************************* */}
                    {/* <div className="containerbox">
                            <div className="boxfirst">
                                <div className=" roww boxwelcome" data-aos="zoom-in" data-aos-duration="2000">
                                    <article className="text-centerr">
                                        <p></p>
                                        <h4 id="h4">Bienvenue sur "ISI-ONLINE"</h4>
                                        Ce site regroupe en un seul espace les
                                        différentes fonctionnalités (Télédéclaration,
                                        Paiement virtuel, Consultation
                                        de situation fiscale).
                                        <p></p>
                                    </article>
                                </div>
                                <div className="box_debut">
                                    <div className="roww" data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-duration="1500"
                                    >
                                        <article className="col-md-8 col-md-offset-2">
                                            <hr></hr>
                                            <h4>
                                                <span className="fa fa-clipboard">
                                                </span>
                                                Droit de communication
                                            </h4>
                                            <p>Le droit de communication est le droit reconnu à l'administration 
                                                fiscale de prendre connaissance et, au besoin,
                                                copie de documents détenus par des tiers 
                                                (entreprises privées, administrations, etc...).
                                                Les renseignements recueillis à cette occasion peuvent être 
                                                utilisés pour l'assiette et le contrôle de tous impôts et taxes 
                                                à la charge, soit de la personne physique ou morale auprès de laquelle
                                                il est exercé, soit de tiers à cette personne.
                                            </p>
                                            <ul className="list-inline">
                                                <li>
                                                    <a href="https://entreprises.impots.mg/dconline/">
                                                        <span className="glyphicon glyphicon-edit"></span>
                                                        Acceder au service
                                                    </a>
                                                </li>
                                            </ul>
                                        </article>
                                    </div>
                                </div>
                            </div>
                    </div> */}
                    {/* ************************************************************** */}
                {/* <div className="contact_pay" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000">
                    <div className="sous-contact_pay">
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
                    <div className="social_pay">
                        <p>SOCIAL</p>
                        <div className="icone-social">
                            <img src={Facebook}></img>
                            <img src={Twitter}></img>
                            <img src={Google}></img>
                            <img src={Email}></img>
                        </div>
                    </div>
                </div> */}
            </body>            
        </motion.div>
        </>
    )
}