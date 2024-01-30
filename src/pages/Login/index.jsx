import { Link } from "react-router-dom"
import useUser from "../../hooks/useUser"
import {useEffect} from 'react'

export const Login = () => {

  const {user ,  login} = useUser()
  
  /* esto creaba un bucle infinito al loguearse: 
  useEffect(() => {
  login()
  }, [login]);*/

  /* Asi se arregla el problema */
  useEffect(() => {
    if (!user) {
      login()
    }
  }, [user,login]);
  
  return (
    <>
       <h1>Login</h1>
       <hr/>
       {user 
       ? <h2>Bienvenido, {user.name} </h2>
        : <p>Cargando usuario...</p>
      }
      
       <Link to={'/'}>Volver a Home</Link>
    </>
  )
} 
