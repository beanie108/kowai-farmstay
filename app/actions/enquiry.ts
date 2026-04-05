"use server";

export type EnquiryType = "farmstay" | "dog-boarding" | "both";

export interface EnquiryFormState {
  success: boolean;
  error?: string;
}

/**
 * Server Action: handles enquiry form submission.
 *
 * Current implementation: sends email via a simple fetch to a transactional
 * email service. In Phase 1 this is a placeholder — wire up Resend, Postmark,
 * or similar and add RESEND_API_KEY (or equivalent) to Vercel environment vars.
 *
 * Required environment variables (add to Vercel project settings):
 *   ENQUIRY_EMAIL_TO   — destination address, e.g. stay@kowaifarmstay.co.nz
 *   RESEND_API_KEY     — if using Resend (recommended)
 */
export async function submitEnquiry(
  _prevState: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  // Extract and validate fields
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const enquiryType = formData.get("enquiryType") as EnquiryType;
  const checkIn = (formData.get("checkIn") as string | null)?.trim() ?? "";
  const checkOut = (formData.get("checkOut") as string | null)?.trim() ?? "";
  const guests = (formData.get("guests") as string | null)?.trim() ?? "";
  const dogCount = (formData.get("dogCount") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // Basic server-side validation
  if (!name || !email || !enquiryType) {
    return { success: false, error: "Please fill in all required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // ── Email sending ──────────────────────────────────────────────────────────
  // From address uses Resend's shared domain until kowaifarmstay.co.nz is
  // verified in Resend — then change to: enquiries@kowaifarmstay.co.nz
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Kowai Farmstay <onboarding@resend.dev>",
      to: process.env.ENQUIRY_EMAIL_TO ?? "stay@kowaifarmstay.co.nz",
      reply_to: email,
      subject: `New enquiry from ${name} — ${enquiryType}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Enquiry type: ${enquiryType}`,
        `Check-in: ${checkIn || "TBC"}`,
        `Check-out: ${checkOut || "TBC"}`,
        `Guests: ${guests || "TBC"}`,
        `Dogs: ${dogCount || "TBC"}`,
        `Message: ${message || "None"}`,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    return { success: false, error: "Failed to send enquiry. Please try again or email us directly." };
  }

  return { success: true };
}
