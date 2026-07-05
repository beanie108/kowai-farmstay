"use server";

import { sendTransactionalEmail } from "@/lib/resend";

export type EnquiryType = "farmstay" | "dog-boarding" | "both";

export interface EnquiryFormState {
  success: boolean;
  error?: string;
}

/**
 * Server Action: handles enquiry form submission.
 *
 * Required environment variables (provisioned by the Resend Vercel integration):
 *   RESEND_API_KEY      — Resend API key
 *   RESEND_FROM_EMAIL   — verified sender, e.g. Kowai Farmstay <enquiries@kowaifarmstay.co.nz>
 *   ENQUIRY_EMAIL_TO    — destination address, e.g. stay@kowaifarmstay.co.nz
 */
export async function submitEnquiry(
  _prevState: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const enquiryType = formData.get("enquiryType") as EnquiryType;
  const checkIn = (formData.get("checkIn") as string | null)?.trim() ?? "";
  const checkOut = (formData.get("checkOut") as string | null)?.trim() ?? "";
  const guests = (formData.get("guests") as string | null)?.trim() ?? "";
  const dogCount = (formData.get("dogCount") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !enquiryType) {
    return { success: false, error: "Please fill in all required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const result = await sendTransactionalEmail({
    replyTo: email,
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
  });

  if (!result.ok) {
    return { success: false, error: result.error };
  }

  return { success: true };
}
