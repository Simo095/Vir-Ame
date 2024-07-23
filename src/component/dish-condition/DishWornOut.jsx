import { Col, Container, Row } from "react-bootstrap";
import Numero from "../client-menu/Numero";

const DishWornOut = ({ dish }) => {
  return (
    <Container fluid className="m-0 p-0" key={dish.id}>
      <Row
        className="row-cols-3 align-items-center d-flex w-100"
        style={{ minHeight: "90px" }}
      >
        <Col className="m-0 p-0 d-flex flex-grow-1" xs={4}>
          <span style={{ color: "#ababab" }} className="fs-5">
            {dish.name.length > 18
              ? dish.name.substring(0, 15) + "..."
              : dish.name}
          </span>
        </Col>
        <Col className="m-0 p-0 d-flex flex-grow-0" xs={2}>
          <span style={{ color: "#ababab" }} className="fs-6 fw-bold m-0">
            {dish.price % 1 !== 0
              ? "€" + dish.price.toString().replace(".", ",") + "0"
              : "€" + dish.price.toString() + ",00"}
          </span>
          <p className="m-0" style={{ color: "red", fontSize: "0.7rem" }}>
            Esaurito
          </p>
        </Col>
        <Col className="m-0 p-0 d-flex flex-grow-0" xs={5}>
          <Numero specificDish={dish} />
        </Col>
      </Row>
    </Container>
  );
};
export default DishWornOut;
