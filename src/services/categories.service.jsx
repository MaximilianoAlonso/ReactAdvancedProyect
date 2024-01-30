// Importamos la librería axios para realizar peticiones HTTP
import axios from "axios";

// Traemos la variable de entorno seteada en el archivo .env
// (La variable VITE_API_URL debe ser configurada en el entorno de desarrollo)
const apiURL = import.meta.env.VITE_API_URL;

// Definimos una función asincrónica llamada getCategoriesService para obtener las categorías desde la API
export const getCategoriesService = async () => {
  try {
    // Construimos la URL de la API para obtener la lista de categorías
    const url = `${apiURL}list.php?c=list`;

    // Realizamos una petición GET a la API utilizando axios
    const { data } = await axios.get(url);

    // Retornamos las categorías obtenidas de la respuesta de la API, o un array vacío si no hay categorías
    return data.drinks || [];
  
  } catch (error) {
    // Capturamos cualquier error que pueda ocurrir durante la petición o procesamiento de datos
    console.error(error);

    // Lanzamos una nueva instancia de Error con un mensaje específico
    throw new Error("Hubo un error al obtener categorías");
  }
};
