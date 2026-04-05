"use server";

export interface BoardingApplicationFormState {
  success: boolean;
  error?: string;
}

export async function submitBoardingApplication(
  _prevState: BoardingApplicationFormState,
  formData: FormData
): Promise<BoardingApplicationFormState> {
  const ownerFirstName = (formData.get("ownerFirstName") as string | null)?.trim() ?? "";
  const ownerLastName = (formData.get("ownerLastName") as string | null)?.trim() ?? "";
  const ownerPhone = (formData.get("ownerPhone") as string | null)?.trim() ?? "";
  const ownerEmail = (formData.get("ownerEmail") as string | null)?.trim() ?? "";
  const dogName = (formData.get("dogName") as string | null)?.trim() ?? "";
  const dogBreed = (formData.get("dogBreed") as string | null)?.trim() ?? "";
  const dogAge = (formData.get("dogAge") as string | null)?.trim() ?? "";
  const dogWeight = (formData.get("dogWeight") as string | null)?.trim() ?? "";
  const checkIn = (formData.get("checkIn") as string | null)?.trim() ?? "";
  const checkOut = (formData.get("checkOut") as string | null)?.trim() ?? "";
  const vaccinationsUpToDate = (formData.get("vaccinationsUpToDate") as string | null) ?? "";
  const medicalConditions = (formData.get("medicalConditions") as string | null)?.trim() ?? "";
  const emergencyContactName = (formData.get("emergencyContactName") as string | null)?.trim() ?? "";
  const emergencyContactPhone = (formData.get("emergencyContactPhone") as string | null)?.trim() ?? "";
  const specialInstructions = (formData.get("specialInstructions") as string | null)?.trim() ?? "";
  const vetClinic = (formData.get("vetClinic") as string | null)?.trim() ?? "";
  const allergies = (formData.get("allergies") as string | null)?.trim() ?? "";
  const consentGiven = (formData.get("consentGiven") as string | null) ?? "";

  if (!ownerFirstName || !ownerLastName || !ownerPhone || !ownerEmail || !dogName || !checkIn || !checkOut || !vaccinationsUpToDate) {
    return { success: false, error: "Please fill in all required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (consentGiven !== "true") {
    return { success: false, error: "Please accept the terms and conditions to submit the form." };
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
      reply_to: ownerEmail,
      subject: `New boarding application — ${dogName} (${ownerFirstName} ${ownerLastName})`,
      text: [
        `--- Owner ---`,
        `First name: ${ownerFirstName}`,
        `Last name: ${ownerLastName}`,
        `Phone: ${ownerPhone}`,
        `Email: ${ownerEmail}`,
        ``,
        `--- Dog ---`,
        `Name: ${dogName}`,
        `Breed: ${dogBreed || "Not provided"}`,
        `Age: ${dogAge || "Not provided"}`,
        `Weight: ${dogWeight ? dogWeight + " kg" : "Not provided"}`,
        `Check-in: ${checkIn}`,
        `Check-out: ${checkOut}`,
        ``,
        `--- Health & care ---`,
        `Vaccinations up to date: ${vaccinationsUpToDate}`,
        `Medical conditions: ${medicalConditions || "None"}`,
        `Allergies: ${allergies || "None"}`,
        `Vet / clinic: ${vetClinic || "Not provided"}`,
        ``,
        `--- Emergency contact ---`,
        `Name: ${emergencyContactName || "Not provided"}`,
        `Phone: ${emergencyContactPhone || "Not provided"}`,
        ``,
        `--- Special instructions ---`,
        `${specialInstructions || "None"}`,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    return { success: false, error: "Failed to send application. Please try again or email us directly." };
  }

  return { success: true };
}
