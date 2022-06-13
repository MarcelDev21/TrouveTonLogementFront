import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './MenuDashboard.css'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Redux/AuthContext';
import { mesTypes } from '../Redux/AuthReducer';

const NavLinksDashBoard = () => {

    const navigate = useNavigate()
    const {user,dispatch} = useContext(AuthContext)

    const Deconnection = () => {
        dispatch({type:mesTypes.logout})
        navigate('/Login')
    }
    return (
        <ul className="mesUlDah">
            {/* <li><Link to="/CreerChambre" className="lik">Creer Chambre d'étudiants</Link></li> */}
                <ul>
                    {/* <li><Link to="/operation"> 1-Opérations</Link></li> */}
                </ul>
            {/* <li><Link to="/CreerAppart">Creer Appartement meublés</Link></li> */}
            {/* <li><Link to="/CreerAppartementSimple"> Creer Appartement Simple</Link></li> */}
            {/* <li><Link to="/Studio"> Studio à louer</Link></li>
            <li><Link to="/Bureaux">Bureaux</Link></li>
            <li><Link to="/CreerChambre">Test</Link></li> */}
            <li><Link to="/AjouterNouveauBailleur" className="lik">Ajouter Nouveau Bailleur</Link></li>
            {/* <li><Link to="/VoirToutUtilisateur">VoirToutUtilisateur</Link></li> */}
            <li><Link to="/VoirBailleur" className="lik">VoirBailleur</Link></li>
            <li><Link to="/NewUser" className="lik">Creer Un Nouvel Utilisateur</Link></li>

            <div onClick={()=>Deconnection()}>
                <p>Deconnection</p>
            </div>
        </ul>
    );
};

export default NavLinksDashBoard;