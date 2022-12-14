import React, { useState ,useEffect } from "react";
import axios from "axios"
import {toast} from "react-toastify";
import Ravinala from "../image/ravinala.png"
// import Sarykely from "../image/sarykely.png"
import Login from "../image/login.png"
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import Home from '../image/home.png'
import { Toast } from "bootstrap";

// import backG from '../image/backG.jpg'




export default function LoginClient(){
    let navigate = useNavigate();
    // function handleClick() {
    //     navigate('/ListAdmin')
    // }
    function return_home() {
        navigate('/')
    }
    const [user,setUser] = useState({
        nif:"",
        password:""
    })    
    const [errors,setErrors] = useState(false)
   
    const {nif,password}= user
    const handleChange =(e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }
    
    const submitForm = (e)=>{
       e.preventDefault();
       if(user.nif.length == 0 || user.password.length == 0){
        setErrors(true)

       }

       const sendData = {
        nif: user.nif,
        password: user.password
       }      
       console.log(user)
       console.log(typeof(user))
    //    alert("coucou")
        axios.post('http://localhost/ISI_online/LoginIsi.php',sendData)
        .then((result) => {
            console.log(typeof(result.data));
             console.log(result.data);
            console.log(result);
            console.log("coucou")
            if(result.status === 200){
                window.localStorage.setItem('nif', result.data.nif)
                // window.localStorage.setItem('first_name', (result.data.first_name+ ' ' +result.data.first_name))
                navigate(`/List/${user.nif}`)
                toast.success(' Tongasoa',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:2500,
                    // innerWidth: 10
                })
            } 
            else{
                if(user.nif.length == 0 || user.password.length == 0){
                    console.log("tokony fenoina")
                } else{
                    toast.error(' ?????? Diso ny kaody miafina na ny Nif anao ??????',{
                        position: toast.POSITION.TOP_CENTER,
                        autoClose:4000,
                        // innerWidth: 100         
        
                    })

                }
            /*alert(result.data.status) ;     
            alert("There is a problem for adding,please try again");*/
           
            // alert("Invalid user")
            }   
        });
    }
    const PageVariants = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "-150%"
        }
    }
    const PageVariants_1 = {
        in_1: {
            opacity: 1,
            x: 0
        },
        out_1: {
            opacity: 0,
            x: "100%"
        }
    }
    const PageTransition_1 = {
        type: "spring",
        stiffness: 23
    }
    const PageTransition = {
        type: "spring",
        stiffness: 20
    }
    return(
        <> 
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={PageVariants}
            transition={PageTransition}
        >
            <img src={Login} id="login"/>     
            <nav className='navv'>
                <div className='sary floating1'>
                    <img src={headImage} id="headImage1"/>
                </div>
                <div className='saina1'>
                        <img src={Saina1} id="saina2"/>
                        <img src={DGI} id="DGI2"/>
                </div>
                <p id='isiOnline1'>isi-online</p>
            </nav>
            <div className="return_home">
                <img src={Home} onClick={return_home}/>
            </div>
            <motion.div
                initial="out_1"
                animate="in_1"
                exit="out_1"
                variants={PageVariants_1}
                transition={PageTransition_1}
            >                        
                <div className="form-Bg_login">
                    {/* <div data-aos="flip-right" data-aos-duration="3000">
                        <hr></hr>
                    </div> */}
                    <div className="tongasoa" data-aos="zoom-out-left" data-aos-duration="3000">
                        <p id="tonga">TONGASOA!!<br></br><br></br></p>
                        <div data-aos="flip-right" data-aos-duration="3000">
                            <hr></hr>
                        </div>
                        <p id="ampidiro">    
                            AMPIDIRO NY NIF 
                            SY NY KAODY MIAFINA
                        </p>
                    </div>
                    <form className="form-header_login" onSubmit={submitForm}>
                        <div className="ravinala">
                            <img src={Ravinala} id="Ravina"/>
                        </div>
                        <div className="isionline">
                            <p>isi-online</p>
                        </div>
                        <div className="form-group_login">
                            <input type="text" placeholder="NIF" name="nif"
                                value={nif} onChange = {e => handleChange(e) }
                            />
                            {errors && user.nif.length<=0?
                            <label>fenoy fa tsy misy soratra</label>:""}
                        </div>
                        <div className="form-group_login">
                            <input type="password" placeholder="Kaody miafina" name="password"
                                value={password} onChange = {e => handleChange(e) }
                            />
                            {errors && errors && user.password.length<=0?
                            <label>fenoy fa tsy misy soratra</label>:""}
                        </div>
                        <div className="form-group_login">
                            <button type="submit" className='btn3 btn1'><b>Tsindrio</b></button>
                        </div>
                    </form>                   
                    {/* <div className="phrase">
                        <p>
                            Ataovy ara-dal??na ny fidirambolanao amin'ny alalan'ny fandoavan-ketra.
                            Ary ny fanaovanao izany ihany koa no antoky ny fanatsarana ny tontolo 
                            manodidina eto amin'ny firenen-tsika. Mankaiza avokoa ireo hetra?, ny hetra 
                            rehetra dia makany amin'ny kitapom-bola-mpanjak??na izay entina anavaozana ny sekoly, 
                            ny lalana, ny tan??na, fanampiana ireo sahirana sy ireo zokiolona ary ireo mpamboly 
                            any ambanivohitra.
                        </p>
                    </div> */}
                    <div className="courtephrase">
                        <p>
                            "Raiso ny adidinao, aloavy ny hetra"
                        </p>
                    </div>
                    <footer className="footer1">
                        <div className="copyLogo1">
                            <p id="copyright1">Copyright 2022 by Mirantsoa & Rija Andria</p>
                        </div>
                    </footer>
                </div>
            </motion.div>
        </motion.div>          
        </>
    )
}