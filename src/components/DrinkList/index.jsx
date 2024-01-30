
import useDrinks from "../../hooks/useDrinks"
import { DrinkCard } from "../DrinkCard"
import PropTypes from 'prop-types'

export const DrinksList = () => {
    const {drinks} = useDrinks()
  return (
  <div>
        {
            drinks.map(drink => (
                <DrinkCard key={drink.idDrink} drink = {drink} />
            ))
        }

  </div>
  )
}
DrinkCard.propTypes = {
    drink : PropTypes.string.inRequired,
    
 
}