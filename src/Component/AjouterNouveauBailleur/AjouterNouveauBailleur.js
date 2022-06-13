import React,{useState} from 'react';
import './AjouterNouveauBailleur.css'
import Footer from '../Footer/Footer';
import Menu from '../../Menu/Menu'
import axios from 'axios';

const AjouterNouveauBailleur = () => {

    const [NomBailleur, setNomBailleur] = useState()
    const [Telephone, setTelephone] = useState()
    const [NomdeCite, setNomdeCite] = useState()
    const [Quartier, setQuartier] = useState()
    const [message, setMessage] = useState()

    const EnregistrerUser = async() => {
      if(!NomBailleur || !Telephone || !NomBailleur || !Quartier){
          console.log("revoyer votre message")
        setMessage("Revoyer vos Champs")
      }else{
        const urlPostCreerBailleur = "http://localhost:5000/creerBailleur" 
        await axios.post(urlPostCreerBailleur, {NomBailleur,Telephone,NomdeCite,Quartier}) 
        .then((res)=>{
            console.log(res)
            setMessage(res.data.message)
        })
      }
    }

    return (
        <div>  
        <div className="AjoutNewBail">
             <h1 className="AjouterNouveau">AjouterNouveauBailleur</h1>
        </div><div>
  <br /><br /><br />
</div>

         <div className="maDivNouveauBailleur">
                <div>
                    {/* <p>ts</p> */}
                </div>
                <div>
                            <form className="monFormulaire">
                                <input type="text" placeholder="Entrer le nom de l'utilisateur" className="utilisateur" onChange={(event)=>setNomBailleur(event.target.value)}/><br/>
                                <input type="number" placeholder="entrer le numero de téléphone" className="utilisateur" onChange={(event)=>setTelephone(event.target.value)}/><br/>
                                <input type="text" placeholder="entrer le nom de la cité" className="utilisateur" onChange={(event)=>setNomdeCite(event.target.value)}/><br/>
                                <input type="text" placeholder="entrer le quartier de la cité" className="utilisateur" onChange={(event)=>setQuartier(event.target.value)}/><br/>
                                <p className="enregistrement" onClick={()=>EnregistrerUser()}>Enrégistrer</p>
                                <p>{message}</p>
                            </form>
                </div>
                <div></div>
         </div><br/>
            {/* <Footer/> */}
        </div>
    );
};

export default AjouterNouveauBailleur;