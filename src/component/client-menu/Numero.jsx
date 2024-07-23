import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addDishOnStore,
  addQntCartOnStore,
  minusQntCartOnStore,
  minusTotalCart,
  notifyCondition,
  orderedFoodOnStore,
  plusTotalCart,
} from "../../redux/action/cartAction";

const Numero = ({ specificDish }) => {
  const dispatch = useDispatch();
  const orderFood = useSelector((state) => state.cart.orderedFood);
  const qntCart = useSelector((state) => state.cart.qnt);
  const [qnt, setQnt] = useState(0);

  useEffect(() => {
    const quantityInOrder = orderFood.filter(
      (id) => id === specificDish.id
    ).length;
    setQnt(quantityInOrder);
  }, [orderFood, specificDish.id]);

  const handleAdd = () => {
    if (specificDish.stock > qnt) {
      dispatch(addQntCartOnStore());
      dispatch(addDishOnStore(specificDish.id));
      dispatch(plusTotalCart(parseFloat(specificDish.price)));
      dispatch(notifyCondition(true));
      setQnt(qnt + 1);
    }
  };

  const handleMinus = () => {
    if (qnt > 0) {
      dispatch(minusTotalCart(parseFloat(specificDish.price)));
      dispatch(minusQntCartOnStore());
      setQnt(qnt - 1);

      const updatedOrderFood = orderFood.filter((id, index) => {
        return (
          id !== specificDish.id || index !== orderFood.indexOf(specificDish.id)
        );
      });
      dispatch(orderedFoodOnStore(updatedOrderFood));

      if (qntCart === 1) {
        dispatch(notifyCondition(false));
      }
    }
  };

  return (
    <Row className="d-flex align-items-center">
      <Col xs={4}>
        <FaMinusCircle
          className="shadow-icons"
          style={{ fontSize: 50, color: "#083759", cursor: "pointer" }}
          onClick={handleMinus}
        />
      </Col>
      <Col xs={4}>
        <div className="d-flex justify-content-center align-items-center numero">
          <span className="fs-1">{qnt}</span>
        </div>
      </Col>
      <Col xs={4}>
        <FaPlusCircle
          className="shadow-icons"
          style={{ fontSize: 50, color: "#083759", cursor: "pointer" }}
          onClick={handleAdd}
        />
      </Col>
    </Row>
  );
};

export default Numero;
