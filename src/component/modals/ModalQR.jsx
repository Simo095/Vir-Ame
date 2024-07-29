import { Container, Image, Modal } from "react-bootstrap";
import QRCode from "react-qr-code";
import scanqr from "../../asset/img/scanqr.png";
import { useSelector } from "react-redux";
import { ImWhatsapp } from "react-icons/im";
import { IoChevronBackCircle } from "react-icons/io5";
import { useRef } from "react";
import html2canvas from "html2canvas";

const ModalQR = ({
  showProp,
  repetedDishStateProp,
  handleShowModalCartProp,
  handleCloseModalQrProp,
}) => {
  const qntCartApp = useSelector((state) => state.cart.qnt);

  const exportRef = useRef();

  const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };

  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };
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
        <Modal.Body ref={exportRef}>
          <Container className="d-flex justify-content-center">
            <QRCode
              className="m-4 p-3"
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
              Chiudi dopo aver letto il QR in cassa, oppure condividi il QR con
              What App <b>Grazie!</b>
            </p>
            <ImWhatsapp
              onClick={() => {
                exportAsImage(exportRef.current, "QR");
              }}
            />
          </Container>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default ModalQR;
