// Importamos el hook useContext de React para consumir contextos
import { useContext } from 'react'

// Importamos el contexto CategoriesContext desde CategoriesProvider
import { CategoriesContext } from '../context/CategoriesProvider'

// Definimos un hook personalizado llamado useCategories
const useCategories = () => {
    // Utilizamos el hook useContext para acceder al valor del contexto CategoriesContext
    return useContext(CategoriesContext)
}

// Exportamos el hook personalizado useCategories
export default useCategories
