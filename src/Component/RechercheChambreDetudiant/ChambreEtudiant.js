import React,{useEffect,useState, useContext} from 'react';
import './ChambreEtudiant.css'
import {useNavigate} from 'react-router-dom'
import {Carousel} from 'react-bootstrap'
import i2 from '../images/i2.jpg'
import { MdOutlineBedroomParent } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import Footer from '../Footer/Footer'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import logo from '../images/logo.jpeg'


import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import AuthContext from '../../Redux/AuthContext';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const ChambreEtudiant = () => {

    const navigate = useNavigate()
    const navig = useNavigate()
    const [mesChambres, setChambre] = useState([])
    const [valeurRecherche, setValeurRecherche] = useState("")
    const [Prix, setPrix] = useState()
    const [monUniversite, setUniversite] = useState()
    const [PrixChambre, setPrixChambre] = useState()
    const {user} = useContext(AuthContext);

    const classes = useStyles();

    const [pageNumber, setPageNumber] = useState(0)
    //const userPerPages = 15
    const userPerPages = 8
    const pageVisited = pageNumber *  userPerPages
    const pageAccount = Math.ceil(mesChambres.length / userPerPages)

    useEffect(()=>{
        const RecupereToutesChambres = async() => {
            const urlGetChambres ="http://localhost:5000/RecupereToutesChambres"
            await axios.get(urlGetChambres).then((res)=>{
                //console.log(res.data.recupereTouteslesChambres.Prix)
                setPrixChambre(res.data.recupereTouteslesChambres.Prix)
                setChambre(res.data.recupereTouteslesChambres)
            })
        }
        RecupereToutesChambres()
    },[])

    const handleChangePage = ({selected}) => {
        setPageNumber(selected)
      }

    const Login = () => {
        navigate('/Login')
    }

    /*const RechercheEnFonctionDeLuniversite = async () => {
        console.log(monUniversite)
        const urlGetUniversite = "http://localhost:5000/RechercheEnFonctionDeLuniversite"
        await axios.post(urlGetUniversite,{"Universite":monUniversite}).then((res)=>{
            console.log(res)
            setChambre(res.data.monUniversite)
        })
    }*/

    const EffectuerRecherche = async() => {
        console.log(Prix)
        if(monUniversite === "" || monUniversite === undefined){
            //console.log("Rien défini")
        }else{
           // RechercheEnFonctionDeLuniversite()
           navigate(`/VoirTypesDuniversite/${monUniversite}`)
           console.log("je teste")
        }

        if(monUniversite != undefined && Prix != undefined){
            console.log("les deux sont oku")
            console.log(monUniversite)
            let Universite = monUniversite
            navigate(`/PrixEtUni/${Prix}/${Universite}`)
            //RechercheEnFonctionPrix()
        }

        if(Prix != undefined){
            //console.log("vous avez entré le prix")

            /*const urlRechercehPrix = "http://localhost:5000/RecupereEnFonctionDuPrix"
            await axios.post(urlRechercehPrix,{Prix}).then((res)=>{
                setChambre(res.data.RechercheTest)
                if(res.data.RechercheTest === undefined){
                    console.log("Nous n'avons de cechambre a ce prix")
                }else{
                    setChambre(res.data.RechercheTest)
                }
            })*/
            navigate(`/PrixComponent/${Prix}`)
            console.log("le prix est different de undefined")
        }
        
        /*const urlRechercehPrix = "http://localhost:5000/RecupereEnFonctionDuPrix"
        await axios.post(urlRechercehPrix,{Prix}).then((res)=>{
            console.log(res.data.RechercheTest)
           // console.log("effectuer Recherche"+Prix)
           // setChambre(res.data.RechercheTest)
           if(res.data.RechercheTest === undefined) {
               //console.log("Nous n'avons de cechambre a ce prix")
               alert("ce prix n'est pas encor defini")
           }else{
            setChambre(res.data.RechercheTest)
           }
        })*/

    }

const Menu = () => {
    return(
        <div className="menuChambrePremier">
            <div className="monEnteteQuestion">
                    <div>
                          <h4 className="TrouveLogementAll">Trouve ton Logement</h4>
                    </div>
                    <div>
                        {/* <input type="text" placeholder="Entrer le nom de l'université" className="monInputUniversité" onChange={(event)=> setValeurRecherche(event.target.value)}/> */}
                        <input onChange={(event)=> setValeurRecherche(event.target.value)} type="text" placeholder="Entrer votre nom"/>
                    </div>
            </div>
            <div 
            onClick={()=> Login()}>
                <h4 className="loginChambreUni">Login</h4>
            </div>
        </div>
    )
}

const MesTypesDeSelection = () => {
    return(
        <div>
                <div className="mesTypesSelections">
                        {/* <div className="select0">
                                <select className="selectcss">
                                    <option value="valeur 1">valeur 1</option>
                                    <option value="valeur 1">valeur 1</option>
                                    <option value="valeur 1">valeur 1</option>
                                </select>
                            </div> */}
                           
                            <div className="select1">
                                <select value={Prix} onChange={(event)=>setPrix(event.target.value)}>
                                    <option value="Default">Rechercher en fonction du Prix</option>
                                    <option value="9999">  10000</option>
                                    <option value="10001"> 10000 à 14999</option>
                                    <option value="15000"> 15000 à 19999</option>
                                    <option value="20000"> 20000 à 24999</option>
                                    <option value="25000"> 25000 à 29999</option>
                                    <option value="30000"> 30000 à +</option>
                                </select>
                                
                            </div>
                            <div
                            onClick={()=>EffectuerRecherche()}
                            className="select3">
                                <p className="RechercherEtudiant">Rechercher</p>
                            </div>
                </div>
            <hr className="monHr"/>
        </div>
    )
}



const VoirDetail = (id) => {
    navig(`/DetailMaison/${id}`)
}

const TrouveTaChambre = () => {
    return(
        <div className="TrouveTaChambre">
            <h4>Trouve Ta chambre d'étudiant</h4>
                {
                    mesChambres
                    .slice(pageVisited, pageVisited + userPerPages)
                    .filter((val)=>{
                        if(valeurRecherche == ""){
                            return val
                        }else if(val.Universite.toLowerCase().includes(valeurRecherche)){
                            return val
                        }
                    })
                    .map((res)=>{
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
                                    <h3>Visiter cette Chambre.</h3>
                                    <p>Chambres à louer pour vous</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                    className="carouselImage"
                                    src={res.Image1.url1}
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Visiter cette Chambre.</h3>
                                    <p>Chambres à louer pour vous</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image2.url2}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Visiter cette Chambre.</h3>
                                    <p>Chambres à louer pour vous</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image3.url3}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Visiter cette Chambre.</h3>
                                    <p>Chambres à louer pour vous</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image4.url4}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Visiter cette Chambre.</h3>
                                    <p>Chambres à louer pour vous</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image5.url5}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Visiter cette Chambre.</h3>
                                    <p>Chambres à louer pour vous</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carouselImage"
                                    src={res.Image6.url6}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Visiter cette Chambre.</h3>
                                    <p>Chambres à louer pour vous</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>
                                {/* MonCaroussel */}
                            </div>
                            <div className="descriptionChambre">
                                {/* <div> */}
                                {/* <div className="officialDiv"> */}
                                    <div>
                                          <h5 className="chambredEtudiantTitre">Chambre d'étudiant située a {res.Universite} proche de l'université</h5>
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
                                                                                    <p className="chiffre">{res.ChambrePiece}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="chambrePiece">
                                                                                <p className="chambreEtPiece">Chambre/Pièce</p>
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
                                    {/* <DescriptionChambre/> */}
                                <div>
                                <p className="descriptionText">
                               Cette chambre d’étudiant se trouve prèt de <span className="prixVente">{res.Universite}</span>. Il s'agit d'une cité Universitaire ou vous
                               pouvez étudier et.résider Au Prix de <span className="prixVente">{res.Prix} Fcfa</span>, Vous pouvez avoir accès à une de ces multiples 
                               chambre qu’offre cette cité.En effet elle a déjà été habitée par plusieurs étudiants venant de
                               plusieurs horizons.Pour Plus d’informations, vous pouvez avoir accès aux détails de cette chambre
                               en cliquant sur le bouton ci dessous.
                                 </p>    
                                </div>
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

const PointsForts = () => {
    return(
        <div>
            <div className="toutContact">
                        <h5 className="contactMail">Points forts</h5>
                        <p className="paraChambreEtudiant">Notre Application est l'une des plateformes les
                        plus utilisées par les élèves et des parents.Si vous êtes Bailleur,
                        vous pouvez souscrir sur cette application.
                        </p>
                        <p className="paraChambreEtudiant">Dans l’optique de faciliter l’accès aux futurs étudiants à l’obtention des chambres,
                         nous avons mis a votre disposition des cités des bailleurs qui ont accepté faire confiance à cette
                         Plateforme.
                        </p>
                    <div className="pFier">
                        <FaHome size="20" className="faHome"/>
                        <p className="fier">Fièr de vous servir</p>
                    </div><br/>
            </div>
        </div>
    )
}


    return (
        <div>
            {console.log(valeurRecherche)}    
           {
               mesChambres.length !== 0 ?
               <div>
                    <div className="menuChambrePremier">
                    <div className="monEnteteQuestion">
                            <div>
                                <h4 className="TrouveLogementAll">Trouve ton Logement</h4>
                            </div>
                            <div>
                                {/* <input type="text" placeholder="Entrer le nom de l'université" className="monInputUniversité" onChange={(event)=> setValeurRecherche(event.target.value)}/> */}
                                {/* <input onChange={(event)=> setValeurRecherche(event.target.value)} type="text" placeholder="Entrer votre nom"/> */}
                                <select value={monUniversite} onChange={(event)=> setUniversite(event.target.value)} defaultValue={'DEFAULT'} className="rechercheUniversité">
                                        <option value="DEFAULT">Sélectionner Votre Université</option>
                                        <option value="UnivesiteYaoundeII">Université Yaoundé II/Soa</option>
                                        <option value="Université Ngoa Ékélé">Université Ngoa ékélé</option>
                                        <option value="Enset de Douala">Enset de Douala</option>
                                </select>
                            </div>
                    </div>
                    <div 
                    onClick={()=> Login()}>
                        <h4 className="loginChambreUni">Login</h4>
                    </div>
             </div><br/>

            {/* <Menu/><br/> */}


            <MesTypesDeSelection/>
           <div className="punts">
                <div>
                     <TrouveTaChambre/>
                </div>
                <div className="pointsFortis">
                     <PointsForts/>
                </div>
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
                <br/>
                </div>
                :
                <Backdrop className={classes.backdrop} open>
                 <CircularProgress color="inherit" />
                </Backdrop>
           }
            <Footer/>
        </div>
    );
};

export default ChambreEtudiant;