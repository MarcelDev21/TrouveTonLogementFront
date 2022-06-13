import React,{useState} from 'react';
import { fetchMaison } from '../Redux/Actions/RechercheAction';
import './MenuChambre.css'
import MobileChambre from './MobileChambre';
import NormalChambre from './NormalChambre';
import {useDispatch} from 'react-redux'

const MenuChambre = () => {

    const dispatch = useDispatch()
    const [universite, setUniversite] = useState()
    const [universiteReche, setUniversiteRecherche] = useState()

    const Rechercher = (uni) => {
        //dispatch(fetchPokemenRequest(uni))  
        dispatch(fetchMaison(uni))
    }

    return (
        <div className="monToutChambre">
          <div className="maDivChambre">
              <div className="div1Chambrette">
                  <div>
                         <h1 className="trouveLogementChambre">Trouve ton Logement ici</h1>
                  </div>
                  {/* <div>
                         <input type="text" placeholder="entrer votre valeur" className="inputTest" onChange={(event)=>setUniversiteRecherche(event.target.value)}/>
                  </div> */}
              </div>
              <div>
                 <MobileChambre/>
                 <NormalChambre/>
              </div>
          </div>

          <div className="mesSelects"> 
          <p className="bailleurMenu">Contacter le Numéro du Bailleur si vous êtes intéressez</p>
                {/* <div>
                    <select name="cars" id="cars" className="monSelect">
                        <option value="volvo">Kilométrage</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div>
                    <select name="cars" id="cars" className="monSelect">
                        <option value="volvo">Prix</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div>
                    <select name="cars" id="cars" className="monSelect">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

                <button onClick={()=>Rechercher(universiteReche)}>Rechercher</button> */}
          </div>
        </div>
    );
};

export default MenuChambre;