// Importamos la librería axios para realizar peticiones HTTP
import axios from 'axios';

// Traemos la variable de entorno seteada en el archivo .env
const apiUrl = import.meta.env.VITE_API_URL;

// Definimos una función asincrónica llamada filterDrinksService para filtrar bebidas por ingrediente y categoría
export const filterDrinksService = async (ingredient, category) => {
    try {
        // Construimos la URL de la API para filtrar bebidas por ingrediente y categoría
        const url = `${apiUrl}filter.php?i=${ingredient}&c=${category}`;

        // Realizamos una petición GET a la API utilizando axios
        const { data } = await axios.get(url);

        // Retornamos las bebidas filtradas obtenidas de la respuesta de la API, o un array vacío si no hay bebidas
        return data.drinks || [];
    } catch (error) {
        // Capturamos cualquier error que pueda ocurrir durante la petición o procesamiento de datos
        console.error(error);

        // Lanzamos una nueva instancia de Error con un mensaje específico
        throw new Error("Error al obtener la bebida");
    }
};
export const getRecipeService = async (drinkId) => {
    try {
        const url = `${apiUrl}lookup.php?i=${drinkId}`;
        const { data } = await axios.get(url);
        return data.drinks[0] || [];

    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener la receta");
    }
}