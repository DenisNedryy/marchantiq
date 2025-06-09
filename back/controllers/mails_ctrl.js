require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendMail = async (req, res, next) => {
  const { name, prenom, email, phone, subject, message, items_uuid } = req.body;

  try {
    // 1. Création du transporteur
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: { rejectUnauthorized: false }
    });

    // 2. Définition de l'email à envoyer
    const mailOptions = {
      from: `"${prenom} ${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "Nouveau message depuis le formulaire",
      html: `
 <div style="background: #f4f4f7; padding: 40px 0; font-family: 'Segoe UI', Roboto, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
      
      <div style="background: #2f855a; padding: 20px 30px;">
        <h2 style="margin: 0; color: #ffffff; font-size: 22px;">📩 Nouveau message du site Marchantiq</h2>
      </div>

      <div style="padding: 30px; color: #333;">
        <p style="margin-bottom: 20px; font-size: 16px;">Vous avez reçu un message depuis le formulaire de contact :</p>

        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 10px 0; font-weight: 600;">👤 Nom</td>
            <td style="padding: 10px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600;">🧍 Prénom</td>
            <td style="padding: 10px 0;">${prenom}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600;">📧 Email</td>
            <td style="padding: 10px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600;">📞 Téléphone</td>
            <td style="padding: 10px 0;">${phone}</td>
          </tr>
             <tr>
            <td style="padding: 10px 0; font-weight: 600;">🆔 N° de l'objet</td>
            <td style="padding: 10px 0;">${items_uuid ? items_uuid : "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">📝 Message</td>
            <br/>
            <td style="padding: 10px 0; white-space: pre-line;">${message.replace(/\n/g, "<br/>")}</td>
          </tr>
        </table>
      </div>

      <div style="background: #edf2f7; padding: 20px 30px; text-align: center; color: #666; font-size: 13px;">
        Ce message a été généré automatiquement par le site <strong>marchantiq.fr</strong>
      </div>
    </div>
  </div>
      `
    };

    // 3. Envoi de l'email
    const info = await transporter.sendMail(mailOptions);

    // 4. Réponse au client
    res.status(200).json({ message: "Email envoyé avec succès", info: info.response });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    res.status(500).json({ error: "Erreur lors de l'envoi du mail", details: error.message });
  }
};