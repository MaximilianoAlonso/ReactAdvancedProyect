import {Container, Row, Col} from "react-bootstrap"

export const NotFound = () => {
  return (
<Container style={{backgroundColor:"red"}}>
    <Row>
        <Col md={12}> 
        <h1 className="text-center text-white">404</h1>
        <p className="text-center text-white">Pagina no encontrada</p>
        </Col>
    </Row>
</Container>
  )
}
