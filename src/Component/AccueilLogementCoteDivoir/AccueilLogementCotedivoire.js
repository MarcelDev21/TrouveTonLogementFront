import React from 'react';
import cameroun from '../images/cameroun.png'
const AccueilLogementCotedivoire = (props) => {
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
                                    <p className="recherch">Rechercher</p>
                                </div>
                        </div>

                        <div className="cardOrigine">
                        <div className="imageDrapeau">
                            <img src={cameroun} alt="cameroun" className="cameroun"/>
                        </div>
                        <div>
                            <p className="cam">Appartement meublés</p>
                            <p className="monP">Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun</p>
                            <p className="recherch">Rechercher</p>
                        </div>
                  </div>

                  <div className="cardOrigine">
                        <div className="imageDrapeau">
                            <img src={cameroun} alt="cameroun" className="cameroun"/>
                        </div>
                        <div>
                            <p className="cam">Appartements Simples</p>
                            <p className="monP">Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun</p>
                            <p className="recherch">Rechercher</p>
                        </div>
                  </div>

                  <div className="cardOrigine">
                        <div className="imageDrapeau">
                            <img src={cameroun} alt="cameroun" className="cameroun"/>
                        </div>
                        <div>
                            <p className="cam">Bureaux</p>
                            <p className="monP">Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun.Recherche d'appartements au Cameroun</p>
                            <p className="recherch">Rechercher</p>
                        </div>
                  </div>

                 </div>
        </div>
    );
};

export default AccueilLogementCotedivoire;