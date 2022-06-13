import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './VoirLaCitee.css'

const VoirLaCitee = () => {
    const {id} = useParams()
    const [MaisonBailleur, setMaisonBailleur] = useState([])

    useEffect(()=>{
        const SortirDatadUnUser = async() => {
            const urlSortirDatadUnUser = `http://localhost:5000/VoirLesChambresDunBailleur/${id}`  
            await axios.get(urlSortirDatadUnUser).then((res)=>{
                setMaisonBailleur(res.data.rechercheChambreBailleur)
            })
        }
        SortirDatadUnUser()
    },[])


    const SupprimerMaison = async(id) => {
        const urlSupprimePiolBailleur = `http://localhost:5000/SupprimePiolBailleur/${id}`
        await axios.delete(urlSupprimePiolBailleur).then((res)=>{
            console.log(res)
            if(res.data.succes === true){
                Actualisation()
            }
        })
    }

    const Actualisation = async() => {
        const urlSortirDatadUnUser = `http://localhost:5000/VoirLesChambresDunBailleur/${id}`  
        await axios.get(urlSortirDatadUnUser).then((res)=>{
            setMaisonBailleur(res.data.rechercheChambreBailleur)
        })
    }

    const AfficherPiol = MaisonBailleur.map((res)=>{
        return(
            <div className="AffichePiolll">
                <div>
                    <img src={res.Image.url} alt="imageKong" className="imageKong"/>
                </div>
                <h5>Pays:{res.Pays}</h5>
                <h5>Ville:{res.Ville}</h5>
                <h5>Quartier:{res.Quartier}</h5>
                <h5>Universite:{res.Universite}</h5>
                <h5>Prix:{res.Prix}</h5>
                <h5>TypeCuisine:{res.TypeCuisine}</h5>
                <h5>MettreCarre:{res.MettreCarre}</h5>
                <h5>Description:{res.Description}</h5>
                <div onClick={() => SupprimerMaison(res._id)}>
                    <p className="supprimerCiteeee">Supprimer Maison</p>
                </div>
            </div>
        )
    })
    return (
        <div>
            <h1>VoirLaCitee</h1>
            <div >
                    {AfficherPiol}
            </div>
        </div>
    );
};

export default VoirLaCitee;