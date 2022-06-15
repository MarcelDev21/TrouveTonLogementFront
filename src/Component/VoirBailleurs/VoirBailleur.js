import React,{useEffect, useState} from 'react';
import './VoirBailleur.css'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'
import {Modal,Button,Form} from 'react-bootstrap'
import ReactPaginate from 'react-paginate';

const VoirBailleur = () => {

    const [TousLesBoss, setTousBoss] = useState([])

    const [NomBailleur,setNomBailleur] = useState("")
    const [Telephone,setTelephone] = useState()
    const [NomdeCite,setNomdeCite] = useState()
    const [Quartier,setQuartier] = useState()
    const [id, setIds] = useState()
    const [QuartierCite, setQuartierCite] = useState("")

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pageNumber, setPageNumber] = useState(0)
    const userPerPages = 5
    const pageVisited = pageNumber *  userPerPages
    const pageAccount = Math.ceil(TousLesBoss.length / userPerPages)

    useEffect(()=>{
        const TouslesBailleurs = async() => {
            const urlTousLesBailleurs = "http://api.tonlogementaucameroun.com/TousLesBailleurs"
            await axios.get(urlTousLesBailleurs).then((res)=>{
                 console.log(res)
                 setTousBoss(res.data.recupereTousLesBailleurs)
                //setTousBoss(res)
            })
        }
        TouslesBailleurs()
    },[])

    const CreerNouvelleChambre = (id) => {
        navigate(`/CreerChambre/${id}`)
    }   

    const Actualisation = async() => {
        const urlTousLesBailleurs = "http://api.tonlogementaucameroun.com/TousLesBailleurs"
        await axios.get(urlTousLesBailleurs).then((res)=>{
             console.log(res)
             setTousBoss(res.data.recupereTousLesBailleurs)
            //setTousBoss(res)
        })
    }

    const EffectuerModification = async(id) => {
        console.log("on click",+id )
        const urlModification = `http://api.tonlogementaucameroun.com/ModifierBailleur/${id}`
        await axios.put(urlModification,{NomBailleur,Telephone,NomdeCite,Quartier}).then((res)=>{
            console.log(res)
            if(res.data.succes === true){
                Actualisation()
            }
        })
    }

    const CreerModal = () => {
        return(
            <>
            {console.log("top"+id)}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modifier les données du Bailleur</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Woohoo, you're reading this text in a modal! */}
                        <input type="text" placeholder="Modifier Le Nom du Bailleur" onChange={(event)=> setNomBailleur(event.target.value)} className="inputVoirBailleur3"/><br/>
                        <input type="Number" placeholder="Modifier le Numero de téléphone" onChange={(event)=> setTelephone(event.target.value)} className="inputVoirBailleur3"/><br/>
                        <input type="text" placeholder="Modifier le nom de la cité" onChange={(event)=> setNomdeCite(event.target.value)} className="inputVoirBailleur3"/><br/>
                        <input type="text" placeholder="entrer le Quartier" onChange={(event)=> setQuartier(event.target.value)} className="inputVoirBailleur3"/><br/>
                        {/* <input type="text" placeholder="entrer votre nom" onChange={(event)=> setQuartierCite(event.target.value)} className="inputVoirBailleur3"/> */}
                        </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <div>
                            <p>Fermer</p>
                        </div>
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <div onClick={()=> EffectuerModification(id)}> 
                            <p>Effectuer Modification</p>
                        </div>
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    const SupprimerBailleur = async(id) => {
        console.log(id)
        const urlSuppression = `http://api.tonlogementaucameroun.com/SupprimerBailleur/${id}`
        await axios.delete(urlSuppression).then((res)=> {
            console.log(res)
            Actualisation()
        })
    }

    const setId = (id) => {
        setIds(id)
    }

    /*const RechercherEnFonctionDuQuartier = async() => {
        const urlRecherche ="http://api.tonlogementaucameroun.com/RechercherEnFonctionQuartier"
        await axios.get(urlRecherche,{"Quartier": QuartierCite}).then((res)=>{
            //console.log(res)
        })
    }*/

    const VoirLaCitee = (id) => {
          navigate(`/VoirLaCitee/${id}`)
    }


    const AfficherBailleur = () => {
        return(
            <div>
               {TousLesBoss
               .slice(pageVisited, pageVisited + userPerPages)
               .filter((val)=>{
                if(QuartierCite === ""){
                    return val
                }else if(val.Quartier.toLowerCase().includes(QuartierCite)){
                    return val
                }
                 })      
               .map((res)=>{
                   return(
                       <div className="AfficheBail">
                            <p>Nom du Bailleur:{res.NomBailleur}</p>
                            <p>Numero téléphone:{res.Telephone}</p>
                            <p>Quartier:{res.Quartier}</p>
                            <p>Nom de la cité:{res.NomdeCite}</p>
                            <div>
                                <div onClick={()=>CreerNouvelleChambre(res._id)}>
                                    <p className="creerChambress">Creer une Nouvelle chambre</p>
                                </div>
                                <div
                                 //onClick={()=>EffectuerModification(res._id)}
                                 >
                                    <div
                                     onClick={handleShow}>
                                        <div onClick={()=> setId(res._id)}>
                                          <p className="creerChambress">Modifier Le Bailleur</p>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={()=>VoirLaCitee(res._id)}>
                                    <p className="creerChambress">Voir la Citée</p>
                                </div>
                                <div onClick={()=>SupprimerBailleur(res._id)}>
                                    <p className="creerChambress">Supprimer le Bailleur</p>
                                </div>
                            </div>     
                      </div>
                   )
               })}
            </div>
        )
    }

    const handleChangePage = ({selected}) => {
        setPageNumber(selected)
      }

    return (
        <div>
             {CreerModal()}
            <h1>Voir Bailleur</h1>
            <div>
                    <div className="RechercherEnFonctionDuQuartier">
                        <input className="inputVoirBailleur" type="text" placeholder="Rechercher en fonction du quartier" onChange={(event)=>setQuartierCite(event.target.value)}/>  
                    </div>
                
                <AfficherBailleur/>
                
            </div>
            <div className="pagination">
                            <ReactPaginate
                            pageClassName="maPag"
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            pageCount={pageAccount}
                            onPageChange={handleChangePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousbtn"}
                            nextLinkClassName={"nextBtn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                            />
                </div> 
               
            {/* <Footer/> */}
        </div>
    );
};

export default VoirBailleur;