// KB Cafe contact form handler (Vercel serverless function).
// Sends the submitted message to CONTACT_TO via Resend.
// Required Vercel env vars: RESEND_API_KEY, CONTACT_TO (the destination inbox).
// Optional: CONTACT_FROM (a verified Resend sender; defaults to Resend's onboarding address).
export default async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};

  const name = String(body.name || '').slice(0, 200).trim();
  const email = String(body.email || '').slice(0, 200).trim();
  const message = String(body.message || '').slice(0, 5000).trim();
  const honeypot = String(body.company || '');

  if (honeypot) { res.status(200).json({ ok: true }); return; } // silently accept bots
  if (!email || !email.includes('@') || !message) {
    res.status(400).json({ error: 'Please add a valid email and a message.' });
    return;
  }

  const KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO;
  if (!KEY || !TO) { res.status(503).json({ error: 'Contact is not configured yet. Please try again soon.' }); return; }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || 'KB Cafe <onboarding@resend.dev>',
        to: [TO],
        reply_to: email,
        subject: `KB Cafe contact: ${name || email}`,
        text: `New message from the KB Cafe contact form.\n\nName: ${name || '(not given)'}\nEmail: ${email}\n\n${message}`,
      }),
    });
    if (!r.ok) {
      const detail = (await r.text().catch(() => '')).slice(0, 200);
      res.status(502).json({ error: 'Could not send right now. Please try again in a moment.', detail });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(502).json({ error: 'Could not send right now. Please try again in a moment.' });
  }
}
