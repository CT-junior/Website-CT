import Head from "next/head";
import Link from "next/link";
import { MouseEvent, useState } from "react";

import Styles from "../styles/404.module.scss";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({
    axleX: 0,
    axleY: 0,
  });

  function handleMouseMove(event: MouseEvent, ) {
    setMousePosition({
      axleX: - event.clientX / 50,
      axleY: - event.clientY / 50,
    });
  }

  return (
    < >
      <Head>
        <title>Page not found | CT JUNIOR</title>
      </Head>
      <main onMouseMove={(e) => handleMouseMove(e)}>
        <section className={Styles.container}>
          <div className={Styles.content} >
            <img src="/images/aviao404.png"  alt="Avião kamikaze" style={{
                transform: `translateX(${mousePosition.axleX * 1.5}px) translateY(${mousePosition.axleY * 1.5}px)`,
              }} />
            <div style={{
                transform: `translateX(${mousePosition.axleX * 1.5}px) translateY(${mousePosition.axleY * 1.5}px)`,
              }} >
              <h1>Erro 404</h1>
              <span>
                A página que vc procura
                <br /> não foi encontrada.
              </span>
              <Link href="/">
                <a>Prosseguir para ctjunior.com.br</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
