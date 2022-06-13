import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './ChambreEtudiant.css'
import Footer from '../Footer/Footer';
import MenuChambre from '../../MenuChambre/MenuChambre';
import i2 from '../images/i2.jpg'
import { GiBathtub } from 'react-icons/gi';
import { MdBedroomBaby } from 'react-icons/md';
import { GiFamilyHouse } from 'react-icons/gi';
import {  Carousel} from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import axios from 'axios';
import { useSelector } from 'react-redux';
import NormalChambre from '../../MenuChambre/NormalChambre';
import MobileChambre from '../../MenuChambre/MobileChambre';

const ChambreEtudiant = () => {

    const navigate = useNavigate()
    const [toutesMesChambres, setToutesMesChambres] = useState([])
    const [resultatChambre, setResultatChambre] = useState([])
    const [image1, setRecupereImage] = useState()
    const [universiteReche, setUniversiteRecherche] = useState()
    const monSelector = useSelector((state)=> state.maison)
    const [valeurCherche, setValeurCherche] = useState("")
    const [precio,setPrix] = useState()
    const [Distance, setDistance] = useState()

    useEffect(()=> {

        const urlGetChambres ="http://localhost:5000/RecupereToutesChambres"
        const monUrl = async () => {
            await axios.get(urlGetChambres).then((res)=> {
                console.log(res.data.recupereTouteslesChambres)
                let mesObjets = [] ;
                for(let i=0; i<res.data.recupereTouteslesChambres.length;i++){
                    //mesObjets=res.data.recupereTouteslesChambres[i]
                    mesObjets.push(res.data.recupereTouteslesChambres[i])
                    //console.log(mesObjets)
                }

                setToutesMesChambres(mesObjets)
                setResultatChambre([monSelector.rechercheChambreUniversitaire])
                //console.log(monSelector.rechercheChambreUniversitaire)
                //{monSelector.rechercheChambreUniversitaire === undefined ?  setToutesMesChambres(mesObjets) : setToutesMesChambres(monSelector.rechercheChambreUniversitaire)}
                //{monSelector.rechercheChambreUniversitaire === undefined ? <h1> rien</h1> : <h1>Quelque chose</h1>}
                //setToutesMesChambres([res.data.recupereTouteslesChambres[0]])
                //setRecupereImage(res.data.recupereTouteslesChambres[0].Image.url)
            })
        }
        monUrl()
    },[])


    const DetailMaisonFunction = (id) => {
        navigate(`/DetailMaison/${id}`)
    }

    const AfficherCard = () => {
        return(
            <div className="AffichageCard">
                 {/* <Kong/> */}
                {toutesMesChambres.filter((val)=>{
                    if(valeurCherche === ""){
                        return val
                    }else if(val.Universite.toLowerCase().includes(valeurCherche.toLowerCase())){
                        return val
                    }
                }) 
                .map((res)=>{
                    return(
                        <div className="ici">
                    {/* carousel */}
                  <div className="leCar">
                        <Carousel className="leCarousel">
                            
                            <Carousel.Item interval={1000}>
                            <img
                            className="maPiol"
                            src={res.Image.url}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="maPiol"
                            src={res.Image1.url1}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="maPiol"
                            src={res.Image2.url2}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>           
                    </Carousel>
                  </div><br/><br/><br/><br/>

                    {/* caroussel */}
                        <div className="div2">
                        <div className="detailPiol">
                    <p className="nomCité">Nom de la citeé situé a <span className="quartier">{res.Quartier} </span>dans la ville de <span className="quartier">{res.Ville} :</span> <span className="université">{res.Universite}</span></p>
                    <div className="mesPseudoDetail">
                        <p className="prixmensuel"> <span className="prix25">{res.Prix}</span> Frcfa / mois  | </p>
                        <div className="det1">
                             <div className="detail1">
                                <GiBathtub size="20"/>
                                <p className="quantité">{res.DoucheInterne}</p>
                             </div>

                              <div className="douche1">
                                <p className="douche">Douche interne</p>
                              </div>
                        </div>
                        <p className="mesPChambre"> | </p>
                        <div className="det1">
                             <div className="detail1">
                                <MdBedroomBaby size="20"/>
                                <p className="quantité">{res.LitInterne}</p>
                             </div>

                              <div className="douche1">
                                <p className="douche">Lit interne</p>
                              </div>
                        </div>
                        <p className="mesPChambre"> | </p>
                        <div className="det1">
                             <div className="detail1">
                                <GiFamilyHouse size="20"/>
                                <p className="quantité">1</p>
                             </div>

                              <div className="douche1">
                                <p className="douche">Cité universitaire</p>
                              </div>
                        </div>
                    </div>
                </div>
                         {/* patie2 */}
                         <div className="path2">
                  <div className="descriptionWith">
                        <p className="descriptionMaison"> Cette chambre est une de la cité universitaire qui s'appelle Niedjo qui est située a 500 mettre du campus
                            A son alentour, vous avez facilement accès à une pharmacie.Cette chambre est une de la cité universitaire qui s'appelle Niedjo qui est située a 500 mettre du campus
                            A son alentour, vous avez facilement accès à une pharmacie.Cette chambre est une de la cité universitaire qui s'appelle Niedjo qui est située a 500 mettre du campus
                            A son alentour, vous avez facilement accès à une pharmacie.
                         </p>
                  </div>
                        <div className="mesTosts">
                            <p>Merci de Votre Confiance</p>
                            <div onClick={()=>DetailMaisonFunction(res._id)}>
                                <h3 className="detail">Détails</h3>
                            </div>
                        </div>
                        <hr className="monHrs" />
                      </div>
                        </div>
                        </div>
                    )
                })}
                <div>
                        <div>
                            {/* <img src={i2} className="maPiol" alt="maPiol"/> */}
                            {/* <Kong/> */}
                        </div><br/>
                        <hr className="monHr"/><br/>
                </div>
                {/* ecrire la description */}
            </div>
        )
    }

    const ContacterParMail = () => {
        return(
            <div className="toutContact">
                <h5 className="contactMail">Points forts</h5>
                {/* <div className="monInputRemplissage">
                    <input type="text" placeholder="entrer votre mail"/><br/>
                    <textarea className="inputTextMail"/>
                    <p>Envoyer Votre Email</p>
                </div> */}<br/>
                <p>Notre Application est l'une des plateformes les
                 plus utilisées par les élèves.Si vous êtes Bailleur,
                 vous pouvez souscrir sur cette application.vous 
                 pouvez souscrir sur cette application.
                </p><br/>
                <p>Notre Application est l'une des plateformes les
                 plus utilisées par les élèves.Si vous êtes Bailleur,
                 vous pouvez souscrir sur cette application.vous 
                 pouvez souscrir sur cette application.
                </p><br/>
               <div className="pFier">
                 <FaHome size="20" className="faHome"/>
                 <p className="fier">Fièr de vous servir</p>
               </div><br/>
            </div>

        )
    }



    const AfficherCards = () => {
        return(
            <div className="AffichageCard">
                 {/* <Kong/> */}
                {monSelector.rechercheChambreUniversitaire.map((res)=>{
                    return(
                        <div className="ici">
                    {/* carousel */}
                  <div className="leCar">
                        <Carousel className="leCarousel">
                            
                            <Carousel.Item interval={1000}>
                            <img
                            className="maPiol"
                            src={res.Image.url}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="maPiol"
                            src={res.Image1.url1}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="maPiol"
                            src={res.Image2.url2}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>           
                    </Carousel>
                  </div><br/><br/><br/><br/>

                    {/* caroussel */}
                        <div className="div2">
                        <div className="detailPiol">
                    <p className="nomCité">Nom de la citeé situé a <span className="quartier">{res.Quartier} </span>dans la ville de <span className="quartier">{res.Ville} :</span> <span className="université">{res.Universite}</span></p>
                    <div className="mesPseudoDetail">
                        <p className="prixmensuel"> <span className="prix25">{res.Prix}</span> Frcfa / mois  | </p>
                        <div className="det1">
                             <div className="detail1">
                                <GiBathtub size="20"/>
                                <p className="quantité">{res.DoucheInterne}</p>
                             </div>

                              <div className="douche1">
                                <p className="douche">Douche interne</p>
                              </div>
                        </div>
                        <p className="mesPChambre"> | </p>
                        <div className="det1">
                             <div className="detail1">
                                <MdBedroomBaby size="20"/>
                                <p className="quantité">{res.LitInterne}</p>
                             </div>

                              <div className="douche1">
                                <p className="douche">Lit interne</p>
                              </div>
                        </div>
                        <p className="mesPChambre"> | </p>
                        <div className="det1">
                             <div className="detail1">
                                <GiFamilyHouse size="20"/>
                                <p className="quantité">1</p>
                             </div>

                              <div className="douche1">
                                <p className="douche">Cité universitaire</p>
                              </div>
                        </div>
                    </div>
                </div>
                         {/* patie2 */}
                         <div className="path2">
                  <div className="descriptionWith">
                        <p className="descriptionMaison"> Cette chambre est une de la cité universitaire qui s'appelle Niedjo qui est située a 500 mettre du campus
                            A son alentour, vous avez facilement accès à une pharmacie.Cette chambre est une de la cité universitaire qui s'appelle Niedjo qui est située a 500 mettre du campus
                            A son alentour, vous avez facilement accès à une pharmacie.Cette chambre est une de la cité universitaire qui s'appelle Niedjo qui est située a 500 mettre du campus
                            A son alentour, vous avez facilement accès à une pharmacie.
                         </p>
                  </div>
                        <div className="mesTosts">
                            <p>Merci de Votre Confiance</p>
                            <div onClick={()=>DetailMaisonFunction(res._id)}>
                                <h3 className="detail">Détails</h3>
                            </div>
                        </div>
                        <hr className="monHrs" />
                      </div>
                        </div>
                        </div>
                    )
                })}
                <div>
                        <div>
                            {/* <img src={i2} className="maPiol" alt="maPiol"/> */}
                            {/* <Kong/> */}
                        </div><br/>
                        <hr className="monHr"/><br/>
                </div>
                {/* ecrire la description */}
            </div>
        )
    }


    const Rechercher = async() => {
        //valeurCherche
        console.log("mon prix"+precio)
      if(valeurCherche!=undefined){
            const url = `http://localhost:5000/RechercheEnFonctiondeluniversite/${universiteReche}`
            await axios.get(url).then((res)=>{
            console.log(res)
            //setToutesMesChambres([res.data.recupereEnFonctionDuPrix])
            })
      }

      if(valeurCherche !== undefined && precio !== undefined){
          console.log("entres tu ici", precio , valeurCherche)
          const urlRecuperePrixEtUniversite = `http://localhost:5000/RecupereEnFonctionduPrix/${precio}/${valeurCherche}`
          await axios.get(urlRecuperePrixEtUniversite).then((res)=> { 
              console.log(res)
              //setToutesMesChambres([res.data.recupereEnFonctionDuPrix])
          })
      }

    }
    
   