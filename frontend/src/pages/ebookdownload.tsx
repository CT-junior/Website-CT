/* eslint-disable @next/next/no-img-element */
import Styles from "../styles/ebookdownload.module.scss";
import { useState, useEffect, KeyboardEvent } from "react";
import { db } from '../services/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

type EbookInfo = {
  key: string;
  tittle: string;
  highlighted: string;
  introduction: string;
  body: string;
  conclusion: string;
  ebookFileLink: string;
}

export default function EbookDownload() {

  var key: string;
  if (typeof window !== 'undefined') {
    key = localStorage.getItem('ebook_key');
  }

  const [thisEbookInfo, setThisEbookInfo] = useState<EbookInfo>({
    key: '', tittle: '', highlighted: '', introduction: '', body: '', conclusion: '', ebookFileLink: ''
  });

  useEffect(() => {
    async function getEbookInfo() {
      const ebooksCollection = collection(db, 'ebooksInfo');
      const ebooksSnapshot = await getDocs(ebooksCollection);
      const ebooksList = ebooksSnapshot.docs.map(doc => doc.data() as EbookInfo);
      setThisEbookInfo(ebooksList.find(ebook => ebook.key === key));
    }
    getEbookInfo();
  }, [key]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [job, setJob] = useState('');
  const [captchAnswer, setCaptchaAnswer] = useState('');

  const [captcha1, setCaptcha1] = useState(Math.floor(Math.random() * 15) + 1);
  const [captcha2, setCaptcha2] = useState(Math.floor(Math.random() * 15) + 1);

  const HandleFormSubmit = async (e) => {

    e.preventDefault();

    const body = JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      company: company,
      job: job,
      ebookName: thisEbookInfo.tittle,
    })

    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!re.test(email)) {
      alert("Por favor, insira um email válido");
      setEmail('');
    }

    if (+captchAnswer !== captcha1 + captcha2) {
      alert("Captcha incorreto, tente novamente");

      setCaptcha1(Math.floor(Math.random() * 15) + 1);
      setCaptcha2(Math.floor(Math.random() * 15) + 1);
      setCaptchaAnswer('');
    }
    else {
      try {
        await fetch('/api/downloadEbookEmail', {
          method: "POST",
          body: body
        })
        console.log("email enviado com sucesso");
      } catch (error) {
        console.log("Erro ao enviar email");
      }

      window.open(thisEbookInfo.ebookFileLink, '_blank');
    }
  }

  return (
    <main>
      <div className={Styles.header}>
        <h1>[EBOOK] </h1>
        <h1>{thisEbookInfo.tittle}</h1>
        <img src="/images/Logo_CT_Preta.svg" alt="" className={Styles.logo} />
      </div>
      <div className={Styles.body}>
        <div className={Styles.ebookInfo}>
          <h2><b>
            {thisEbookInfo.highlighted}
          </b></h2>
          <h3>
            <br />
            {thisEbookInfo.introduction}
            <br /><br />
            {thisEbookInfo.body}
            <br /><br />
            {thisEbookInfo.conclusion}
            <br /><br />
            Baixe esse Ebook e saiba mais sobre o assunto!
          </h3>
        </div>
        <form className={Styles.form} onSubmit={(e) => HandleFormSubmit(e)}>
          <h2 className={Styles.formTittle}><b>Preencha o formulário abaixo<br />e acesse o conteúdo</b></h2>
          <input type="text" placeholder="Nome*" className={Styles.input} onChange={(e) => setName(e.target.value)} required />
          <input value={email} type="text" placeholder="Email*" className={Styles.input} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Telefone*" className={Styles.input} onChange={(e) => setPhone(e.target.value)} required />
          <input type="text" placeholder="Empresa*" className={Styles.input} onChange={(e) => setCompany(e.target.value)} required />
          <input type="text" placeholder="Cargo*" className={Styles.input} onChange={(e) => setJob(e.target.value)} required />
          <h3>{captcha1} + {captcha2} = ?</h3>
          <input
            placeholder="Digite o valor acima"
            type="text"
            className={Styles.input}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            required
          />
          <button type="submit" className={Styles.ctaButton}>DOWNLOAD</button>
        </form>
      </div>
    </main>
  );
}
