import { Modal, ListGroup } from "react-bootstrap";
import useDrinks from "../../hooks/useDrinks";

export const DrinkModalDetail = () => {
  const { showModal, handleShowModalClick, recipe } = useDrinks();
  const { strDrink, strInstructions } = recipe;

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (recipe[ingredientKey]) {
        const ingredient = recipe[ingredientKey];
        const measure = recipe[measureKey] || 'To taste';
        ingredients.push(`${ingredient}: ${measure}`);
      }
    }
    return ingredients;
  };

  return (
    <Modal show={showModal} onHide={handleShowModalClick}>
      <Modal.Header closeButton>
        <Modal.Title>{strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{strInstructions}</Modal.Body>

      <Modal.Body>
        <ListGroup>
          {getIngredients().map((ingredient, index) => (
            <ListGroup.Item key={index}>{`${index} : ${ingredient}`}</ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};
