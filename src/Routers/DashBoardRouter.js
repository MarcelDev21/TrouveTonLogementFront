import React from 'react';
import { Routes,Route } from 'react-router-dom';
import CreerChambre from '../Component/CreerChambre/CreerChambre'
import CreerAppart from '../Component/CreerAppart/CreerAppart'
import MenuDashBoard from '../MenuDashBoard/MenuDashBoard';
import AjouterNouveauBailleur from '../Component/AjouterNouveauBailleur/AjouterNouveauBailleur'
import VoirBailleur from '../Component/VoirBailleurs/VoirBailleur'
import VoirLaCitee from '../Component/VoirLaCitee/VoirLaCitee'
import NewUser from '../Component/NewUser/NewUser'
import './DashBoard.css'

const DashBoardRouter = () => {

    return (
        <div className="monDashBoard">            
        <div className="myDash">
             <MenuDashBoard/>
        </div>
        <div className="dos">
        <Routes>
            <Route path="/CreerChambre/:id" element={<CreerChambre/>}/>
            <Route path="/CreerAppart" element={<CreerAppart/>}/>
            <Route path="/AjouterNouveauBailleur" element={<AjouterNouveauBailleur/>}/>
            <Route path="/VoirBailleur" element={<VoirBailleur/>}/>
            <Route path="/VoirLaCitee/:id" element={<VoirLaCitee/>}/>
            <Route path="/NewUser" element={<NewUser/>}/>
            creer un nouveau bailleur: nom du bailleur, numero tel, nom de la cité
            attribuer une chambre: nom de la cité, 
            mettre photo: mettre photo
        </Routes>
        </div>
        </div>
    );
};

export default DashBoardRouter;