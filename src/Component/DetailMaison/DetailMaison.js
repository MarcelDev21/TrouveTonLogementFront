import React,{useEffect,useState,useCallback} from 'react';
import './DetailMaison.css'
import MenuChambre from '../../MenuChambre/MenuChambre'
import i2 from '../images/i2.jpg'
import { FaBeer } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import {Carousel} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { RViewer, RViewerTrigger } from 'react-viewerjs'
import Viewer from 'react-viewer';
import cameroun from '../images/cameroun.png'
import { SRLWrapper } from "simple-react-lightbox";

import ImageViewer from 'react-simple-image-viewer';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const DetailMaison = () => {

  const {id} = useParams()
  const [monState, setState] = useState([])
  const [nomBailleur, setNomBailleur] = useState("")
  const [telephone, setTelephone] = useState("")
  const [Pays,setPays] = useState("")
  const [Ville,setVille] = useState("")
  const [Quartier,setQuartier] = useState("")
  const [mettreCarre,setMettreCarre] = useState("")
  const [Universite, setUniversite] = useState("")
  const [Prix, setPrix] = useState()

  const [image0, setImage0] = useState()
  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const [image3, setImage3] = useState()
  const [image4, setImage4] = useState()
  const [image5, setImage5] = useState()

  const classes = useStyles();


  const [monArrayImage, setA]=useState([]) ;


  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  let thumbImageUrls = monArrayImage

  useEffect(()=> {

    const RetourEnFonctionId = async() => {

      const urlGetInfoId =`http://api.tonlogementaucameroun.com/TrouveTaChambreEnFonctionId/${id}`
      await axios.get(urlGetInfoId).then((res)=>{
        console.log(res.data.recherDetailBailleur)
        setState([res.data.RechercheEnFonctionId])
        setPays(res.data.RechercheEnFonctionId.Pays)
        setVille(res.data.RechercheEnFonctionId.Ville)
        setQuartier(res.data.RechercheEnFonctionId.Quartier)
        setMettreCarre(res.data.RechercheEnFonctionId.MettreCarre)
        setNomBailleur(res.data.recherDetailBailleur.NomBailleur)
        setTelephone(res.data.recherDetailBailleur.Telephone)
        setUniversite(res.data.recherDetailBailleur.Universite)
        setPrix(res.data.recherDetailBailleur.Prix)

        setImage0(res.data.RechercheEnFonctionId.Image.url)
        setImage1(res.data.RechercheEnFonctionId.Image1.url1)
        setImage2(res.data.RechercheEnFonctionId.Image2.url2)
        setImage3(res.data.RechercheEnFonctionId.Image3.url3)
        setImage4(res.data.RechercheEnFonctionId.Image4.url4)
        setImage5(res.data.RechercheEnFonctionId.Image5.url5)

        setA([res.data.RechercheEnFonctionId.Image.url])
      })
    }

    RetourEnFonctionId()
    
  },[])

  const AfficheSpinner = () => {
    return(
      <div>
        <h1>test</h1>
      </div>
    )
  }


 /* const MyArrayTab = [
    "http://res.cloudinary.com/dfaz1ez3h/image/upload/v1653565061/TrouveTaPiol/iycdcbgxqhnktcikm5ja.jpg",
    "http://res.cloudinary.com/dfaz1ez3h/image/upload/v1653565065/TrouveTaPiol/tcpt2yecdaoqtxk6o58w.jpg",
    "http://res.cloudinary.com/dfaz1ez3h/image/upload/v1653565100/TrouveTaPiol/byw6jrs3tzaom07zyigr.jpg",
    "http://res.cloudinary.com/dfaz1ez3h/image/upload/v1653565075/TrouveTaPiol/zddwuzhpe26qhnry7wab.jpg"
  ]*/

  const images = [
   image0,
   image1,
   image2,
   image3,
   image4,
   image5
  ]

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


    const CarouselImage = () => {
        return(
         <div>
          {
            monState.map((res)=> {
              return(
                <Carousel className="test">
                <Carousel.Item>
                  <img
                    className="bete"
                    src={res.Image.url}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Visiter cette Chambre.</h3>
                    <p>Chambres ?? louer pour vous</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="bete"
                    src={res.Image1.url1}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Visiter cette Chambre.</h3>
                    <p>Chambres ?? louer pour vous</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="bete"
                    src={res.Image2.url2}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Visiter cette Chambre.</h3>
                    <p>Chambres ?? louer pour vous</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="bete"
                    src={res.Image3.url3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Visiter cette Chambre.</h3>
                    <p>Chambres ?? louer pour vous</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="bete"
                    src={res.Image4.url4}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Visiter cette Chambre.</h3>
                    <p>Chambres ?? louer pour vous</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              )
            })
          }
        </div>
        )
    }

    const AfficheImage = () => {
      return(
        <div>
          <h1>Afficher d'Autres images</h1><br/>
          {images.map((src, index) => (
            <img
            className="imageOne"
              src={ src }
              onClick={ () => openImageViewer(index) }
              width="300"
              key={ index }
              style={{ margin: '2px' }}
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={ images }
              currentIndex={ currentImage }
              disableScroll={ false }
              closeOnClickOutside={ true }
              onClose={ closeImageViewer }
            />
          )}
        </div>
      )
    }

    return (
        <div className="toutDetailMaison">
          {console.log(monState)}
          {
            monState.length !== 0 ? 
            <div>
                 <MenuChambre/>

<div className="orignalDetailMaison">
    <div className="partieGaucheDetailPiol">
            <div className="gestionCaroussel">
                <div>
                     <CarouselImage/>
                     <hr/>

                     <div>
                          <AfficheImage/>
                     </div><br/>

                              <hr/>
                     <div>
                         <h1>Description</h1>
                     </div>

                     <hr/>

                    <div className="myDetail">
                       <div className="detail1">
                            <p> Pays</p>
                            <p> {Pays}</p>
                        </div>
                        <div className="detail1">
                            <p> Ville</p>
                            <p> {Ville}</p>
                        </div>
                        <div className="detail1">
                            <p> Quartier</p>
                            <p> {Quartier}</p>
                        </div>
                        <div className="detail1">
                            <p> MettreCarre</p>
                            <p> {mettreCarre} m2</p>
                        </div>
                        <div className="detail1">
                            <p> Contact du Bailleur</p>
                            <p className="contactDetailMaison"> {telephone}</p>
                        </div>
                        <div className="detail1">
                            <p> Nom du bailleur</p>
                            <p> {nomBailleur}</p>
                        </div>
                        <div className="detail1">
                            <p> Prix de la Chambre</p>
                            <p> {Prix}</p>
                        </div>
                    </div>

                    <hr/>
                    <div>
                    </div>
                </div>

         

                {/* <div className="partieDroiteMaison">
                    <div>
                          <h1>test</h1>
                    </div>
                </div> */}
                     <div className="paths2">
  <div className="descriptionWith">
        <p className="descriptionMaison"> Cette Chambre est situ??e dans le quartier {Quartier} pr??te de
         {Universite}.Dans l???optique de faciliter l???acc??s aux futurs ??tudiants ?? l???obtention des chambres,
          nous avons mis a votre disposition des cit??s des bailleurs qui ont accept?? faire confiance ?? cette
          Plateforme.Contacter ces bailleurs afin d???avoir plus d???informations sur ces chambres et pensez ??
         prendre un rendez vous pour faire une visite..
         </p>
         <h6 className="contactBailleur">Contact du Bailleur: <span className="contactBail">{telephone}</span></h6>
         <h6 className="nomDeCit??">Nom de la cit??e:<span className="contactBail">{nomBailleur}</span></h6>
  </div>
        <div className="mesTosts">
            <p>Merci de Votre Confiance</p>
        </div>
        {/* <hr className="monHrs" /> */}
      </div>
            </div>

    </div>


    <div className="partieDroiteDetailPiol">
        <div className="deriv">
                <h1>Caract??ristique</h1>
                    <p className="pDetail">
                    Situ?? au {Pays}, pr??cis??ment dans la ville de {Ville}.Elle s???etend sur une superficie de {mettreCarre} m2.
                    Cette chambre a d??j?? ??t?? habit??e par des ??tudiants qui ont pass?? un tr??s bon s??jour dans
                    cette cit??. Vous ??galement, vous pouvez ??tre confortable dans toute la dur??e de vos ??tudes.
                    </p>
         </div>
    </div>
</div>
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

export default DetailMaison;