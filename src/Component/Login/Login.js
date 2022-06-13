import React,{useState, useContext,useEffect} from 'react';
import './Login.css'
import Menu from '../../Menu/Menu'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../Redux/AuthContext';
import { mesTypes } from '../../Redux/AuthReducer';
import { Link } from 'react-router-dom';

const Login = () => {

    const [Nom,setNom] = useState()
    const [Password,setPassword] = useState()
    const [Message, setMessage] = useState()

    const{dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(()=> {
        dispatch({type:mesTypes.logout})
    },[])

    const Connecter = async() => {
        console.log("connecter vous")
        //navigate('/CreerChambre')
        if(Nom === undefined || Password === undefined){
            console.log("eyh")
            setMessage("Verifiez Vos éléments")
        }else{
            const urlLogin = `http://localhost:5000/login`
            await axios.post(urlLogin,{Nom,Password}).then((res)=>{
                console.log(res)
                if(res.data.success === true){
                    //window.localStorage.token = res.data.token
                    let monToken = res.data.token
                    dispatch({type:mesTypes.login, payload:{"monPayload":res.data.findByNom.nom, monToken}})
                    navigate('/CreerChambre')
                }else{
                    setMessage("Vérifiez ces Identifiants")
                }
            })
        }
    }

    const AjouterUnNouveauBailleur = () => {
        console.log("Ajouter un nouveau Bailleur")
    }

    return (
        <div>
            <div className="monMenuTout">
                        <div className="monEntete">
                            <div className="menuDroite">
                                {/* <p className="prix">Prix</p> */}
                                <Link to="/" className="prix">Accueil</Link>
                            </div>
                            <div>
                                <Menu/>
                            </div>
                        </div><br/>
                        <div>
                        <div className="monTextEntre">
                                <h1 className="trouve">Trouve Ton Logement ici</h1>
                                <p className="ne">Ne chez plus Loin:c'est ici que tout se passe</p>
                        </div><br/>

                            <div>
                                <div className="rechercheFonction">
                                    <p className="trouver">Trouver votre Logement a l'heure que vous voulez</p>
                                </div>
                            </div>
                        </div>
                </div><br/>

                {/* partie 2 */}
                <div className="mesDatasLogin">
                    <div></div>
                        <div className="maDivTouche">
                            <h1 className="connecterLogin">Connecter Vous</h1><br/>
                            <div >
                                    <div className="mesinputLogin">
                                        <input type="text" placeholder="entrer votre nom" className="inputsLogin" onChange={(event)=>setNom(event.target.value)}/><br/>
                                        <input type="password" placeholder="entrer votre password" className="inputsLogin" onChange={(event)=>setPassword(event.target.value)}/>
                                    </div><br/>
                                <p className="mesLogin">{Message}</p>
                                <p onClick={()=> Connecter()} className="maConnection">Connecter Vous</p>
                            </div><br/>
                        </div>
                    <div></div>
                </div><br/>

                <Footer/>
        </div>
    );
};

export default Login;