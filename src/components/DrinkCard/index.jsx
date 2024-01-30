
import { Button, Card, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import useDrinks from '../../hooks/useDrinks';

export const DrinkCard = ({drink}) => {
    const { strDrinkThumb, strDrink, idDrink } = drink;
    const { handleDrinkIdClick } = useDrinks()
  return (
    <Col md={6} lg={3} className={`p-1 ${styles.drinksResults}`}>
        <Card className='mb-4'>
            <Card.Img
            variant='top'
            src={strDrinkThumb}
            altsrc={`imagen de ${strDrink}`}/>

        <Card.Body>
            <Card.Title>
                {strDrink }
            </Card.Title>
            <Button
            variant={"warning"}
            className='w-100 text-uppercase mt-2'
            onClick={() => {handleDrinkIdClick(idDrink);
          }}>  
                Ver Receta
            </Button>
          </Card.Body>
        </Card>
    </Col>
  )
}
DrinkCard.propTypes = {
    drink : PropTypes.object.isRequired,
    strDrinkThumb : PropTypes.string.isRequired,
    strDrink : PropTypes.string.isRequired
}