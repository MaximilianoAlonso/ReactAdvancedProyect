// Importación de módulos necesarios de React y PropTypes
import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Importación de un servicio externo para filtrar bebidas
import { filterDrinksService, getRecipeService } from '../services/drinks.service'

// Creación de un contexto llamado DrinksContext
const DrinksContext = createContext(null)

// Definición de un proveedor de contexto llamado DrinksProvider
const DrinksProvider = ({ children }) => {
    // Estado para almacenar la lista de bebidas
    const [drinks, setDrinks] = useState([])
    const [loading, setLoading] =useState(false)
    const [recipe, setRecipe] = useState({})
    const [idDrink, setIdDrink] = useState(null);
    const [showModal, setShowModal] = useState(false);


    

    // Función asincrónica para obtener bebidas filtradas según ingredientes y categorías
    const getDrinks = async (data) => {
        try {
            // Desestructuración de datos para obtener ingredientes y categorías
            const { ingredient, category } = data

            setLoading(true)
            // Llamada al servicio externo para obtener datos filtrados
            const drinkData = await filterDrinksService(ingredient, category)

            // Actualización del estado con los datos de bebidas filtradas
            setDrinks(drinkData)

            // Imprimir datos en la consola (puede ser útil para depuración)
            console.log(drinkData)

            // Devolver los datos obtenidos
            return drinkData
        } catch (error) {
            // Manejo de errores en caso de falla en la obtención de datos
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

   
    useEffect(() => {

   const getRecipe = async () => {
    if(!idDrink) return 
        try {
            setLoading(true)
            const recipeData = await getRecipeService(idDrink)
            setRecipe(recipeData)
            setShowModal((show) => !show)
            
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
          getRecipe();
    

    }, [idDrink]);


    const handleDrinkIdClick = (id) => {
        setIdDrink(id)
    }
    const handleShowModalClick = () =>{
        setShowModal((show) => !show)
    }

    // Valor del contexto que contiene la lista de bebidas y la función para obtener bebidas
    const contextValue = {
        drinks,
        getDrinks,
        loading,
        handleDrinkIdClick,
        recipe,
        showModal,
        handleShowModalClick
    }

    // Renderizamos el proveedor de contexto y sus hijos
    return (
        <DrinksContext.Provider value={contextValue}>
            {children}
        </DrinksContext.Provider>
    )
}

// Validación de tipos de las propiedades del proveedor
DrinksProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

// Exportamos el contexto (DrinksContext) y el proveedor (DrinksProvider)
export {
    DrinksContext,
    DrinksProvider,
}
