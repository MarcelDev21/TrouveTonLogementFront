import axios from "axios"

export const Fetch_Pokemon_Request = "Fetch_Pokemon_Request"
export const Fetch_Pokemon_Succes= "Fetch_Pokemon_Succes"
export const Fetch_Pokemon_Failure = "Fetch_Pokemon_Failure"

export const fetchPokemenRequest = () => {
    return{
        type:Fetch_Pokemon_Request
    }
}

export const fetchPokemonSuccess = (pokemon) => {
    return{
        type:Fetch_Pokemon_Succes,
        payload:pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return{
        type:Fetch_Pokemon_Failure,
        payload:error
    }
}

export const fetchMaison = (universite) => {
    return (dispatch) => {
        dispatch(fetchPokemenRequest)
        const urlRecherche=`http://api.tonlogementaucameroun.com/RechercheEnFonctiondeluniversite/${universite}`
        axios.get(urlRecherche).then((res)=> {

            /* funcRecherche = (searchterm) => {
                res.data.filter((val)=> {
                    if(searchterm === ""){
                        return val
                    }else if (val.quartier.toLowerCase().includes(searchterm.toLowerCase())) {
                        return val
                    }
                }).map((res)=> autrevaleur=res)
            }*/
            console.log(res.data)
            dispatch(fetchPokemonSuccess(res.data))
        })
        .catch((err)=> {
            dispatch(fetchPokemonFailure(err))
        })
    }
}

//export default fetchMaison

