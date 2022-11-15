import React from "react";
import headImage from '../image/head.png'
import Saina1 from '../image/saina1.png'
import DGI from '../image/DGI.jpg'
import Search from '../image/search.png'
import { useNavigate } from 'react-router-dom';

export default function ListAdmin(){
    let navigate = useNavigate();
    function handleClick() {
        navigate('/:nif/Edit')
    }
    return(
        <>
                    <nav className='navv'>
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
                        <div className="search">
                                <input type="texte" placeholder="Date/Num"/>
                                <img src={Search} />
                        </div>
                    </div>
                    <div className="table">
                        <table className="content-tablee">
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
                                    <th>Ovaina</th>
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
                                    <td id="ovaina" onClick={handleClick}>Ovaina</td>
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
                                    <td>Ovaina</td>
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
                                    <td>Ovaina</td>
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
                                    <td>Ovaina</td>
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
                                    <td>Ovaina</td>
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
                                    <td>Ovaina</td>
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
                                    <td>Ovaina</td>
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
                                    <td>Ovaina</td>
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
                                    <td>Ovaina</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        </>
    )
}