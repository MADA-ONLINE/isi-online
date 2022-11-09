import React from "react"
import Ravinala from "../image/ravinala.png"
// import Sarykely from "../image/sarykely.png"
import Login from "../image/login.png"
import DGI from '../image/DGI.jpg'




export default function LoginClient(){
    return(
        <>
            <img src={Login} id="login"/>
            <div className="form-Bg">
                <form className="form-header">
                    <div className="ravinala">
                        <img src={Ravinala} id="Ravina"/>
                    </div>
                    <div className="isionline">
                        <p>isi-online</p>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="NIF" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Kaody miafina" required />
                    </div>
                    <div className="form-group">
                        <button type="submit"><b>Tsindrio</b></button>
                    </div>
                </form>
                <div className="phrase">
                    <p>
                        Ataovy ara-dalàna ny fidirambolanao amin'ny alalan'ny fandoavan-ketra.
                        Ary ny fanaovanao izany ihany koa no antoky ny fanatsarana ny tontolo 
                        manodidina eto amin'ny firenen-tsika. Mankaiza avokoa ireo hetra?, ny hetra 
                        rehetra dia makany amin'ny kitapom-bola-mpanjakàna izay entina anavaozana ny sekoly, 
                        ny lalana, ny tanàna, fanampiana ireo sahirana sy ireo zokiolona ary ireo mpamboly 
                        any ambanivohitra.
                    </p>
                </div>
                <div className="courtephrase">
                    <p>
                        "Raiso ny adidinao, aloavy ny hetra"
                    </p>
                </div>
                <footer className="footer1">
                    <div className="copyLogo1">
                        <p id="copyright1">Copyright 2022</p>
                        <img src={DGI} id="DGI1"/>
                    </div>
                </footer>
            </div>
        </>
    )
}