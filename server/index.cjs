require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/sendEmail", async (req, res) => {
  const { email, message, timestamp } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.utrax.co.ug",
    port: 465,
    secure: true,
    auth: {
      user: "emmanuel.wagisha@utrax.co.ug",
      pass: "Manuel@22",
    },
  });

  try {
    await transporter.sendMail({
      from: "emmanuel.wagisha@utrax.co.ug",
      to: "emmanuel.wagisha@utrax.co.ug",
      subject: "New Live Chat Message",
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
      `,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Nodemailer error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
