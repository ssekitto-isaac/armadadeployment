import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// ── Load .env.local from project root ────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "../.env.local") });

const app = express();
app.use(express.json());

app.post("/api/sendEmail", async (req, res) => {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📨 /api/sendEmail called");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // ── 1. Log body ───────────────────────────────────────────────
  console.log("📦 Request body:", JSON.stringify(req.body, null, 2));
  const { email, message, timestamp } = req.body;

  if (!email || !message) {
    console.error("❌ Missing fields — email:", email, "| message:", message);
    return res.status(400).json({ error: "Missing email or message field" });
  }
  console.log("✅ Fields present — email:", email);

  // ── 2. Check env var ──────────────────────────────────────────
  console.log("🔑 EMAIL_PASSWORD set?", !!process.env.EMAIL_PASSWORD);
  console.log("🔑 EMAIL_PASSWORD length:", process.env.EMAIL_PASSWORD?.length ?? 0);

  if (!process.env.EMAIL_PASSWORD) {
    console.error("❌ EMAIL_PASSWORD is undefined — check your .env.local and restart the server");
    return res.status(500).json({ error: "EMAIL_PASSWORD env variable is not set" });
  }

  // ── 3. Create transporter ─────────────────────────────────────
  console.log("🔧 Creating transporter...");
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: "mail.utrax.co.ug",
      port: 465,
      secure: true,
      auth: {
        user: "emmanuel.wagisha@utrax.co.ug",
        pass: "Manuel@22",
      },
      logger: true,  // prints SMTP conversation to console
      debug: true,   // includes full SMTP traffic
    });
    console.log("✅ Transporter created");
  } catch (transportErr) {
    console.error("❌ Failed to create transporter:", transportErr.message);
    return res.status(500).json({
      error: "Transporter creation failed",
      detail: transportErr.message,
    });
  }

  // ── 4. Verify SMTP connection ─────────────────────────────────
  console.log("🔌 Verifying SMTP connection...");
  try {
    await transporter.verify();
    console.log("✅ SMTP connection verified — server is ready to send");
  } catch (verifyErr) {
    console.error("❌ SMTP verify failed!");
    console.error("  message     :", verifyErr.message);
    console.error("  code        :", verifyErr.code);
    console.error("  response    :", verifyErr.response);
    console.error("  responseCode:", verifyErr.responseCode);
    return res.status(500).json({
      error: "SMTP connection failed",
      detail: verifyErr.message,
      code: verifyErr.code,
      response: verifyErr.response,
      responseCode: verifyErr.responseCode,
    });
  }

  // ── 5. Send email ─────────────────────────────────────────────
  console.log("📤 Sending email...");
  try {
    const info = await transporter.sendMail({
      from: "emmanuel.wagisha@utrax.co.ug",
      to: "emmanuel.wagisha@utrax.co.ug",
      subject: "New Live Chat Message",
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
      `,
    });

    console.log("✅ Email sent successfully!");
    console.log("  messageId:", info.messageId);
    console.log("  response :", info.response);

    return res.status(200).json({ success: true, messageId: info.messageId });

  } catch (sendErr) {
    console.error("❌ sendMail failed!");
    console.error("  message     :", sendErr.message);
    console.error("  code        :", sendErr.code);
    console.error("  command     :", sendErr.command);
    console.error("  response    :", sendErr.response);
    console.error("  responseCode:", sendErr.responseCode);
    return res.status(500).json({
      error: "sendMail failed",
      detail: sendErr.message,
      code: sendErr.code,
      response: sendErr.response,
      responseCode: sendErr.responseCode,
    });
  }
});

app.listen(3001, () => {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("✅ API server running on http://localhost:3001");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
});