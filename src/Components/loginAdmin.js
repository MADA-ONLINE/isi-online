import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import Ravinala from "../image/ravinala.png"
// import Sarykely from "../image/sarykely.png"
import Login from "../image/login.png"
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import { motion } from 'framer-motion'
import Home from '../image/home.png'
// import { useNavigate } from 'react-router';
// import backG from '../image/backG.jpg'

export default function LoginAdmin(){
    // alert("hello")
    let navigate = useNavigate();
    // function handleClick() {
    //     navigate('/ListAdmin')
    // }  
    const [user,setUser] = useState({
        Matricule:"",
        password:""
    })
   
    const {Matricule,password}= user
    const handleChange =(e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    } 
    const [errors,setErrors] = useState(false) 
    
    const submitForm = (e)=>{
        
       e.preventDefault();
       if(user.Matricule.length == 0 || user.password.length == 0){
        setErrors(true)

       }
       const sendData = {
        Matricule: user.Matricule,
        password: user.password
       }      
       console.log(user)
       console.log(typeof(user))
    //    alert("coucou")
        axios.post('http://localhost/ISI_online/LoginAdmin.php',sendData)
        .then((result) => {
            // console.log(typeof(result.data));
            //  console.log(result.data);
            // console.log(result);
            console.log("coucou")
            if(result.status === 201){
                window.localStorage.setItem('Matricule', result.data.Matricule)
                // window.localStorage.setItem('first_name', (result.data.first_name+ ' ' +result.data.first_name))
                navigate(`/ListAdmin`)
                toast.success(' Tongasoa',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:2500,
                    // innerWidth: 10
                })
            }
            else{   
                if(user.Matricule.length == 0 || user.password.length == 0){
                    console.log("tokony feenoina ny banga")
                }else{
                    toast.error(' Diso ny laharana miafina na ny matricule',{
                        position: toast.POSITION.TOP_CENTER,
                        autoClose:2500,
                        // innerWidth: 10
                    })
                }
            /*alert(result.data.status) ;     
            alert("There is a problem for adding,please try again");*/
           
            // navigate(`/LoginAdmin`)
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
            y: "150%"
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
    const PageTransition = {
        type: "spring",
        stiffness: 20
    }
    const PageTransition_1 = {
        type: "spring",
        stiffness: 23
    }
    function return_home() {
        navigate('/')
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
                        <div className="tongasoa" data-aos="zoom-out-left" data-aos-duration="3000">
                            <p id="tonga">TONGASOA!!<br></br><br></br></p>
                            <div data-aos="flip-right" data-aos-duration="3000">
                                <hr></hr>
                            </div>
                            <p id="ampidiro">    
                                AMPIDIRO NY TAREHI-MARIKAO 
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
                                <input type="text" placeholder="Tarehi-marika"  name="Matricule"
                                    value={Matricule} onChange = {e => handleChange(e) }
                                />
                                {errors && user.Matricule.length<=0?
                            <label>fenoy fa tsy misy soratra</label>:""}
                            </div>
                            <div className="form-group_login">
                                <input type="password" placeholder="Kaody miafina"  name="password"
                                    value={password} onChange = {e => handleChange(e) }
                                />
                                {errors && user.password.length<=0?
                            <label>fenoy fa tsy misy soratra</label>:""}

                            </div>
                            <div className="form-group_login">
                                <button type="submit" className='btn3 btn1'><b>Tsindrio</b></button>
                            </div>
                        </form>
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