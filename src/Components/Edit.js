import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {toast} from "react-toastify";
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Rond from '../image/Rond.png'
import Give1 from '../image/give1.png'
import Give2 from '../image/give2.png'
import Give3 from '../image/give3.png'
import Give4 from '../image/give4.png'
import Facebook from '../image/facebook.png'
import Email from '../image/email.png'
import Google from '../image/google_plus.png'
import Twitter from '../image/Twitter.png'
import { motion } from 'framer-motion'

export default function Edit(){
    let history = useNavigate();
    const {laharana} =  useParams();
    const [error,setError]= useState(false)
    const[formerror,setFormerror] = useState(false)
    const[formerrors,setFormerrors] = useState(false)

     
    const [infoisi,setInfoisi] = useState( {      
        nif:"",
        anarana_feno:"",
        cin:"",
        daty_androany:"",
        anarana_entana:"",
        vidina_entana:"",
        daty_nividianana:"",
        isany:""            
    })

    useEffect(()=>{
        loadUsers();
    },[])

    const {nif,anarana_feno,cin,daty_androany,anarana_entana,vidina_entana,daty_nividianana,isany}= infoisi
    const handleChange =(e)=>{
        setInfoisi({...infoisi,[e.target.name] : e.target.value})        
    }
    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost/ISI_online/ViewIsi.php?laharana="+laharana);
        //console.log(result.data);
        setInfoisi(result.data); 
        console.log(typeof(result.data));   
    }
   /*************update******************** */
    const updateForm = async(e)=>{
        e.preventDefault();
        //console.log(student)
        if(infoisi.cin.length == 0){
            setFormerrors(true)
        }
        if( !regex.test(infoisi.vidina_entana) || !regex.test(infoisi.isany) || !regex1.test(infoisi.anarana_entana)){
            setFormerrors(true)
        }else{
            if(infoisi.cin.length < 12){
                setFormerrors(true)
            }else{
                if(infoisi.cin.length > 12){
                    setFormerrors(true)
                }else{
                    if(infoisi.vidina_entana <= 0 || infoisi.isany <= 0 ){
                        setError(true)
                    }else{
               
                        await axios.put("http://localhost/ISI_online/UpdateIsi.php",infoisi)
                        .then((result) => {
                        console.log(result);
                            if(result.status == 201){
                                // alert("tontosa ny fanovana");
                                toast.success('Tontosa ny fanovana nataonao!!!',{
                                    position: toast.POSITION.TOP_LEFT,
                                    autoClose:2500,
                                    // innerWidth: 10
                                })
                                history(`/List/${infoisi.nif}`);
                                history(`/ListAdmin`);        
                            }
                            else{   
                                
                            alert("jereo tsara fa misi olana");
                            }   
                        })
        
    } 
}

}

}
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
    const regex = /^[0-9\b]+$/;
    const regex1 = /^[a-zA-Z]+$/;
    const regex2 =   /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    return(
        <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={PageVariants}
                transition={PageTransition_All}
        >
            <body className="BodyAdd">
                        <nav className='nav_Edit'>
                            <div className='sary floating1'>
                                <img src={headImage} id="headImage3"/>
                            </div>
                            <div className='saina5'>
                                <img src={Saina1} id="saina6"/>
                                <img src={DGI} id="DGI4"/>
                            </div>
                            <p id='isiOnline3'>isi-online</p>
                        </nav>
                        <div className="consigne_Edit">
                            <div data-aos="fade-down" data-aos-duration="2000">
                                <p>Fanovana</p>
                            </div>
                            <div data-aos="flip-left" data-aos-duration="3000">
                                <hr></hr>
                            </div>
                        </div>
                    <section className="get_in_touch">                    
                        <div className="container">
                            <motion.div
                                initial="out_1"
                                animate="in_1"
                                exit="out_1"
                                variants={PageVariantsForm}
                                transition={PageTransition}
                            >                            
                                <form onSubmit={e=>updateForm(e)}>
                                    <div className="contact-form_add rowww">
                                        <div className="form-field_add">

                                            <input id = "nif" className="input-text" type="text" name="nifb"
                                            value={infoisi.nif} onChange = {e => handleChange(e)}
                                            />
                                            <label for="nif" className="label_add">NIF</label>

                                        </div>
                                        <div className="form-field_add">

                                            <input id = "name1" className="input-text" type="text" name="anarana_fenos"
                                            value={infoisi.anarana_feno} onChange = {e => handleChange(e)}
                                            />
                                            <label for="name1" className="label_add">Anarana feno</label>

                                        </div>
                                        <div className="form-field_add">

                                            <input id = "cin" className="input-text" type="text" name="cinS"
                                            value={infoisi.cin} onChange = {e => handleChange(e)}
                                            />
                                            <label for="cin" className="label_add">Laharan'ny kara-panondro</label>
                                            {formerrors && infoisi.cin.length < 12?
                                             <label>tsy ampy ny laharana nampi</label>:""}
                                             {formerrors && infoisi.cin.length > 12?
                                             <label> mihoatra ny laharana</label>:""
                                             } 

                                        </div>
                                        
                                        <div className="form-field_add">

                                            <input id = "name2" className="input-text" type="text" name="anarana_entana"
                                            value={infoisi.anarana_entana} onChange = {e => handleChange(e)}
                                            />
                                             <label for="name2" className="label_add">Anaran'ny entana novidiana</label>
                                            {formerrors && !regex1.test(infoisi.anarana_entana)?
                                             <label>misy tsy mety</label>:""}
                                        </div>
                                        <div className="form-field_add">

                                            <input id = "price" className="input-text" type="text" name="vidina_entana"
                                            value={infoisi.vidina_entana} onChange = {e => handleChange(e)}
                                            />
                                            <label for="price" className="label_add">Ny vidiny (Ariary)</label>
                                            {formerrors && !regex.test(infoisi.vidina_entana) ?
                                            <label>misy tsy mety</label>:"" 
                                            }

                                        </div>
                                        <div className="form-field_add">
                                            <input id = "date2" className="input-text" type="texte" name="isany"
                                            value={infoisi.isany} onChange = {e => handleChange(e)}
                                            />
                                            <label for="date2" className="label_add">isan'ny entana</label>
                                            {formerrors && !regex.test(infoisi.isany)?
                                            <label>misy tsy mety</label>:"" 
                                            }
                                        </div>
                                        <div className="form-field_add">

                                            <input id = "date2" className="input-text" type="date" name="daty_nividianana"
                                            value={infoisi.daty_nividianana} onChange = {e => handleChange(e)}
                                            />
                                            <label for="date2" className="label_add">Daty nividianana ny entana</label>

                                        </div>
                                        <div className="form-field_add">

                                            <input id = "date1" className="input-text" type="date" name="daty_androany"
                                            value={infoisi.daty_androany} onChange = {e => handleChange(e)}
                                            />
                                            <label for="date1" className="label_add">Daty androany</label>

                                        </div>
                                        
                                        <div className="form-field_add">
                                            <button type="submit" className='btn4' ><b>Tsindrio</b></button>
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </div>                       
                    </section>
                    <div className="picture1">
                        <div className="container-rond">
                            <img src={Rond} id='rond'/>
                        </div>
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
                    {/* <footer className="footer2">
                        <div className="copyLogo2">
                            <p id="copyright2">Copyright 2022 by Mirantsoa & Rija Andria</p>
                        </div>
                    </footer> */}
                    {/* <div className="contact_Edit" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="2000">
                            <div className="sous-contact_Edit">
                                <div className="DirGI">
                                    <p><b>DGI</b></p> 
                                    <p><b>D</b>irection <b>G</b>??n??rale des <b>I</b>mp??ts</p> 
                                    <p>Immeuble MFB, Antaninarenina
                                            Antananarivo, 101, Madagascar
                                    </p>
                                    <p> Tel: (020) xx-xxx-xx</p>
                                    <p>Email: <a href="dgimpots@moov.mg">dgimpots@moov.mg</a></p>
                                </div>
                                <div className="SSIF">
                                    <p><b>SSIF</b></p>
                                    <p><b>S</b>ervice Du <b>S</b>yst??me d'<b>I</b>nformation <b>F</b>iscale</p>
                                    <p>Mandrosoa, Ambohijatovo
                                        Antananarivo, 101, Madagascar
                                    </p>
                                    <p>T??l: (8h ?? 16h) 034 49 431 52, 032 12 011 74</p>
                                    <p>E-mail: <a href="impot.ssif.hotline@gmail.com">impot.ssif.hotline@gmail.com</a></p>
                                </div>
                                <div className="NOTRE_SITE">
                                    <p><b>NOTRE SITE</b></p>
                                    <a href="www.impots.mg">www.impots.mg</a>
                                    <p>Nifonline</p>
                                    <a href="nifonline.impots.mg">nifonline.impots.mg</a>
                                </div>
                            </div>
                            <div className="social_Edit">
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
    )
}