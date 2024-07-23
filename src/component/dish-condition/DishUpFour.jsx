import { Col, Container, Row } from "react-bootstrap";
import Numero from "../client-menu/Numero";

const DishUpFour = ({ dish }) => {
  return (
    <Container fluid className="m-0 p-0" key={dish.id}>
      <Row
        className="row-cols-3 align-items-center d-flex w-100"
        style={{ minHeight: "90px" }}
      >
        <Col className="m-0 p-0 d-flex flex-grow-1" xs={4}>
          <span className="fs-5 fw-bold flex-grow-1 m-0 p-0 ps-3">
            {dish.name}
          </span>
        </Col>
        <Col className="m-0 p-0 d-flex flex-grow-0" xs={2}>
          <span className="fs-4 fw-bold m-0">
            {dish.price % 1 !== 0
              ? "€" + dish.price.toString().replace(".", ",") + "0"
              : "€" + dish.price.toString() + ",00"}
          </span>
        </Col>
        <Col className="m-0 p-0 d-flex flex-grow-0" xs={5}>
          <Numero specificDish={dish} />
        </Col>
      </Row>
    </Container>
  );
};
export default DishUpFour;
