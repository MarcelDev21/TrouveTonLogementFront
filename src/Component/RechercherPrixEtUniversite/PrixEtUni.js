import React,{useEffect, useState} from 'react';
import './PrixEtUni.css'
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer'
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { MdOutlineBedroomParent } from 'react-icons/md';
import {useNavigate} from 'react-router-dom'
import logo from '../images/logo.jpeg'
import { FaHome } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

const PrixEtUni = () => {

    const {Prix,Universite} = useParams()
    const [mesChambres,setChambre] = useState([])
    const navig = useNavigate()
    const navigate = useNavigate()

    const [pageNumber, setPageNumber] = useState(0)
    const userPerPages = 4
    const pageVisited = pageNumber *  userPerPages
    const pageAccount = Math.ceil(mesChambres.length / userPerPages)

    useEffect(()=>{
      const AfficheTout = async () => {
        console.log("test"+Prix, Universite)
        const monUrl = "http://api.tonlogementaucameroun.com/RechercheEnFonctionDeLuniversite"
        await axios.post(monUrl,{Prix, Universite}).then((res)=>{
            console.log(res)
            setChambre(res.data.monUniversite)
        })
      }
      AfficheTout()
    },[])

    /*const RechercheEnFonctionPrix = async() => {
        console.log("testons")
        const urlGetPrixEtUniversite = "http://api.tonlogementaucameroun.com/RechercheEnFonctionDeLuniversite"
        await axios.post(urlGetPrixEtUniversite,{"Prix":10000,Universite}).then((res)=>{
            console.log("ton uni"+res.data.monUniversite)
            console.log("ton uni"+res.data.monUniversite.Pays)
            setChambre(res.data.monUniversite)
        })
        RechercheEnFonctionPrix()
    }*/

    const VoirDetail = (id) => {
        navig(`/DetailMaison/${id}`)
    }

    const handleChangePage = ({selected}) => {
        setPageNumber(selected)
      }

    const DescriptionChambre = () => {
        return(
            <div className="descriptionText">  
                   <p>
                   Cette chambre est une de la cit?? universitaire qui s'appelle Niedjo qui est situ??e a 500 mettre du campus
                   A son alentour, vous avez facilement acc??s ?? une pharmacie.Cette chambre est une de la cit?? universitaire qui s'appelle Niedjo qui est situ??e a 500 mettre du campus
                   A son alentour, vous avez facilement acc??s ?? une pharmacie.Cette chambre est une de la cit?? universitaire qui s'appelle Niedjo qui est situ??e a 500 mettre du campus
                   A son alentour, vous avez facilement acc??s ?? une pharmacie.</p>  
            </div>
        )
    }

    const PointsForts = () => {
        return(
            <div>
                <div className="toutContact">
                            <h5 className="contactMail">Points forts</h5>
                            <p>Notre Application est l'une des plateformes les
                            plus utilis??es par les ??l??ves.Si vous ??tes Bailleur,
                            vous pouvez souscrir sur cette application.vous 
                            pouvez souscrir sur cette application.
                            </p>
                            <p>Notre Application est l'une des plateformes les
                            plus utilis??es par les ??l??ves.Si vous ??tes Bailleur,
                            vous pouvez souscrir sur cette application.vous 
                            pouvez souscrir sur cette application.
                            </p>
                        <div className="pFier">
                            <FaHome size="20" className="faHome"/>
                            <p className="fier">Fi??r de vous servir</p>
                        </div><br/>
                </div>
            </div>
        )
    }


    const Affichage = () => {
        return(
            <div>
                {
                    mesChambres
                    .slice(pageVisited, pageVisited + userPerPages)
                    .map((res)=> {
                        return(
                            <div className="trouveTaChambreDiv">
                            <div className="divCarousel">
                                <Carousel className="carousel">
                                <Carousel.Item interval={1000}>
                                    <img
                                    className="carouselImage"
                                    src={res.Image.url}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                    className="carouselImage"
                                    src={res.Image1.url1}
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image2.url2}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image3.url3}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image4.url4}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image5.url5}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image6.url6}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>
                                {/* MonCaroussel */}
                            </div>
                            <div className="descriptionChambre">
                                {/* <div> */}
                                {/* <div className="officialDiv"> */}
                                    <div>
                                          <h5 className="chambredEtudiantTitre">Chambre d'??tudiant situ??e a {res.Universite} ?? 500 m de l'universit??</h5>
                                    </div>
                                    <div className="detail">
                                            <div className="prixetVl">
                                                <h3 className="prixMois">{res.Prix}Fcfa/Mois</h3>
                                                <div className="vl"/>
                                            </div>
                                                <div className="divPrix0">
                                                        <div className="testPrix">
                                                            <div className="divTres">
                                                                          <div className="dessein">
                                                                                <div className="dessein1">
                                                                                    <MdOutlineBedroomParent className="icon"/>
                                                                                </div>
                                                                                <div className="dessein2">
                                                                                    <p className="chiffre">{res.LitInterne}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="chambrePiece">
                                                                                <p className="chambreEtPiece">Chambre/Pi??ce</p>
                                                                            </div>
                                                            </div>    
                                                            </div> 
                                                         <div className="vl"/>
                                                </div>
                                            <div className="prixetVl">
                                                 <div className="testPrix">
                                                            <div className="divTres">
                                                                          <div className="dessein">
                                                                                <div className="dessein1">
                                                                                    <MdOutlineBedroomParent className="icon"/>
                                                                                </div>
                                                                                <div className="dessein2">
                                                                                    <p className="chiffre">{res.LitInterne}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="chambrePiece">
                                                                                <p className="chambreEtPiece">LitInterne</p>
                                                                            </div>
                                                            </div>    
                                                            </div> 
                                              
                                              
                                                <div className="vl"/>
                                            </div>
                                            <div className="prixetVl">
                                                <h3 className="prixMois">{res.Ville}</h3>
                                                <div className="vl"/>
                                            </div>
                                            <div className="prixetVl">
                                                <h3 className="prixMois">{res.MettreCarre}M2</h3>
                                            </div>
                                    </div>
                                {/* </div> */}
            
                                <div className="descriptionChambres">
                                    <DescriptionChambre/>
                                </div>
            
                                <div className="logoEtDeux">
                                    <div>
                                        {/* <h5>logo</h5> */}
                                        <img src={logo} alt="logoChambre" className="logoChambre"/>
                                    </div>
                                    <div onClick={()=> VoirDetail(res._id)}>
                                        <p className="voirPlus">Voir Plus</p>
                                    </div>
                                </div>
                                <div className="hrPro">
                                    <hr className="monHrM"/>
                                </div>
                            {/* </div> */}
            
                            </div>
            
            
                        </div>
                        )
                    })
                }
            </div>
        )
    }

    const Affich = () => {
        return(
            <div>
                <h1>divnn</h1>
            </div>
        )
    }

    const Login = () => {
        navigate('/Login')
    }

    return (
        <div>
            <div className="tetePrixEtudiant">
                 <div>
                     <h4 className="TrouveLogementAll">Trouve ton Logement</h4>
                 </div>
                 <div
                 onClick={()=>Login()}> 
                     <h4 className="loginChambreUni">Login</h4>
                 </div>
            </div>
            <h3>Prix des Chambres Universitaires inf??rieures ?? {Prix} Fcfa</h3>
            {/* <Affichage/> */}
            <div className="PrixEtUni">
                <div>
                   {Affichage()}
                </div>
                <div>
                    {PointsForts()}
                </div>
            </div><br/><br/>

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
            <Footer/>
        </div>
    );
};

export default PrixEtUni;