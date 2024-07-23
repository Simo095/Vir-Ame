import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import ModalCart from "../modals/ModalCart";
import ModalQR from "../modals/ModalQR";
import logo from "../../asset/img/logoHeaderFest.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  modifyObjToDB,
  checkObjToDBAndMenu,
} from "../../redux/action/cartAction";

const HeaderMenu = () => {
  const [showModalCart, setShowModalCart] = useState(false);
  const [showModalQr, setShowModalQr] = useState(false);

  const handleCloseModalCart = () => setShowModalCart(false);
  const handleShowModalCart = () => setShowModalCart(true);
  const handleShowModalQr = () => setShowModalQr(true);
  const handleCloseModalQr = () => setShowModalQr(false);
  const deleteOrderedFood = () => window.location.reload();

  const notify = useSelector((state) => state.cart.notify);
  const note = useSelector((state) => state.cart.note);
  const coveredCost = useSelector((state) => state.cart.covered);
  const qntCartApp = useSelector((state) => state.cart.qnt);
  const orderFood = useSelector((state) => state.cart.orderedFood);
  const objToDB = useSelector((state) => state.cart.objIdDishQnt);
  const notRightQuantity = useSelector(
    (state) => state.errorCart.listDishNotInStock
  );
  const errorDishInStock = useSelector(
    (state) => state.errorCart.errorDishNotRightStock
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(modifyObjToDB(orderFood, note));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderFood]);

  return (
    <Container fluid className="m-0 p-0">
      <Navbar
        className="bg-body-tertiary fixed-top d-flex flex-grow-1"
        style={{ borderBottom: "5px solid" }}
      >
        <Row className="d-flex flex-grow-1">
          <Col
            xs={9}
            style={{
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              backgroundSize: "240px",
              backgroundRepeat: "no-repeat",
            }}
          ></Col>
          <Col xs={2}>
            <Container
              fluid
              className="d-flex flex-column gap-2 align-items-end m-0 p-o"
            >
              {notify ? (
                <Button
                  className="d-flex justify-content-center align-items-center position-relative shadow-icons "
                  onClick={() => {
                    dispatch(
                      checkObjToDBAndMenu(
                        objToDB,
                        notRightQuantity,
                        handleShowModalCart
                      )
                    );
                  }}
                  style={{
                    backgroundColor: "#00000000",
                    border: "solid 2px black",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    cursor: "pointer",
                    boxShadow: "5px 5px 15px 5px #083759",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "-6px",
                      top: "-6px",
                    }}
                  >
                    {qntCartApp}
                  </span>
                  <FaShoppingCart fontSize={30} color="black" />
                </Button>
              ) : (
                <Button
                  className="d-flex justify-content-center align-items-center position-relative shadow-icons "
                  onClick={() => {
                    handleShowModalCart();
                  }}
                  style={{
                    backgroundColor: "#00000000",
                    border: "solid 2px black",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    cursor: "pointer",
                  }}
                >
                  <FaShoppingCart fontSize={30} color="black" />
                </Button>
              )}
              <Button
                className="d-flex justify-content-center align-items-center shadow-icons"
                href="#top"
                style={{
                  backgroundColor: "#00000000",
                  border: "solid 2px black",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                }}
              >
                <FaArrowCircleUp color="black" fontSize={30} />
              </Button>
            </Container>
          </Col>
        </Row>
      </Navbar>

      <ModalCart
        showProp={showModalCart}
        handleCloseProp={handleCloseModalCart}
        handleShowModalCartProp={handleShowModalCart}
        repetedDishStateProp={objToDB}
        deleteOrderedFoodProp={deleteOrderedFood}
        handleOrderProp={handleShowModalQr}
        costoCopertiProp={coveredCost}
        notRightQuantityProp={notRightQuantity}
        errorDishInStockProp={errorDishInStock}
      />
      <ModalQR
        showProp={showModalQr}
        repetedDishStateProp={objToDB}
        handleShowModalCartProp={handleShowModalCart}
        handleCloseModalQrProp={handleCloseModalQr}
      />
    </Container>
  );
};
export default HeaderMenu;
