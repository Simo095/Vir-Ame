import { Modal } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";

const ModalCancel = ({
  showCancel,
  handleCloseCancel,
  handleShowCancel,
  handleShowModalCart,
}) => {
  return (
    <Modal show={showCancel} centered backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Sei sicuro di chiudere?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Se confermi perderai i piatti aggiunti fino ad ora al carrello...
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <div className="d-flex flex-column align-items-center gap-1 border-PayCart">
          <IoIosCloseCircle
            onClick={() => {
              window.location.reload();
            }}
            cursor="pointer"
            color="#083759"
            fontSize={60}
          ></IoIosCloseCircle>
          <p className="m-0 p-0 fst-italic">Cancella</p>
          <p className="m-0 p-0 fst-italic">tutto</p>
        </div>
        <div className="d-flex gap-4">
          <div className="d-flex flex-column align-items-center gap-1 border-PayCart">
            <IoBagCheck
              onClick={() => {
                handleCloseCancel();
                handleShowModalCart();
              }}
              cursor="pointer"
              color="#083759"
              fontSize={60}
            ></IoBagCheck>

            <p className="fst-italic m-0 p-0 mb-4">Continua</p>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCancel;
