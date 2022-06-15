import React,{useState} from 'react';
import './CreerChambre.css'
import MenuDashBoard from '../../MenuDashBoard/MenuDashBoard'
import Footer from '../Footer/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreerChambre = () => {

    const {id}= useParams()

    const [Pays, setPays]=useState()
    const [Ville, setVille]=useState()
    const [Quartier, setQuartier]=useState()
    const [Prix, setPrix]=useState()
    const [TypeCuisine, setTypeCuisine]=useState()
    const [MettreCarre, setMettreCarre]=useState()
    const [Description, setDescription]=useState()
    const [Date, setDate]=useState()
    const [DoucheInterne, setDoucheInterne]=useState()
    const [LitInterne, setLitInterne]=useState()
    const [Universite,setUniversite] = useState()
    const [Distance, setDistance] = useState()
    const [ChambrePiece, setChambrePiece] = useState()
    const [message, setMessage] = useState()


    const [loading, setLoading] = useState(false)
    const [imageNew,setImageNew] = useState("")

    const [Id,setId] = useState()
    const [url, setUrl] = useState()

    const [Id1,setId1] = useState()
    const [url1, setUrl1] = useState()

    const [Id2,setId2] = useState()
    const [url2, setUrl2] = useState()

    const [Id3,setId3] = useState()
    const [url3, setUrl3] = useState()

    const [Id4,setId4] = useState()
    const [url4, setUrl4] = useState()

    const [Id5,setId5] = useState()
    const [url5, setUrl5] = useState()

    const [Id6,setId6] = useState()
    const [url6, setUrl6] = useState()

    const uploadFile = async(event) => {
        const files = event.target.files
        console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')    
       // console.log("test files"+files)
         setLoading(true)
         const urlUpload = "http://api.tonlogementaucameroun.com/UploadImage"
        await axios.post(urlUpload, data)
        .then((res) => {
          setImageNew(res.data.objetGenerale.url);
          setLoading(false);
          setId(res.data.objetGenerale.id)
          setUrl(res.data.objetGenerale.url)
          })
    }


    const uploadFile1 = async(event) => {
        const files = event.target.files
         console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')    
        // console.log("test files"+files)
         setLoading(true)
         const urlUpload = "http://api.tonlogementaucameroun.com/UploadImage"
        await axios.post(urlUpload, data)
        .then((res) => {
          setImageNew(res.data.objetGenerale.url);
          setLoading(false);
          setId1(res.data.objetGenerale.id)
          setUrl1(res.data.objetGenerale.url)
          })
    }

    const uploadFile2 = async(event) => {
        const files = event.target.files
         console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')    
        // console.log("test files"+files)
         setLoading(true)
         const urlUpload = "http://api.tonlogementaucameroun.com/UploadImage"
        await axios.post(urlUpload, data)
        .then((res) => {
          setImageNew(res.data.objetGenerale.url);
          setLoading(false);
          setId2(res.data.objetGenerale.id)
          setUrl2(res.data.objetGenerale.url)
          })
    }

    const uploadFile3 = async(event) => {
        const files = event.target.files
         console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')    
        // console.log("test files"+files)
         setLoading(true)
         const urlUpload = "http://api.tonlogementaucameroun.com/UploadImage"
        await axios.post(urlUpload, data)
        .then((res) => {
          setImageNew(res.data.objetGenerale.url);
          setLoading(false);
          setId3(res.data.objetGenerale.id)
          setUrl3(res.data.objetGenerale.url)
          })
    }

    const uploadFile4 = async(event) => {
        const files = event.target.files
         console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')    
        // console.log("test files"+files)
         setLoading(true)
         const urlUpload = "http://api.tonlogementaucameroun.com/UploadImage"
        await axios.post(urlUpload, data)
        .then((res) => {
          setImageNew(res.data.objetGenerale.url);
          setLoading(false);
          setId4(res.data.objetGenerale.id)
          setUrl4(res.data.objetGenerale.url)
          })
    }

    const uploadFile5 = async(event) => {
        const files = event.target.files
         console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')    
        // console.log("test files"+files)
         setLoading(true)
         const urlUpload = "http://api.tonlogementaucameroun.com/UploadImage"
        await axios.post(urlUpload, data)
        .then((res) => {
          setImageNew(res.data.objetGenerale.url);
          setLoading(false);
          setId5(res.data.objetGenerale.id)
          setUrl5(res.data.objetGenerale.url)
          })
    }

    const uploadFile6 = async(event) => {
        const files = event.target.files
         console.log(files)
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teztjodh')    
        // console.log("test files"+files)
         setLoading(true)
         const urlUpload = "http://api.tonlogementaucameroun.com/UploadImage"
        await axios.post(urlUpload, data)
        .then((res) => {
          setImageNew(res.data.objetGenerale.url);
          setLoading(false);
          setId6(res.data.objetGenerale.id)
          setUrl6(res.data.objetGenerale.url)
          })
    }

    const EnregistrerChambre = async() => {
       // if(!Pays || !Ville || !Quartier || !Prix || !TypeCuisine || !MettreCarre || !Description || Date){
        /*if(!Pays || !Ville || !Quartier || !Prix || !TypeCuisine || !MettreCarre || !Description || !Date){
            setMessage("Remplissez tous vos formulaires")
        }else{
            const urlPostAction= `http://api.tonlogementaucameroun.com/creerTaChambre/628778c28f9709dcb0317a22`
            //await axios.post(urlPostAction, {Pays,Ville,Quartier,Prix,TypeCuisine,MettreCarre,Description})
            await axios.post(urlPostAction,{Pays,Ville,Quartier,Prix,TypeCuisine,MettreCarre,Description,Date})
            .then((res)=> {
                console.log(res)
            })
        }*/
        const urlPostAction= `http://api.tonlogementaucameroun.com/creerTaChambre/${id}`
            //await axios.post(urlPostAction, {Pays,Ville,Quartier,Prix,TypeCuisine,MettreCarre,Description})
            console.log(Distance)
            await axios.post(urlPostAction,{
                Image:{Id,url},
                Image1:{Id1,url1},
                Image2:{Id2,url2},
                Image3:{Id3,url3},
                Image4:{Id4,url4},
                Image5:{Id5,url5},
                Image6:{Id6,url6},
                Pays,Ville,Quartier,Universite,Distance,Prix,TypeCuisine,MettreCarre,Description,Date,DoucheInterne,ChambrePiece,LitInterne})
            .then((res)=> {
                console.log(res)
            })
    }

    return (
        <div className="sidenav">
                                 <div>
                                    <input type="file"  onChange={uploadFile} /><br /><br />
                                    {/* {loading ?  (<p>Loading ....</p>) : (<img src={imageNew} alt="fileElement" className="imageVue2"/>)} */}
                                </div><br/>
            {/* <MenuDashBoard/> */}
            <h1 className="creerChambre">creer chambre</h1>
            <div className="creerChambreTout">
                <div></div>
                <div className="myForm">

                        <div>
                            <input type="file" onChange={uploadFile1} />
                            <input type="file" onChange={uploadFile2}/>
                            <input type="file" onChange={uploadFile3}/>
                            {/* <input type="file" placeholder="votre image"/> */}
                        </div>
                        <div>
                            <input type="file" onChange={uploadFile4}/>
                            <input type="file" onChange={uploadFile5}/>
                            <input type="file" onChange={uploadFile6}/>
                            {/* <input type="file" placeholder="votre image"/> */}
                        </div><br/>
                    
                <div className="ladivCreer">
                        <form className="divDetailCreerChambre">
                        <input type="text" placeholder="Entrer le pays" className="inputCreerChambre" onChange={(event)=>setPays(event.target.value)}/><br/>
                        <input type="text" placeholder="Entrer la ville" className="inputCreerChambre" onChange={(event)=>setVille(event.target.value)}/><br/>
                        <input type="text" placeholder="Entrer le Quartier" className="inputCreerChambre" onChange={(event)=>setQuartier(event.target.value)}/><br/>
                       
                        <select onChange={(event)=>setUniversite((event.target.value))} defaultValue={'DEFAULT'} name="cars" id="cars" className="inputCreerChambre">
                        <option value="DEFAULT" disabled>Sélectionner Votre Université</option>
                        <option value="Univesite Yaounde II">Université Yaoundé II/Soa</option>
                        <option value="Université Ngoa Ékélé">Université Ngoa Ékélé</option>
                        <option value="Enset de Douala">Enset de Douala</option>
                        {/* <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option> */}
                        </select><br/>
                        <input type="number" placeholder="le nombre de pièces"className="inputCreerChambre" onChange={(event)=>setChambrePiece(event.target.value)}/><br/>

                        <input type="number" placeholder="le prix de la chambre"className="inputCreerChambre" onChange={(event)=>setPrix(event.target.value)}/><br/>
                        <input type="text" placeholder="Entrer le Type de Cuisisne" className="inputCreerChambre" onChange={(event)=>setTypeCuisine(event.target.value)}/><br/>
                        <input type="Number" placeholder="Entrer le metre carré" className="inputCreerChambre" onChange={(event)=>setMettreCarre(event.target.value)}/><br/>
                        <input type="text" placeholder="Entrer la description" className="inputCreerChambre" onChange={(event)=>setDescription(event.target.value)}/><br/> 
                        <input type="Date" placeholder="Entrer la date" className="inputCreerChambre" onChange={(event)=>setDate(event.target.value)}/><br/> 
                        <input type="Number" placeholder="Entrer la distance face a l'université" className="inputCreerChambre" onChange={(event)=>setDistance(event.target.value)}/><br/> 
                        <input type="Number" placeholder="Entrer le Lit" className="inputCreerChambre" onChange={(event)=>setLitInterne(event.target.value)}/><br/>   
                        {/*<input type="date" id="birthday" name="birthday" className="inputCreerChambre" onChange={(event)=>setDate(event.target.value)}/> */}
                        <br/>
                        <p onClick={()=>EnregistrerChambre()} className="EnregistrerChambre">Creer Chambre</p>
                        <p>{message}</p>
                        </form>

                        
                </div>
              
                </div>
                <div></div>
            </div><br/>
            <Footer/>
        </div>
    );
};

export default CreerChambre;