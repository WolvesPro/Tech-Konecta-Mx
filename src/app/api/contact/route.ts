import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { email,copia, mensaje, subject, file, fileName } = await req.json();

    let filePath = null;

    if (file && fileName) {
        const fileData = Buffer.from(file, 'base64');
        const attachmentDir = path.join(process.cwd(), 'attachments');
        filePath = path.join(attachmentDir, fileName);

        if (!fs.existsSync(attachmentDir)) {
            fs.mkdirSync(attachmentDir, { recursive: true });
        }

        try {
            fs.writeFileSync(filePath, fileData);
        } catch (error) {
            console.error('Error al escribir el archivo:', error);
            return NextResponse.json({ error: "Hubo un error al escribir el archivo" });
        }
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'dydetec.com.mx',
            port: 465,
            auth: {
                user: process.env.EMAIL_USER!,
                pass: process.env.EMAIL_PASS!,
              }
              
        });

        const mailOptions: nodemailer.SendMailOptions = {
            from: 'gatho@gatsimed.com',
            to: email,
            cc: copia, // copia
            subject: subject,
            text: `Correo electrónico: ${email}\n\nMensaje: ${mensaje}`,
        };

        if (filePath) {
            mailOptions.attachments = [{
                filename: fileName,
                path: filePath,
            }];
        }

        await transporter.sendMail(mailOptions);

        if (filePath) {
            fs.unlinkSync(filePath);
        }

        return NextResponse.json({ message: "Correo electrónico enviado con éxito" });
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        return NextResponse.json({ error: "Hubo un error al enviar el correo electrónico" });
    }
}
