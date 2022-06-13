import AppRouter from "./Routers/AppRouter";
import { Provider } from 'react-redux';
import store from './Redux/Store/Store'
import {useEffect, useReducer} from 'react'
import AuthContext from "./Redux/AuthContext";
import AuthReducer from "./Redux/AuthReducer";

function App() {

  const init = () => {
    return  JSON.parse (localStorage.getItem('user')) || {logged : false}
  }

  const [user, dispatch] = useReducer(AuthReducer,{}, init)

  useEffect(()=>{
    if(!user) return;
    localStorage.setItem('user', JSON.stringify(user))
   },[user])

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{user,dispatch}}>
        <AppRouter/>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;