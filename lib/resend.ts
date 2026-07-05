interface SendTransactionalEmailInput {
  subject: string;
  text: string;
  replyTo: string;
}

interface SendTransactionalEmailResult {
  ok: boolean;
  error?: string;
}

const DEFAULT_FROM = "Kowai Farmstay <enquiries@kowaifarmstay.co.nz>";
const DEFAULT_TO = "stay@kowaifarmstay.co.nz";

export async function sendTransactionalEmail(
  input: SendTransactionalEmailInput
): Promise<SendTransactionalEmailResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Resend email failed: RESEND_API_KEY is not configured.");
    return {
      ok: false,
      error: "Email service is not configured. Please try again later or email us directly.",
    };
  }

  const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
  const to = process.env.ENQUIRY_EMAIL_TO?.trim() || DEFAULT_TO;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: input.replyTo,
      subject: input.subject,
      text: input.text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Resend email failed:", res.status, body);
    return {
      ok: false,
      error: "Failed to send message. Please try again or email us directly.",
    };
  }

  return { ok: true };
}
