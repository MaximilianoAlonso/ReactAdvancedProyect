// Importación de módulos necesarios de React y PropTypes
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Creamos un contexto llamado UserContext
const UserContext = createContext(null);

// Definimos un proveedor de contexto llamado UserProvider
const UserProvider = ({ children }) => {
  // Estado para almacenar la información del usuario
  const [user, setUser] = useState(null);

  // Datos de ejemplo del usuario
  const userData = {
    name: "Maxi",
    edad: 37,
    email: "asdasdd@as.com",
  };

  // Función para realizar el inicio de sesión
  const login = () => {
    setUser(userData);
  };

  // Función para realizar el cierre de sesión
  const logout = () => {
    setUser(null);
  };

  // Valor del contexto que contiene el estado del usuario y las funciones de inicio y cierre de sesión
  const contextValue = {
    user,
    login,
    logout,
  };

  // Renderizamos el proveedor de contexto y sus hijos
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

// Validación de tipos de las propiedades del proveedor
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exportamos el contexto (UserContext) y el proveedor (UserProvider)
export { UserContext, UserProvider };
