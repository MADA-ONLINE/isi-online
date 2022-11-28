import React, { useState ,useEffect } from "react";
import axios from "axios";
import Ravinala from "../image/ravinala.png"
// import Sarykely from "../image/sarykely.png"
import Login from "../image/login.png"
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import { useNavigate } from 'react-router';


// import backG from '../image/backG.jpg'




export default function LoginAdmin(){
    let navigate = useNavigate();
    function handleClick() {
        navigate('/ListAdmin')
    }
   
    const [infoisi,setInfoisi] = useState( {
        nif:"",
        password:""
   })
   
   const {nif,password}= infoisi
   const handleChange =(e)=>{
       setInfoisi({...infoisi,[e.target.name] : e.target.value})
   }

   const submitForm = async(e)=>{
       e.preventDefault();
       console.log(infoisi)       

    await axios.post("http://localhost/ISI_online/LoginIsi.php",infoisi)
       .then((result) => {
         console.log(result);
         if(result.data.status == 'valid'){
           
            
         }
       else{   
         /*alert(result.data.status) ;     
         alert("There is a problem for adding,please try again");*/
         
       }   
   });
   }
    
    return(
        <>
            
            <img src={Login} id="login"/>
            <nav className='nav'>
                <div className='sary floating1'>
                    <img src={headImage} id="headImage1"/>
                </div>
                <div className='saina1'>
                        <img src={Saina1} id="saina2"/>
                        <img src={DGI} id="DGI2"/>
                </div>
                <p id='isiOnline1'>isi-online</p>
            </nav>
            <div className="form-Bg">
                <form className="form-header">
                    <div className="ravinala">
                        <img src={Ravinala} id="Ravina"/>
                    </div>
                    <div className="isionline">
                        <p>isi-online</p>
                    </div>
                    <form onSubmit={e=>submitForm(e)}>
                    <div className="form-group">
                        <input type="text" placeholder="Tarehi-marika" required name="nif" 
                        value={nif} onChange = {e => handleChange(e) }
                        />

                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Kaody miafina" required name="password"
                        value={password} onChange = {e => handleChange(e) }
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn3 btn1' onClick={handleClick}><b>Tsindrio</b></button>
                    </div>
                    </form>
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
        </>
    )
}