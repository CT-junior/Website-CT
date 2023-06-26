import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, company, job, ebookName } = JSON.parse(req.body);

      const transporter = createTransport({
        host: "smtp-relay.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_USER,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
      })

      let info = await transporter.sendMail({
        from: `"${name} via Website" <${email}>`, // sender address
        to: "contato@ctjunior.com.br", // list of receivers
        subject: "Download de ebook ✔", // Subject line
        html: `<b>Download de ebook no website!</b><br><br>
            Nome: ${name}<br>
            Email: ${email}<br>
            Contato: ${phone}<br>
            Empresa: ${company}<br>
            Cargo: ${job}<br><br>

            Ebook adquirido:<br><br>${ebookName}

            <br><br><br><br><b>Te juro mesmo que os anos passem, eu nunca vou te abandonar!</b>
            `, // html body
      });

      res.status(200).send("Enviado!")
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(400).send("BAD REQUEST");
  }
}
