import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { name, email, contact, costPretension, area, idea } = JSON.parse(req.body);

            const transporter = nodemailer.createTransport({
                host: "smtp-relay.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            })

            let info = await transporter.sendMail({
                from: `"${name} via Website" <${email}>`, // sender address
                to: "contato@ctjunior.com.br", // list of receivers
                subject: "Contato feito pelo Website ✔", // Subject line
                html: `<b>Contato feito pelo website!</b><br><br>
            Nome: ${name}<br>
            Email: ${email}<br>
            Contato: ${contact}<br>
            Pretensão de custo: ${costPretension}<br>
            Área: ${area}<br><br>

            Ideia:<br><br>${idea}

            <br><br><br><br><b>Te juro mesmo que os anos passem, eu nunca vou te abandonar!</b>
            `, // html body
            });

            res.status(200).send("Enviado!")
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    } else {
        res.status(400).send("BAD REQUEST");
    }
}
