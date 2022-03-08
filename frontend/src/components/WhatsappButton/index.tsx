/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import styles from "./styles.module.scss";

type Props = {
    number: string;
}

export function WhatsappButton({ number }: Props) {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${number}&text=Ol%C3%A1%2C%20vim%20pelo%20website%20da%20CT!`

    return (
        <a target="_blank" href={whatsappLink} rel="noopener noreferrer" className={styles.whatsappButton}>
            <img src='/images/whatsappButton.png' alt="CT Junior WhatsApp" />
        </a>
    )
}