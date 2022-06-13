import {Fetch_Pokemon_Request,Fetch_Pokemon_Succes,Fetch_Pokemon_Failure} from '../Actions/RechercheAction'

const originalRecherche = {
    loadaing:false,
    maison:[],
    error:""
}

const RechercherData = (state = originalRecherche, action) => {
    switch (action.type) {
        case Fetch_Pokemon_Request:
            return{
                ...state,
                loadaing:true
            }
        case Fetch_Pokemon_Succes:
            return{
                loadaing:false,
                maison:action.payload
            }
        case Fetch_Pokemon_Failure:
            return{
                loadaing:false,
                maison:[],
                error:action.payload
            }
    
        default:
            return state
    }
}

export default RechercherData