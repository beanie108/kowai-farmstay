import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions – Dog Boarding",
  description:
    "Terms and Conditions for dog boarding services at Kowai Farmstay and Boarding Limited. Effective 30 March 2026.",
};

const sections = [
  {
    title: "1. Our Commitment to Your Pet",
    content: [
      "We take the welfare and care of every dog entrusted to us very seriously. Kowai Farmstay and Boarding Limited endeavours at all times to provide the highest possible standard of care, including appropriate feeding, exercise, shelter, supervision, and companionship. We will make every reasonable effort to ensure your dog is safe, comfortable, and well-cared-for throughout their stay with us.",
      "Notwithstanding the above, dogs are living animals with unpredictable behaviours, and despite our best efforts, incidents may occur. The Owner acknowledges this inherent uncertainty and agrees to the liability provisions set out in these Terms and Conditions.",
    ],
  },
  {
    title: "2. Owner's Acceptance of Liability",
    content: [
      "The Owner accepts full responsibility and liability for their dog at all times, including during any boarding period with Kowai Farmstay and Boarding Limited. To the fullest extent permitted by New Zealand law, the Owner releases and indemnifies Kowai Farmstay and Boarding Limited, its directors, employees, agents, and contractors from and against any and all claims, losses, damages, costs, and expenses arising directly or indirectly from:",
    ],
    bullets: [
      "The dog's illness, injury, death, or escape, howsoever caused;",
      "Any act or omission of the dog, including biting, scratching, or otherwise injuring a person or animal;",
      "Any pre-existing medical, physical, or behavioural conditions affecting the dog;",
      "Damage caused by the dog to property belonging to Kowai Farmstay and Boarding Limited or any third party;",
      "Any allergic reactions, adverse responses to food, or unforeseen health events occurring during the boarding period.",
    ],
    contentAfter: [
      "This indemnity applies whether or not any such event arises from the negligence of Kowai Farmstay and Boarding Limited or its staff, except where such negligence constitutes gross negligence or wilful misconduct.",
    ],
  },
  {
    title: "3. Veterinary Costs and Medical Care",
    subsections: [
      {
        title: "3.1 Authorisation for Veterinary Treatment",
        content: "In the event that your dog requires veterinary attention during their stay, Kowai Farmstay and Boarding Limited will make reasonable efforts to contact the Owner before any treatment is authorised. Where the Owner cannot be contacted within a reasonable time and the dog's welfare requires urgent veterinary intervention, Kowai Farmstay and Boarding Limited is authorised to seek veterinary treatment on the Owner's behalf.",
      },
      {
        title: "3.2 Owner Responsible for All Veterinary Costs",
        content: "All veterinary costs, fees, and related expenses incurred during or as a result of the boarding period are the sole responsibility of the Owner and will be on-passed directly to the Owner in full. This includes, without limitation:",
        bullets: [
          "Emergency consultations and examinations;",
          "Diagnostic testing, x-rays, and laboratory fees;",
          "Prescription medications and treatments;",
          "Surgical procedures;",
          "Hospitalisation or specialist referrals;",
          "Any follow-up care required after the boarding period concludes.",
        ],
        contentAfter: "Veterinary invoices will be presented to the Owner promptly and are payable within fourteen (14) days of presentation, unless alternative payment arrangements are agreed in writing with Kowai Farmstay and Boarding Limited.",
      },
      {
        title: "3.3 Pet Insurance",
        content: "The Owner is strongly encouraged to hold current pet insurance for their dog prior to boarding. Kowai Farmstay and Boarding Limited accepts no responsibility for any insurance excess, declined claims, or costs not covered by an Owner's pet insurance policy.",
      },
    ],
  },
  {
    title: "4. Health, Vaccination, and Parasite Requirements",
    content: [
      "For the safety of all animals in our care, all dogs must meet the following health requirements before boarding will be accepted:",
    ],
    bullets: [
      "Current vaccinations as recommended by a New Zealand veterinarian, including (but not limited to) distemper, parvovirus, hepatitis, and kennel cough (Bordetella);",
      "Current flea, tick, and worm treatment administered within the period recommended by the Owner's veterinarian;",
      "Free from any contagious illness or disease at the time of drop-off.",
    ],
    contentAfter: [
      "The Owner warrants that all health information provided to Kowai Farmstay and Boarding Limited is accurate and complete. Where a dog arrives showing signs of illness, Kowai Farmstay and Boarding Limited reserves the right to refuse boarding or to require the Owner to collect the dog immediately. In such circumstances, no refund of any booking deposit will be made.",
    ],
  },
  {
    title: "5. Owner's Disclosure Obligations",
    content: [
      "The Owner must disclose to Kowai Farmstay and Boarding Limited prior to boarding all relevant information about their dog, including but not limited to:",
    ],
    bullets: [
      "Known medical conditions, allergies, or ongoing treatments;",
      "Dietary requirements, feeding schedules, and food sensitivities;",
      "Behavioural traits including aggression towards people or other animals;",
      "Any history of escaping, destructive behaviour, or separation anxiety;",
      "Previous incidents of biting or injury to any person or animal.",
    ],
    contentAfter: [
      "Failure to disclose relevant information may result in the immediate termination of the boarding arrangement at the Owner's cost and expense. The Owner remains fully liable for any loss, injury, or damage arising from undisclosed information.",
    ],
  },
  {
    title: "6. Bookings, Payment, and Cancellations",
    subsections: [
      {
        title: "6.1 Bookings",
        content: "All bookings are subject to availability and are confirmed only upon receipt of a booking confirmation from Kowai Farmstay and Boarding Limited. Kowai Farmstay and Boarding Limited reserves the right to decline any booking at its discretion.",
      },
      {
        title: "6.2 Payment",
        content: "Payment terms will be communicated at the time of booking. All fees are due and payable as agreed. Any additional costs incurred during the boarding period (including veterinary costs) are payable in accordance with these Terms and Conditions.",
      },
      {
        title: "6.3 Cancellations",
        content: "Cancellation terms and any applicable refund or cancellation fees will be communicated at the time of booking. Kowai Farmstay and Boarding Limited reserves the right to apply a cancellation fee for short-notice cancellations.",
      },
    ],
  },
  {
    title: "7. Collection of Dog and Abandonment",
    content: [
      "The Owner agrees to collect their dog on the agreed departure date. If the Owner fails to collect their dog within forty-eight (48) hours of the agreed departure date without prior notice and agreement, Kowai Farmstay and Boarding Limited may take such steps as are reasonably necessary to ensure the welfare of the dog. All costs associated with extended boarding and any subsequent re-homing action will be the sole responsibility of the Owner.",
      "If a dog is abandoned or the Owner cannot be contacted, Kowai Farmstay and Boarding Limited reserves the right to contact the relevant animal welfare authorities in accordance with the Animal Welfare Act 1999 (NZ).",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable New Zealand law, Kowai Farmstay and Boarding Limited shall not be liable to the Owner for any indirect, consequential, special, or incidental loss or damage arising out of or in connection with the boarding services, including loss of income, emotional distress, or the cost of a replacement animal.",
      "Nothing in these Terms and Conditions excludes, restricts, or modifies any right or remedy, or any guarantee, warranty, or other term or condition, implied or imposed by any legislation (including the Consumer Guarantees Act 1993 and the Fair Trading Act 1986) where to do so would be unlawful.",
    ],
  },
  {
    title: "9. Photography and Media",
    content: [
      "From time to time Kowai Farmstay and Boarding Limited may take photographs or video of dogs in our care for use on our website or social media. By boarding with us, the Owner grants Kowai Farmstay and Boarding Limited permission to use such images for promotional purposes. If the Owner does not wish their dog to be photographed, they must advise us in writing prior to the commencement of boarding.",
    ],
  },
  {
    title: "10. Privacy",
    content: [
      "Personal information collected from the Owner will be used solely for the purpose of providing boarding services and will be handled in accordance with the Privacy Act 2020 (NZ). Kowai Farmstay and Boarding Limited will not share personal information with third parties except where required by law or as necessary to provide veterinary or emergency services.",
    ],
  },
  {
    title: "11. Amendments to These Terms",
    content: [
      "Kowai Farmstay and Boarding Limited reserves the right to amend these Terms and Conditions at any time. Updated terms will be published on our website and will apply to all bookings made after the date of publication. Continued use of our services following any amendment constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "12. Governing Law",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of New Zealand. Any dispute arising under or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the New Zealand courts.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-forest/5 py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-terracotta mb-3">
            Dog Boarding
          </p>
          <h1 className="font-heading text-4xl text-forest mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-charcoal/50 mb-2">
            Kowai Farmstay and Boarding Limited — Effective date: 30 March 2026
          </p>
          <p className="text-sm text-charcoal/60 leading-relaxed mb-6">
            By booking dog boarding services with us you agree to be bound by the following Terms and Conditions. Please read them carefully before making a booking.
          </p>
          <a
            href="/Kowai_Farmstay_Terms_and_Conditions.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-warm-brown transition-colors"
          >
            Download PDF ↓
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-warm-brown/15 pt-8">
              <h2 className="font-heading text-xl text-forest mb-4">{section.title}</h2>

              {section.content?.map((p, i) => (
                <p key={i} className="text-sm text-charcoal/70 leading-relaxed mb-3">{p}</p>
              ))}

              {section.bullets && (
                <ul className="flex flex-col gap-2 mb-3 ml-4">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-charcoal/70 leading-relaxed flex gap-2">
                      <span className="text-sage mt-0.5 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {section.contentAfter?.map((p, i) => (
                <p key={i} className="text-sm text-charcoal/70 leading-relaxed mb-3">{p}</p>
              ))}

              {section.subsections?.map((sub) => (
                <div key={sub.title} className="mt-5">
                  <h3 className="text-sm font-medium text-forest mb-2">{sub.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-2">{sub.content}</p>
                  {sub.bullets && (
                    <ul className="flex flex-col gap-2 mb-3 ml-4">
                      {sub.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-charcoal/70 leading-relaxed flex gap-2">
                          <span className="text-sage mt-0.5 shrink-0">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {sub.contentAfter && (
                    <p className="text-sm text-charcoal/70 leading-relaxed">{sub.contentAfter}</p>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="border-t border-warm-brown/15 pt-8 rounded-xl bg-warm-brown/5 p-6">
            <h2 className="font-heading text-lg text-forest mb-3">Owner Acknowledgement</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              By completing an online booking, the Owner confirms that they have read, understood, and agree to be bound by these Terms and Conditions in their entirety.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-brown/15 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <a
            href="/Kowai_Farmstay_Terms_and_Conditions.pdf"
            download
            className="text-sm text-terracotta hover:text-warm-brown transition-colors font-medium"
          >
            Download PDF version ↓
          </a>
          <Link href="/dog-boarding" className="text-sm text-charcoal/50 hover:text-charcoal transition-colors">
            ← Back to Dog Boarding
          </Link>
        </div>
      </section>
    </>
  );
}
