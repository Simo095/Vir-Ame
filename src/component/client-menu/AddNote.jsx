// eslint-disable-next-line no-unused-vars
import { Button, Container, Form } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addNoteOnStore } from "../../redux/action/cartAction";

const AddNote = () => {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.cart.note);
  return (
    <Container className="d-flex flex-column align-items-center">
      <h3 className="my-3">Inserisci le note per il tuo ordine</h3>
      <Container className="d-flex justify-content-center">
        <Form.Control
          as="textarea"
          className="w-75 mb-5"
          placeholder="Note aggiuntive"
          value={note}
          onChange={(e) => {
            dispatch(addNoteOnStore(e.target.value));
          }}
          rows={3}
        />
      </Container>
    </Container>
  );
};
export default AddNote;
