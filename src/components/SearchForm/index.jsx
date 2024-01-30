
import { Field, Formik, ErrorMessage } from 'formik'
import { Form, Row, Col, Button } from 'react-bootstrap'
import * as Yup from 'yup'
import useCategories from '../../hooks/useCategories'
import useDrinks from '../../hooks/useDrinks'




export const SearchForm = () => {

  const { categories } = useCategories()
  const { getDrinks, loading } = useDrinks()
  


  const initialValues = {
    ingredient: "",
    category: ""
  }

  const validationSchema = Yup.object({
    ingredient: Yup.string().required("Debes ingresar un nombre"),
    category: Yup.string().required("Debes elegir una categoria")
  })

  const handleSubmit = (values) => {
getDrinks(values)

  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}

    >
      {
        (Formik) => (
          
          <Form onSubmit={Formik.handleSubmit} 
                  className='m-4'
                >
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='ingredient'>Nombre de la bebida</Form.Label>
                  <Field
                    id="ingredient"
                    type="text"
                    placeholder="ej. Tequila, Vodka, etc."
                    name="ingredient"
                    as={Form.Control}
                  />
                  <ErrorMessage name='ingredient' component={Form.Text} className='text-danger ms-2' />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='category'>Categoría Bebida</Form.Label>
                  <Field
                    id="category"
                    name="category"
                    as={Form.Select} >
                    <option value="" disabled hidden> - Seleccione Categoría - </option>
{/* Dibuja las categorias en los options */}
                    {categories.sort((a, b) => (
                      a.strCategory.localeCompare(b.strCategory)))
                      .map(category => (

                      <option 
                      key={category.strCategory} 
                      value={category.strCategory}>
                        {category.strCategory}
                        </option>

                    ))}
                  </Field>
                  <ErrorMessage name='category' component={Form.Text} className='text-danger ms-2' />

                </Form.Group>
              </Col>
            </Row>

{/* BOTOn SUBMIT */}
            <Row className='justify-content-end mt-3'>
              <Col md={3}>
                <Button 
                disabled={loading}
                variant='danger' 
                className='w-100' 
                type='submit'>
                  {
                    loading  ? "Buscando..." : "Buscar Bebidas"
                  }
                </Button>
              </Col>
            </Row>

          </Form>
          
        )
      }
    </Formik>
   
  )
}
