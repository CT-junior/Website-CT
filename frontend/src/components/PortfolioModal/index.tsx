/* eslint-disable @next/next/no-img-element */
import Modal from "react-modal";
import Styles from "./styles.module.scss";

type Props = {
  modalIsOpen: boolean;
  handleCloseModal: () => void;

  modalData: {
    imgSrc: string;
    title: string;
    text: string;
  };
};

export function PortfolioModal({ ...Props }: Props) {
  return (
    <Modal
      isOpen={Props.modalIsOpen}
      onRequestClose={Props.handleCloseModal}
      overlayClassName={Styles.modalContainer}
      ariaHideApp={false}
      className={Styles.modalContent}
    >
      <div className={Styles.title}>
        <h3>{Props.modalData.title}</h3>
        <span></span>
      </div>
      <img
        onClick={Props.handleCloseModal}
        className={Styles.iconClose}
        src="/images/closeIconModal.svg"
        alt="Close modal"
      />
      <div className={Styles.flexBox}>
        <img
          className={Styles.imageModal}
          src={Props.modalData.imgSrc}
          alt=""
        />
        <div className={Styles.descriptionModal}>
          <p>{Props.modalData.text}</p>
        </div>
      </div>
    </Modal>
  );
}
