import { Container, Image, Modal } from "react-bootstrap";
import QRCode from "react-qr-code";
import scanqr from "../../asset/img/scanqr.png";
import { useSelector } from "react-redux";
import { IoChevronBackCircle } from "react-icons/io5";

const ModalQR = ({
  showProp,
  repetedDishStateProp,
  handleShowModalCartProp,
  handleCloseModalQrProp,
}) => {
  const qntCartApp = useSelector((state) => state.cart.qnt);

  return (
    <Container className="m-0 p-0" fluid>
      <Modal
        show={showProp}
        centered
        onHide={() => {
          window.location.reload();
        }}
      >
        <Modal.Header closeButton className="me-5">
          <div className="d-flex flex-column align-items-center justify-content-center ms-1 gap-1">
            <IoChevronBackCircle
              cursor="pointer"
              color="#083759"
              fontSize={60}
              onClick={() => {
                handleCloseModalQrProp();
                handleShowModalCartProp();
              }}
            />
            <p className="fst-italic">Indietro</p>
          </div>
          <Container className="d-flex justify-content-center">
            <Image src={scanqr} width={60} />
            <p style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
              Mostra il QR alla cassa
            </p>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex justify-content-center">
            <QRCode
              className="m-4"
              value={
                repetedDishStateProp
                  ? JSON.stringify(repetedDishStateProp)
                  : "nulla da mostrare"
              }
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container className="d-flex flex-column align-items-center gap-1">
            <p className="text-center">
              Articoli Totali: <p className="fs-4">{qntCartApp}</p>
            </p>
            <p className="text-center">
              Chiudi dopo aver letto il QR in cassa, <b>Grazie!</b>
            </p>
          </Container>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default ModalQR;
