import React from 'react';
import './PropositionCameroun.css';
import cameroun from '../images/cameroun.png'
import { useNavigate } from 'react-router-dom';

const PropositionCameroun = () => {

   const navigate = useNavigate()

    const RechercheChambreEtudiant = () => {
        console.log("chambre etudiant")
        navigate('/ChambreEtudiant')
    }

    const rechercheAppartMeublé = () => {
        console.log("rechercheAppartMeublé")
    }

    const RechercheAppartementSimple = () => {
        console.log("rechercheAppart simple")
    }

    const RechercheBureaux = () => {
        console.log("RechercheBureaux")
    }
    return (
        <div className="divPropo">
            {/* <h1>PropositionCameroun</h1> */}
            <div className="propoCameroun">
                <div className="came">
                    <img src={cameroun} alt="cameroun" className="camer"/><br/>
                    <p className="paraProp">Voici les principales chambres que nous avons pour vous</p><br/>
                    <ul>
                        <li onClick={()=>RechercheChambreEtudiant()}>Chambres pour étudiants</li>
                        <li>Appartements Meublés</li>
                        <li>Appartement Simples</li>
                        <li>Studio à Louer</li>
                    </ul><br/>
                    <p className="paraProp">Faites votre choix et cliquez sur l'option qui vous semble la mieux.....</p>
                </div><br/>

                <div className="came">
                    <img src={cameroun} alt="cameroun" className="camer"/><br/>
                    <p className="paraProp">Voici les principales chambres que nous avons pour vous</p><br/>
                    <ul>
                        <li onClick={()=>RechercheChambreEtudiant()}>Chambres pour étudiants</li>
                        <li>Appartements Meublés</li>
                        <li>Appartement Simples</li>
                        <li>Studio à Louer</li>
                    </ul><br/>
                    <p className="paraProp">Faites votre choix et cliquez sur l'option qui vous semble la mieux.....</p>
                </div>
            </div>

            {/* proposition */}
           <div className="propoCameroun">
                <div className="came">
                    <img src={cameroun} alt="cameroun" className="camer"/><br/>
                    <p className="paraProp">Voici les principales chambres que nous avons pour vous</p><br/>
                    <ul>
                        <li onClick={()=>RechercheChambreEtudiant()}>Chambres pour étudiants</li>
                        <li>Appartements Meublés</li>
                        <li>Appartement Simples</li>
                        <li>Studio à Louer</li>
                    </ul><br/>
                    <p className="paraProp">Faites votre choix et cliquez sur l'option qui vous semble la mieux.....</p>
                </div>
                
                <div className="came">
                    <img src={cameroun} alt="cameroun" className="camer"/><br/>
                    <p className="paraProp">Voici les principales chambres que nous avons pour vous</p><br/>
                    <ul>
                        <li onClick={()=>RechercheChambreEtudiant()}>Chambres pour étudiants</li>
                        <li>Appartements Meublés</li>
                        <li>Appartement Simples</li>
                        <li>Studio à Louer</li>
                    </ul><br/>
                    <p className="paraProp">Faites votre choix et cliquez sur l'option qui vous semble la mieux.....</p>
                </div>
            </div>

        </div>
    );
};

export default PropositionCameroun;