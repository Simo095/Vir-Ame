// import { Container, Image, Modal } from "react-bootstrap";
// import QRCode from "react-qr-code";
// import scanqr from "../../asset/img/scanqr.png";
// import { useSelector } from "react-redux";
// import { ImWhatsapp } from "react-icons/im";
// import { IoChevronBackCircle } from "react-icons/io5";
// import { useRef } from "react";
// import html2canvas from "html2canvas";

// const ModalQR = ({
//   showProp,
//   repetedDishStateProp,
//   handleShowModalCartProp,
//   handleCloseModalQrProp,
// }) => {
//   const qntCartApp = useSelector((state) => state.cart.qnt);

//   const exportRef = useRef();

//   const exportAsImage = async (el, imageFileName) => {
//     const canvas = await html2canvas(el);
//     const image = canvas.toDataURL("image/png", 1.0);
//     downloadImage(image, imageFileName);
//   };

//   const downloadImage = (blob, fileName) => {
//     const fakeLink = window.document.createElement("a");
//     fakeLink.style = "display:none;";
//     fakeLink.download = fileName;

//     fakeLink.href = blob;

//     document.body.appendChild(fakeLink);
//     fakeLink.click();
//     document.body.removeChild(fakeLink);

//     fakeLink.remove();
//   };
//   return (
//     <Container className="m-0 p-0" fluid>
//       <Modal
//         show={showProp}
//         centered
//         onHide={() => {
//           window.location.reload();
//         }}
//       >
//         <Modal.Header closeButton className="me-5">
//           <div className="d-flex flex-column align-items-center justify-content-center ms-1 gap-1">
//             <IoChevronBackCircle
//               cursor="pointer"
//               color="#083759"
//               fontSize={60}
//               onClick={() => {
//                 handleCloseModalQrProp();
//                 handleShowModalCartProp();
//               }}
//             />
//             <p className="fst-italic">Indietro</p>
//           </div>
//           <Container className="d-flex justify-content-center">
//             <Image src={scanqr} width={60} />
//             <p style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
//               Mostra il QR alla cassa
//             </p>
//           </Container>
//         </Modal.Header>
//         <Modal.Body>
//           <Container ref={exportRef} className="d-flex justify-content-center">
//             <QRCode
//               className="m-4"
//               value={
//                 repetedDishStateProp
//                   ? JSON.stringify(repetedDishStateProp)
//                   : "nulla da mostrare"
//               }
//             />
//           </Container>
//         </Modal.Body>
//         <Modal.Footer>
//           <Container className="d-flex flex-column align-items-center gap-1">
//             <p className="text-center">
//               Articoli Totali: <p className="fs-4">{qntCartApp}</p>
//             </p>
//             <p className="text-center">
//               Chiudi dopo aver letto il QR in cassa, oppure condividi il QR con
//               What App <b>Grazie!</b>
//             </p>
//             <ImWhatsapp
//               onClick={() => {
//                 exportAsImage(exportRef.current, "QR");
//               }}
//             />
//           </Container>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };
// export default ModalQR;

//QUATO SOTTO FUNZIA!!

// import { Container, Image, Modal } from "react-bootstrap";
// import QRCode from "react-qr-code";
// import scanqr from "../../asset/img/scanqr.png";
// import { useSelector } from "react-redux";
// import { ImWhatsapp } from "react-icons/im";
// import { IoChevronBackCircle } from "react-icons/io5";
// import { useRef, useEffect, useState } from "react";
// import html2canvas from "html2canvas";

// const ModalQR = ({
//   showProp,
//   repetedDishStateProp,
//   handleShowModalCartProp,
//   handleCloseModalQrProp,
// }) => {
//   const qntCartApp = useSelector((state) => state.cart.qnt);

//   const exportRef = useRef();
//   const [qrKey, setQrKey] = useState(0); // Force re-render of QR code

//   useEffect(() => {
//     setQrKey((prevKey) => prevKey + 1); // Increment key to force re-render
//   }, [repetedDishStateProp]);

//   const exportAsImage = async (el, imageFileName) => {
//     const canvas = await html2canvas(el, {
//       scale: 2, // Increase resolution
//       useCORS: true, // Handle cross-origin issues
//       backgroundColor: null, // Ensure background is transparent
//     });
//     const image = canvas.toDataURL("image/png", 1.0);
//     downloadImage(image, imageFileName);
//   };

//   const downloadImage = (blob, fileName) => {
//     const fakeLink = window.document.createElement("a");
//     fakeLink.style.display = "none";
//     fakeLink.download = fileName;

//     fakeLink.href = blob;

//     document.body.appendChild(fakeLink);
//     fakeLink.click();
//     document.body.removeChild(fakeLink);

//     fakeLink.remove();
//   };

//   return (
//     <Container className="m-0 p-0" fluid>
//       <Modal
//         show={showProp}
//         centered
//         onHide={() => {
//           window.location.reload();
//         }}
//       >
//         <Modal.Header closeButton className="me-5">
//           <div className="d-flex flex-column align-items-center justify-content-center ms-1 gap-1">
//             <IoChevronBackCircle
//               cursor="pointer"
//               color="#083759"
//               fontSize={60}
//               onClick={() => {
//                 handleCloseModalQrProp();
//                 handleShowModalCartProp();
//               }}
//             />
//             <p className="fst-italic">Indietro</p>
//           </div>
//           <Container className="d-flex justify-content-center">
//             <Image src={scanqr} width={60} />
//             <p style={{ marginTop: "1.5rem", fontWeight: "bold" }}>
//               Mostra il QR alla cassa
//             </p>
//           </Container>
//         </Modal.Header>
//         <Modal.Body>
//           <Container
//             ref={exportRef}
//             className="d-flex justify-content-center p-4"
//           >
//             <QRCode
//               key={qrKey} // Force re-render of QR code
//               value={
//                 repetedDishStateProp
//                   ? JSON.stringify(repetedDishStateProp)
//                   : "nulla da mostrare"
//               }
//               size={256} // Ensure a good size for better quality
//               level="H" // Error correction level
//             />
//           </Container>
//         </Modal.Body>
//         <Modal.Footer>
//           <Container className="d-flex flex-column align-items-center gap-1">
//             <p className="text-center">
//               Articoli Totali: <span className="fs-4">{qntCartApp}</span>
//             </p>
//             <p className="text-center">
//               Chiudi dopo aver letto il QR in cassa, oppure condividi il QR con
//               What App <b>Grazie!</b>
//             </p>
//             <ImWhatsapp
//               onClick={() => {
//                 exportAsImage(exportRef.current, "QR");
//               }}
//               cursor="pointer"
//               size={40}
//             />
//           </Container>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default ModalQR;

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

  // const exportAsImage = async (el, imageFileName) => {
  //   const canvas = await html2canvas(el, {
  //     scale: 2, // Increase resolution
  //     useCORS: true, // Handle cross-origin issues
  //     backgroundColor: null, // Ensure background is transparent
  //   });
  //   const image = canvas.toDataURL("image/png", 1.0);
  //   downloadImage(image, imageFileName);
  // };

  const downloadImage = (blob, fileName) => {
    const fakeLink = document.createElement("a");
    fakeLink.style.display = "none";
    fakeLink.download = fileName;
    fakeLink.href = blob;
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
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
      if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator.share({
          files: filesArray,
          title: "QR Code",
          text: "Ecco il tuo QR Code",
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
              WhatsApp <b>Grazie!</b>
            </p>
            <ImWhatsapp
              onClick={shareImageOnWhatsApp}
              cursor="pointer"
              size={40}
            />
          </Container>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ModalQR;
