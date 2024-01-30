// Importamos los módulos y componentes necesarios
import { AppRoutes } from './routes'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { MainLayout } from './layout'
import { UserProvider } from './context/UserProvider'
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from './context/DrinksProvider'

// Definimos el componente principal de la aplicación llamado App
function App() {
  return (
    // Utilizamos los proveedores de contexto para gestionar el estado global de la aplicación
    <UserProvider>
      <CategoriesProvider>
        <DrinksProvider>
          
          {/* Utilizamos el componente de diseño principal (MainLayout) que envuelve la aplicación */}
          <MainLayout>
            {/* Dentro de MainLayout, se renderiza la vista según la ruta gracias a AppRoutes */}
            <AppRoutes/>
          </MainLayout>

        </DrinksProvider>
      </CategoriesProvider>
    </UserProvider>
  )
}

// Exportamos el componente App como componente principal de la aplicación
export default App
