import React from 'react';
import './Accueil.css'
import Menu from '../../Menu/Menu';
import NormalNavigation from '../../Menu/NormalNavigation';
import cameroun from '../images/cameroun.png'
import { FaSearch } from 'react-icons/fa';
import AccueilLogementCameroun from '../AccueilLogementCameroun/AccueilLogementCameroun';
import AccueilLogementCotedivoire from '../AccueilLogementCoteDivoir/AccueilLogementCotedivoire'
import Footer from '../Footer/Footer'
import PropositionCameroun from '../Proposition/PropositionCameroun';

const Accueil = () => {

    return (
        <div className="accueilGeneral">
                <div className="monMenuTout">
                <div className="monEntete">
                    <div className="menuDroite">
                        <p className="prix">Prix</p>
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
                        </div><br/>
                        <div className="maBarDeRecheche">
                            <input type="text" placeholder="Entrer La ville Ou vous voulez trouver votre logement" className="monInput"/>
                            <p className="Rechercher">Rechercher</p>
                        </div>
                    </div>
                </div>
                </div>
            {/* partie 2 */}
            {/* <div>
                <div className="votrelogement">
                    <FaSearch size="20" className="iconerecherche"/>
                    <h4 className="vd">Votre Logement au Cameroun</h4>
                </div>
                 <AccueilLogementCameroun/>
            </div> */}

            {/* cote divoire */}
            {/* <div>
                <div className="votrelogement">
                    <FaSearch size="20" className="iconerecherche"/>
                    <h4 className="vd">Votre Logement au Cote d'ivoire</h4>
                </div>
                 <AccueilLogementCotedivoire/>
            </div> */}

              {/* Congo */}
            {/* <div>
                <div className="votrelogement">
                    <FaSearch size="20" className="iconerecherche"/>
                    <h4 className="vd">Votre Logement au Cote d'ivoire</h4>
                </div>
                 <AccueilLogementCotedivoire/>
            </div> */}

            {/* Burkina */}
            {/* <div>
                <div className="votrelogement">
                    <FaSearch size="20" className="iconerecherche"/>
                    <h4 className="vd">Votre Logement au Cote d'ivoire</h4>
                </div>
                 <AccueilLogementCotedivoire/>
            </div> */}

            <PropositionCameroun/>
            
            <Footer/>
        </div>
    );
};

export default Accueil;