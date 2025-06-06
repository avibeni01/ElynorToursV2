// src/app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  message: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    type: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailData = await request.json();
    const { to, subject, message, customerInfo } = body;

    // Vérification des variables d'environnement
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('❌ Variables SMTP manquantes');
      return NextResponse.json({ 
        error: 'Configuration email manquante' 
      }, { status: 500 });
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true pour 465, false pour 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Template HTML pour l'email (simplifié pour le log)
    const emailContent = `
      Nouvelle demande - Elynor Tours
      
      Client: ${customerInfo.firstName} ${customerInfo.lastName}
      Email: ${customerInfo.email}
      Téléphone: ${customerInfo.phone}
      Type: ${customerInfo.type === 'hotel' ? '🏨 Hôtel' : '🚗 Location Voiture'}
      
      Détails:
      ${message}
      
      Reçu le: ${new Date().toLocaleString('fr-FR')}
    `;

    // Envoi de l'email
    const mailOptions = {
      from: `"Elynor Tours" <${process.env.SMTP_USER}>`,
      to: to || 'contact@elynortours.com',
      subject: subject,
      html: emailContent,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    console.log('✅ Email envoyé avec succès');
    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });

  } catch (error: any) {
    console.error('❌ Erreur envoi email:', error);
    return NextResponse.json({ 
      error: 'Erreur lors de l\'envoi de l\'email',
      detail: error.message 
    }, { status: 500 });
  }
}