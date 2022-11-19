import React from "react";
import Add from '../image/add.png'
import Search from '../image/search.png'
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import { useNavigate } from 'react-router-dom';

export default function List(){
    let navigate = useNavigate();
    function handleClick() {
        navigate('/:nif/Add')
    }
    return (
        <>
            <body className="bodyList">
                <div className="All">
                    <nav className='nav1'>
                        <div className='sary floating1'>
                            <img src={headImage} id="headImage2"/>
                        </div>
                        <div className='saina3'>
                            <img src={Saina1} id="saina4"/>
                            <img src={DGI} id="DGI3"/>
                        </div>
                        <p id='isiOnline2'>isi-online</p>
                    </nav>
                    <div className="info">
                        <div>                           
                            <div className="infoname">
                                <p id="nif">NIF: <b>4001 213 456</b></p>
                                <p id="anarana">Anarana feno:<b> Rakotomalala Lauri Vania</b></p>
                            </div>
                            <div className="add">
                                <img src={Add} onClick={handleClick}/>
                            </div>
                        </div>
                        <div className="search">
                            <input type="texte" placeholder="Date"/>
                            <img src={Search} />
                        </div>
                    </div>
                    <div className="table">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>Laharana</th>
                                    <th>Anaran'ny entana</th>
                                    <th>Vidiny (Ariary)</th>
                                    <th>Daty novidianana azy</th>
                                    <th>Daty nisoratana ISI</th>
                                    <th>Sazy</th>
                                    <th>Vola aloha (Ariary)</th>
                                    <th>Fanamarihana</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                                <tr>
                                    <td>06</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>Saribao</td>
                                    <td>20.000</td>
                                    <td>12/11/2022</td>
                                    <td>13/12/2022</td>
                                    <td>0</td>
                                    <td>1000</td>
                                    <td>Voaloha</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>
        </>
    )
}