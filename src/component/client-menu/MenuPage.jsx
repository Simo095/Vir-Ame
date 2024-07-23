import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import HeaderMenu from "./HeaderMenu";
import GroupButton from "./GroupButton";
import Dishes from "./Dishes";
//import AddNote from "./AddNote";
import menu_image from "../../asset/img/menu_not_found.png";

const MenuPage = () => {
  const notFound = useSelector((state) => state.menu.notFound);

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center m-0 p-0"
    >
      {notFound ? (
        <Container
          style={{
            height: "100vh",
          }}
          className="d-flex align-items-center justify-content-center"
        >
          <Row className="">
            <Col
              xs={5}
              style={{
                backgroundImage: `url(${menu_image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Col>
            <Col
              xs={5}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <h2>Non Trovo Il Menu....</h2>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid id="#top" className="p-0 m-0">
          <HeaderMenu />
          <Container
            fluid
            className="m-0 p-0 px-3"
            style={{ position: "relative", top: "130px" }}
          >
            <GroupButton />
            <Dishes />
            <Container style={{ minheight: "100px" }}></Container>
            {/* <AddNote /> */}
          </Container>
        </Container>
      )}
    </Container>
  );
};
export default MenuPage;
