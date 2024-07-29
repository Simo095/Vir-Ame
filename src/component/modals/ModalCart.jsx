import { Col, Container, Modal, Row } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";

import { IoChevronBackCircle, IoBagCheck } from "react-icons/io5";

import { useEffect, useState } from "react";
//import { checkMenuBlob } from "../../redux/action/menuAction";
import { useSelector } from "react-redux";
import ModalCancel from "./ModalCancel";

const ModalCart = ({
  showProp,
  handleCloseProp,
  handleShowModalCartProp,
  repetedDishStateProp,
  deleteOrderedFoodProp,
  handleOrderProp,
  costoCopertiProp,
  notRightQuantityProp,
  errorDishInStockProp,
}) => {
  //const dispatch = useDispatch();
  //const noteAppProp = useSelector((state) => state.cart.note);
  const notRightQuantity = useSelector(
    (state) => state.errorCart.listDishNotInStock
  );
  const menuProp = useSelector((state) => state.menu.menu);
  const cartTotalProp = useSelector((state) => state.cart.total);

  const [showCancel, setShowCancel] = useState(false);
  const handleCloseCancel = () => setShowCancel(false);
  const handleShowCancel = () => setShowCancel(true);

  useEffect(() => {
    //dispatch(checkMenuBlob());
    return () => {
      if (notRightQuantity.length > 0) {
        notRightQuantity.map((id) =>
          repetedDishStateProp.map((dish) =>
            dish === "FS_QR"
              ? null
              : dish === "tavolo"
              ? null
              : dish === "richiestastock"
              ? null
              : dish === "note"
              ? null
              : parseInt(dish) === parseInt(id)
              ? delete repetedDishStateProp[id]
              : null
          )
        );
      }
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repetedDishStateProp, menuProp, notRightQuantity]);

  return (
    <Container fluid className="m-0 p-0">
      <Modal show={showProp} centered onHide={handleCloseProp}>
        <Modal.Header>
          <div className="d-flex flex-column align-items-center justify-content-center ms-1 gap-1">
            <IoChevronBackCircle
              cursor="pointer"
              color="#083759"
              fontSize={60}
              onClick={handleCloseProp}
            />
            <p className="fst-italic">Indietro</p>
          </div>
          <Container className="d-flex flex-column justify-content-center mb-5 p-0 ms-3">
            <span className="fs-2 fst-italic">Lista ordine</span>
          </Container>
        </Modal.Header>
        {errorDishInStockProp ? (
          <Modal.Body>
            <Row className="d-flex justify-content-between row-cols-2">
              <Col xs={7}>
                <span>Piatto</span>
              </Col>
              <Col xs={4}>
                <Row className="gap-4 ms-1">
                  <Col xs={3}>
                    <span>Qnt</span>
                  </Col>
                  <Col xs={3}>
                    <span>Prezzo</span>
                  </Col>
                </Row>
              </Col>
            </Row>

            {repetedDishStateProp
              ? Object.keys(repetedDishStateProp).map((idDish, i) =>
                  idDish === "FS_QR" ? null : idDish ===
                    "tavolo" ? null : idDish ===
                    "richiestastock" ? null : idDish === "note" ? null : (
                    <Row
                      className="d-flex justify-content-between row-cols-2"
                      key={i}
                    >
                      <Col xs={7}>
                        {/* Questa riga deve essere barrata per mostrare articoli non ordinabili piu perchè non in stock */}
                        {menuProp &&
                          menuProp.map((dish) =>
                            dish.id.toString() === idDish ? (
                              notRightQuantityProp &&
                              notRightQuantityProp.find(
                                (id) => id.toString() === idDish
                              ) ? (
                                <>
                                  <p style={{ textDecoration: "line-through" }}>
                                    {dish.name}
                                  </p>
                                  <p style={{ fontSize: "7px" }}>
                                    ...altri hanno concluso prima
                                  </p>
                                </>
                              ) : (
                                <p>{dish.name}</p>
                              )
                            ) : null
                          )}
                      </Col>
                      <Col xs={4}>
                        <p>
                          : {repetedDishStateProp[idDish]}x
                          {menuProp &&
                            menuProp.map((dish) =>
                              dish.id.toString() === idDish ? dish.price : null
                            )}
                          €
                        </p>
                      </Col>
                    </Row>
                  )
                )
              : null}

            <Container fluid className="m-0 p-0 mt-3">
              <Row className="text-end">
                <Col xs={12}>
                  <div className="fw-bold me-2 mt-2 fs-5 d-flex flex-column">
                    <span>Totale: €{parseFloat(cartTotalProp).toFixed(2)}</span>
                  </div>
                </Col>
              </Row>
              {/* <Row>
                <Col xs={7}>
                  <span>Note</span>
                </Col>
              </Row>
              {noteAppProp} */}
            </Container>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <Row className="d-flex justify-content-between row-cols-2">
              <Col xs={7}>
                <span>Piatto</span>
              </Col>
              <Col xs={4}>
                <Row className="gap-4 ms-1 mb-3">
                  <Col xs={3}>
                    <span>Qnt</span>
                  </Col>
                  <Col xs={3}>
                    <span>Prezzo</span>
                  </Col>
                </Row>
              </Col>
            </Row>

            {repetedDishStateProp
              ? Object.keys(repetedDishStateProp).map((idDish, i) =>
                  idDish === "FS_QR" ? null : idDish ===
                    "tavolo" ? null : idDish ===
                    "richiestastock" ? null : idDish === "note" ? null : (
                    <Row
                      className="d-flex justify-content-between row-cols-2"
                      key={i}
                    >
                      <Col xs={7}>
                        <p>
                          {menuProp &&
                            menuProp.map((dish) =>
                              dish.id.toString() === idDish ? dish.name : null
                            )}
                        </p>
                      </Col>
                      <Col xs={4}>
                        <Row className="gap-4 ms-1">
                          <Col className="ms-2" xs={3}>
                            {repetedDishStateProp[idDish]}
                          </Col>

                          <Col className="text-end" xs={3}>
                            {menuProp &&
                              menuProp.map((dish) =>
                                dish.id.toString() === idDish
                                  ? dish.price % 1 !== 0
                                    ? "€" +
                                      dish.price.toString().replace(".", ",") +
                                      "0"
                                    : "€" + dish.price.toString() + ",00"
                                  : null
                              )}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  )
                )
              : null}
            <Container fluid className="m-0 p-0 mt-3">
              <Row className="text-end">
                <Col xs={12}>
                  <div className="fw-bold me-2 mt-2 fs-5 d-flex flex-column">
                    <span>
                      Totale: € {parseFloat(cartTotalProp).toFixed(2)}
                    </span>
                  </div>
                </Col>
              </Row>
              {/* <Row className="" style={{ borderTop: "1px solid #aaa" }}>
                <Col xs={7}>
                  <span>Note</span>
                </Col>
              </Row>
              <p className="fst-italic">{noteAppProp}</p> */}
            </Container>
          </Modal.Body>
        )}

        <Modal.Footer className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center gap-1 border-PayCart">
            <IoIosCloseCircle
              onClick={() => {
                handleShowCancel();
                handleCloseProp();
              }}
              cursor="pointer"
              color="#083759"
              fontSize={60}
            ></IoIosCloseCircle>
            <p className="m-0 p-0 fst-italic">Cancella</p>
          </div>
          <div className="d-flex gap-4">
            <div className="d-flex flex-column align-items-center gap-1 border-PayCart">
              <IoBagCheck
                onClick={() => {
                  handleOrderProp();
                  handleCloseProp();
                }}
                cursor="pointer"
                color="#083759"
                fontSize={60}
              ></IoBagCheck>

              <p className="fst-italic">Ordina</p>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
      <ModalCancel
        showCancel={showCancel}
        handleCloseCancel={handleCloseCancel}
        handleShowCancel={handleShowCancel}
        handleShowModalCart={handleShowModalCartProp}
      />
      ;
    </Container>
  );
};
export default ModalCart;
