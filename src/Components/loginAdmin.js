import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Ravinala from "../image/ravinala.png"
// import Sarykely from "../image/sarykely.png"
import Login from "../image/login.png"
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
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
 
   const submitForm = (e)=>{
       e.preventDefault();
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
                alert("valid user")
            }
            else{   
            /*alert(result.data.status) ;     
            alert("There is a problem for adding,please try again");*/
            alert("⚠️ Diso ny laharana miafina na ny matrucle anao ⚠️")
            navigate(`/LoginAdmin`)
            // alert("Invalid user")
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
                <form className="form-header" onSubmit={submitForm}>
                    <div className="ravinala">
                        <img src={Ravinala} id="Ravina"/>
                    </div>
                    <div className="isionline">
                        <p>isi-online</p>
                    </div>
                    {/* <form > */}
                        <div className="form-group">
                            <input type="text" placeholder="Tarehi-marika" required name="Matricule" 
                            value={Matricule} onChange = {e => handleChange(e) }
                            />

                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Kaody miafina" required name="password"
                            value={password} onChange = {e => handleChange(e) }
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn3 btn1'><b>Tsindrio</b></button>
                        </div>
                    {/* </form> */}
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