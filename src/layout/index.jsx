import { Container } from "react-bootstrap"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import styles from "./index.module.css"
import  PropTypes  from "prop-types"

/* MainLayout envia el Header y Footer al app.jsx, en el medio el children. Luego reemplazado por AppRoutes, onde va a traer el contenido del "main" en este caso dependiendo de la ruto  */
export const MainLayout = ({children}) => {
  return (
    <div className={styles.body}>

        <Header/>
        <Container className={styles.main} >
            {children}
        </Container>
        <Footer/>

    </div>
  )
}

MainLayout.propTypes = {
    children : PropTypes.node.isRequired
}
