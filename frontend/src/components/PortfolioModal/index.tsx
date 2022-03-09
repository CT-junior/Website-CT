/* eslint-disable @next/next/no-img-element */
import Modal from "react-modal";
import { TitleOrange } from "../TitleOrange";

import Styles from "./styles.module.scss";

type Props = {
    modalIsOpen: boolean;
    handleCloseModal: () => void;

    modalData: {
        imgSrc: string;
        title: string;
        text: string;
    }
}

export function PortfolioModal({ ...Props }: Props) {
    return (
        <Modal
            isOpen={Props.modalIsOpen}
            onRequestClose={Props.handleCloseModal}
            overlayClassName={Styles.modalContainer}
            className={Styles.modalContent}
        >
            <div className={Styles.title}>
                <TitleOrange>{Props.modalData.title}</TitleOrange>
            </div>
            <img
                onClick={Props.handleCloseModal}
                className={Styles.iconClose}
                src="/images/closeIconModal.png"
                alt="Close modal"
            />
            <img src={Props.modalData.imgSrc} alt="" />
            <div>
                <p>
                    {Props.modalData.text}
                </p>
            </div>
        </Modal>
    )
}