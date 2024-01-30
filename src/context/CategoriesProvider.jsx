// Importaciones de módulos y servicios necesarios
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCategoriesService } from "../services/categories.service";

// Creación del contexto CategoriesContext
const CategoriesContext = createContext(null);

// Proveedor de contexto CategoriesProvider
const CategoriesProvider = ({ children }) => {

  // Estado para almacenar las categorías
  const [categories, setCategories] = useState([]);

  // Función para obtener las categorías desde el servicio
  const getCategories = async () => {
    try {
      
      // Llama al servicio para obtener los datos de categorías
      const categoriesData = await getCategoriesService();

       
      // Actualiza el estado 'categories' con los datos obtenidos
      setCategories(categoriesData);

    } catch (error) {
      console.log(error); // Maneja cualquier error ocurrido durante la obtención de categorías
    }
  };

  // Llama a getCategories una vez cuando el componente se monta por primera vez
  useEffect(() => {
    getCategories();
  }, []);

  // Crea el objeto de contexto con las categorías
  const contextValue = {
    categories,
  };

  // Retorna el proveedor de contexto que envuelve a los hijos con el contexto 'CategoriesContext'
  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};

// Define los PropTypes para el proveedor del contexto
CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exporta el proveedor de contexto y el contexto para su uso en otros componentes
export {
  CategoriesProvider,
  CategoriesContext 
};
