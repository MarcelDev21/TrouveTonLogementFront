import React, {useState} from 'react';
import './NewUser.css'
import axios from 'axios';

const NewUser = () => {

    const [NomUser, setNomUser] = useState()
    const [Password, setPassword] = useState()
    const [ConfirmerPassword, setConfirmerPassword] = useState()
    const [Message, setMessage] = useState("")

    const CreerNewUser = async() => {
        if(Password !== ConfirmerPassword){
            setMessage("Verifiez Vos Mots de Passe")
        }else{
            const urlPostUser = `http://localhost:5000/creerUnUtilisateur`
            await axios.post(urlPostUser,{"Nom":NomUser, "Password": Password}).then((res)=>{
                console.log(res)
                setMessage(res.data.Message)
            })
        }
    }

    return (
        <div>
          <h1>new User</h1>  
          <div className="NewUserGeneral">
              <div></div>
              <div className="toutUser">
                  <h5 className="nouvelUtilisateur">Creer Un Nouvel Utilisateur</h5>
                  <form>
                      <input type="text" placeholder="Entrer votre Nom" className="newUserInput" onChange={(event)=> setNomUser(event.target.value)}/><br/><br/>
                      <input type="password" placeholder="Entrer votre Password" className="newUserInput" onChange={(event)=> setPassword(event.target.value)}/><br/><br/>
                      <input type="password" placeholder="Confirmer Votre Mot de passe" className="newUserInput" onChange={(event)=> setConfirmerPassword(event.target.value)}/><br/><br/>
                      <div
                      onClick={()=> CreerNewUser()}>
                          <p className="messageUser">{Message}</p>
                          <p className="CreerUser">Creer Votre User</p>
                      </div>
                  </form>
              </div>
              <div></div>
          </div>
        </div>
    );
};

export default NewUser;