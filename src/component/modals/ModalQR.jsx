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
  const menu = useSelector((state) => state.menu.menu);
  const exportRef = useRef();
  const getOrderedDishesText = () => {
    return Object.keys(repetedDishStateProp)
      .filter(
        (idDish) =>
          idDish !== "FS_QR" &&
          idDish !== "tavolo" &&
          idDish !== "richiestastock" &&
          idDish !== "note"
      )
      .map((idDish) => {
        const dish = menu.find((dish) => dish.id.toString() === idDish);
        return dish ? dish.name : null;
      })
      .filter((dishName) => dishName !== null)
      .join(", ");
  };

  const shareImageOnWhatsApp = async () => {
    const el = exportRef.current;
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });
    canvas.toBlob((blob) => {
      const file = new File([blob], "QR.png", { type: "image/png" });
      const filesArray = [file];
      const orderedDishesText = getOrderedDishesText();
      if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator.share({
          files: filesArray,
          title: "QR Code",
          text: `Ecco il QR code per i seguenti piatti ordinati: ${orderedDishesText}`,
        });
      } else {
        alert("Condivisione di file non supportata dal tuo browser.");
      }
    });
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
        <Modal.Body>
          <Container
            ref={exportRef}
            className="d-flex justify-content-center p-4"
          >
            <QRCode
              value={
                repetedDishStateProp
                  ? JSON.stringify(repetedDishStateProp)
                  : "nulla da mostrare"
              }
              size={256}
              level="H"
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container className="d-flex flex-column align-items-center gap-1">
            <p className="text-center">
              Articoli Totali: <span className="fs-4">{qntCartApp}</span>
            </p>
            <p className="text-center">
              Chiudi dopo aver letto il QR in cassa, oppure condividi il QR con
              WhatsApp{" "}
              <ImWhatsapp
                onClick={shareImageOnWhatsApp}
                cursor="pointer"
                size={40}
              />{" "}
              <b>Grazie!</b>
            </p>
          </Container>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ModalQR;
