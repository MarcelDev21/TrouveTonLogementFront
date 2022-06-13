import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Login from '../Component/Login/Login'
import Accueil from '../Component/Accueil/Accueil'
import PrivateRouter from '../Routers/PrivateRouter'
import DashBoardRouter from '../Routers/DashBoardRouter'
import ChambreEtudiant from '../Component/RechercheChambreDetudiant/ChambreEtudiant';
import DetailMaison from '../Component/DetailMaison/DetailMaison';
import DetailPiol from '../Component/DetailPiol/DetailPiol'
import PrixEtUni from '../Component/RechercherPrixEtUniversite/PrixEtUni'
import VoirTypesDuniversite from '../Component/VoirTypeDuniversite/VoirTypesDuniversite'
import PrixComponent from '../Component/PrixComponent/PrixComponent'
const AppRouter = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Accueil/>}/> */}
            <Route path="/Login" element={<Login/>}/>
            <Route path="/" element={<ChambreEtudiant/>}/>
            {/* <Route path="/Accueil" element={<Accueil/>}/> */}
            <Route path="/ChambreEtudiant" element={<ChambreEtudiant/>}/>
            <Route path="/DetailMaison/:id" element={<DetailMaison/>}/>
            <Route path="/DetailPiol/:id" element={<DetailPiol/>}/>
            <Route path="/PrixEtUni/:Prix/:Universite" element={<PrixEtUni/>}/>
            <Route path="/VoirTypesDuniversite/:monUniversite" element={<VoirTypesDuniversite/>}/>
            <Route path="/PrixComponent/:Prix" element={<PrixComponent/>}/>
            <Route path="/*" element=
           {
               <PrivateRouter>
                   <DashBoardRouter/>
               </PrivateRouter>
           }
            />
        </Routes>
    );
};

export default AppRouter;