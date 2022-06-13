import React from 'react';
import cameroun from '../images/cameroun.png'
import { useNavigate } from 'react-router-dom';

const AccueilLogementCameroun = () => {

    const history = useNavigate()

    const RechercheChambreEtudiant = () => {
        console.log("chambre etudiant")
        history('/ChambreEtudiant')
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
        <div>
              <div className="mesTypes">
                        <div className="cardOrigine">
                                <div className="imageDrapeau">
                                    <img src={cameroun} alt="cameroun" className="cameroun"/>
                                </div>
                                <div>
                                    <p className="cam">Chambre étudiant</p>
                                    <p className="monP">Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun</p>
                                    <p onClick={()=>RechercheChambreEtudiant()} className="recherch">Rechercher</p>
                                </div>
                        </div>

                        <div className="cardOrigine">
                        <div className="imageDrapeau">
                            <img src={cameroun} alt="cameroun" className="cameroun"/>
                        </div>
                        <div>
                            <p className="cam">Appartement meublés</p>
                            <p className="monP">Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun</p>
                            <p onClick={()=>rechercheAppartMeublé()} className="recherch" className="recherch">Rechercher</p>
                        </div>
                  </div>

                  <div className="cardOrigine">
                        <div className="imageDrapeau">
                            <img src={cameroun} alt="cameroun" className="cameroun"/>
                        </div>
                        <div>
                            <p className="cam">Appartements Simples</p>
                            <p className="monP">Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun</p>
                            <p onClick={()=>RechercheAppartementSimple()} className="recherch">Rechercher</p>
                        </div>
                  </div>

                  <div className="cardOrigine">
                        <div className="imageDrapeau">
                            <img src={cameroun} alt="cameroun" className="cameroun"/>
                        </div>
                        <div>
                            <p className="cam">Bureaux</p>
                            <p className="monP">Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun</p>
                            <p onClick={()=> RechercheBureaux()} className="recherch">Rechercher</p>
                        </div>
                  </div>

                 </div>
        </div>
    );
};

export default AccueilLogementCameroun;