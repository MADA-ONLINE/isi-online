
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
import { motion } from 'framer-motion'

export default function Add(){
    let navigate= useNavigate();
    function Logout() {
        navigate('/LoginClient')
    }
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
    //  const [formErrors,setFormErrors] = useState(false)
     const [error,setError]= useState(false)
     const[formerror,setFormerror] = useState(false)
     const[formerrors,setFormerrors] = useState(false)

    var deadLine = "01" + "/" + "01" + "/" + "0001"

    const setdate_isi = new Date(infoisi.daty_nividianana)
    const mois_isi = setdate_isi.getMonth() + 1 
    console.log(mois_isi)
    console.log(setdate_isi)  

    // var Limit_Date = 15
    var Limit_Mouth = setdate_isi.getMonth() + 1
    // var Limit_Year = setdate_isi.getFullYear()
    console.log(Limit_Year)
    // var deadLine = "01" + "/" + "01" + "/" + "0001"
    console.log(setdate_isi.getDate())
    if(infoisi.daty_nividianana){
        if(mois_isi == 12 ){
           var Limit_Date = 31
           var Limit_Year = setdate_isi.getFullYear()
        deadLine = Limit_Date + "/" + Limit_Mouth + "/"+ Limit_Year
        }else{
            var Limit_Date = 15
            var Limit_Mouth = setdate_isi.getMonth() + 2
            var Limit_Year = setdate_isi.getFullYear()
            deadLine = Limit_Date + "/" + Limit_Mouth + "/"+ Limit_Year
        }
    }
    // ************calcule 1er jour *******************


    // if(infoisi.daty_androany){
    //     if(mois_isi == 12){
    //         Limit_Date = 31
    //         Limit_Mouth = setdate_isi.getMonth()+1
    //         Limit_Year = setdate_isi.getFullYear()
       
    //     }
    // }
    
    // var Limit_Year = setdate_isi.getFullYear()
    // const setdate_isi = new Date(infoisi.date_androany)
    // const mois_isi = setdate_isi.getMonth()+1
    // console.log(mois_isi)
    // var date_isi = setdate_isi.getDate()
    // console.log(date_isi)
    // var Year_isi = setdate_isi.getFullYear()
    // console.log(Year_isi)
    // var deadLine = "01" + "/" + "01" + "/" + "0001"

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
    
    console.log("coucou")
    const regex = /^[0-9\b]+$/;
    const regex1 = /^[a-zA-Z]+$/;
    const regex2 =   /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

    
    const submitForm = async(e)=>{
        e.preventDefault();
        console.log(infoisi)
        if(infoisi.cin.length == 0){
            setFormerrors(true)
        }
    
        if( !regex.test(infoisi.vidina_entana) || !regex.test(infoisi.isany)){
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
                        await axios.post("http://localhost/ISI_online/AddIsi.php?Nif="+Nif,infoisi)
                        .then((result) => {
                          console.log(result);
                        if(result.status == 201){
                        // alert("Tontosa ny fanambarana ISI nataonao!!!")
                        toast.success('Tontosa ny fanambarana ISI nataonao!!!',{
                            position: toast.POSITION.TOP_LEFT,
                            autoClose:2500,
                            // innerWidth: 10
                        })
                            history(`/List/${infoisi.nif}`);
                            
                        }
                        else{   
                        /*alert(result.data.status) ;     
                        alert("There is a problem for adding,please try again");*/
                        toast.error('Diso ny nif nampidirinao!!!',{
                            position: toast.POSITION.TOP_LEFT,
                            autoClose:2500,
                            // innerWidth: 10
                        })
                        }   
                 
                    });
                }
            } 
            }
      
        }
  
    }
    // mampiseho n reultats ISI
    useEffect(()=>{
        loadUsers();
    },[]);

 
    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost/ISI_online/ViewAdd.php?Nif="+Nif);
         //console.log(result.data);
         console.log(result.data.nif)
         setInfoisi(result.data); 
         console.log(typeof(result.data));   
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
   
        return(
        <>
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={PageVariants}
                transition={PageTransition_All}
            >
                <body className="BodyAdd">                
                    {/* <img scr={Trace} id='trace'/> */}
                    <div className="deconnexion_Add">
                        <img src={Logout} onClick={Logout}/>
                    </div>
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
                        <motion.div
                            initial="out_1"
                            animate="in_1"
                            exit="out_1"
                            variants={PageVariantsForm}
                            transition={PageTransition}
                        >
                            <form onSubmit={e=>submitForm(e)}>
                                <div className="container_add">
                                    <div className="contact-form_add rowww">
                                        <div className="form-field_add">
                                            <input id = "nif" className="input-text"  type="number" name="nif" 
                                            value={nif} onChange = {e => handleChange(e) }
                                            />
                                            <label for="nif" className="label_add">NIF</label>
                                           
                                        </div>
                                        <div className="form-field_add">
                                            <input id = "name1" className="input-text"  type="text" name="anarana_fenos"
                                            value={anarana_feno} onChange = {e => handleChange(e)}
                                            />
                                            <label for="name1" className="label_add">Anarana feno</label>
                                            
                                        </div>
                                           
                                        <div className="form-field_add">
                                            <input id = "cin" className="input-text"  type="text" name="cinS"
                                            value={cin} onChange = {e => handleChange(e)} required = "required"
                                            />
                                            <label for="cin" className="label_add">Laharan'ny kara-panondro</label>
                                            
                                             {formerrors && infoisi.cin.length < 12?
                                             <label>tsy ampy ny laharana</label>:""}
                                             {formerrors && infoisi.cin.length > 12?
                                             <label> mihoatra ny laharana</label>:""
                                             } 
                                            

                                        </div>
                                        
                                        <div className="form-field_add">
                                            <input id = "name2" className="input-text"  type="text" name="anarana_entana"
                                            value={anarana_entana} onChange = {e => handleChange(e)}
                                            />
                                            <label for="name2" className="label_add">Anaran'ny entana novidiana</label>
                                            {/* {formerrors && !regex1.test(infoisi.anarana_entana)?
                                             <label>Misy tsy mety</label>:""} */}
                                        </div>
                                        
                                        <div className="form-field_add">
                                            <input id = "price" className="input-text"  type="text" name="vidina_entana"
                                            value={vidina_entana} onChange = {e => handleChange(e)}
                                            />
                                            <label for="price" className="label_add">Ny vidiny (Ariary)</label>
                                            {formerrors && !regex.test(infoisi.vidina_entana) ?
                                            <label>Misy tsy mety</label>:"" 
                                            }
                                        </div>
                                        <div className="form-field_add">
                                            <input id = "number" className="input-text"  type="text" name="isany"
                                            value={isany} onChange = {e => handleChange(e)}
                                            />
                                            <label for="price" className="label_add">Ny isany</label>
                                            {formerrors && !regex.test(infoisi.isany)?
                                            <label>misy tsy mety</label>:"" 
                                            }
                                           
                                        </div>
                                        <div className="form-field_add">
                                            <input id = "date2" className="input-text"  type="date" name="daty_nividianana"
                                            value={daty_nividianana} onChange = {e => handleChange(e)} required ="required"
                                            />
                                            <label for="date2" className="label_add">Daty nividianana ny entana</label>
                                            {/* {formerrors && !regex2.test(infoisi.daty_nividianana)?
                                             <label>tokony ho fenoina</label>:""} */}

                                        </div>
                                        <div className="form-field_add">
                                            <input id = "date1" className="input-text"  type="date" name="daty_androany" required ="required"
                                            value={daty_androany} onChange = {e => handleChange(e)}
                                            />
                                            <label for="date1" className="label_add">Daty androany</label>
                                            {/* {formerrors && !regex2.test(infoisi.daty_androany)?
                                             <label>tokony ho fenoina</label>:""} */}

                                        </div>
                                        <div className="form-field_add">
                                            <input type="submit" className="btn4" name="submit" value="Add"/>
                                        </div>
                                    </div>
                                </div>
                            </form>   
                        </motion.div> 
                    </section>
                    <div>
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
                            {/* <div className="payer"> */}
                                <div className="Pay">
                                    <table className="tableau_add">
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
                            {/* </div> */}
                    </div>
                    {/* ************************************************************* */}
                    <footer className="footer2">
                        <div className="copyLogo2">
                            <p id="copyright2">Copyright 2022 by Mirantsoa & Rija Andria</p>
                        </div>
                    </footer>
                </body>
            </motion.div>
            
        </>
    )
}