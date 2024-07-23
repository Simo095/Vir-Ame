import { Button, Container, Image } from "react-bootstrap";
import logoph from "../asset/img/logo.png";
import logoPos from "../asset/img/logopos.png";
import { FaRegHandPointer } from "react-icons/fa6";

import { useNavigate } from "react-router";
//import logoPos from "../asset/img/logopos.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      className="m-0 p-0 d-flex flex-column align-items-center justify-content-center mt-5"
    >
      <Container fluid className="m-0 p-0 text-center">
        <Image
          src={logoph}
          className="m-0 p-0 ms-2 "
          style={{ width: "300px" }}
        />
      </Container>
      <Container
        Container
        fluid
        className="m-0 p-0 d-flex flex-column align-items-center justify-content-center "
        style={{ height: "400px" }}
      >
        <Button
          variant="success"
          className="shadow-iconshome"
          style={{ width: "300px", height: "300px", borderRadius: "5000px" }}
          onClick={() => {
            navigate("/menu");
          }}
        >
          <h1 className="m-0 p-0 d-flex justify-content-center align-items-center ">
            Inizia A Ordinare!
          </h1>
          <FaRegHandPointer size={50} />
        </Button>
      </Container>

      <Container
        Container
        fluid
        className="m-0 p-0 d-flex flex-column align-items-center justify-content-center Footer"
      >
        <Image
          src={logoPos}
          className="m-0 p-0 ms-2 fle"
          style={{ width: "150px" }}
        />
      </Container>
    </Container>
  );
};
export default HomePage;
