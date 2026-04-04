import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Book / Enquire",
  description:
    "Make a farmstay or dog boarding enquiry at Kowai. Fill in the form and we will be in touch within 24 hours.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-terracotta mb-2">
          Enquiries
        </p>
        <h1 className="font-heading text-5xl text-forest mb-4">
          Make a booking enquiry
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed">
          Whether you want to stay on the farm or board your dog, fill in the
          form below and we&apos;ll come back to you within 24 hours.
        </p>
      </div>

      <EnquiryForm />

      <p className="mt-8 text-sm text-charcoal/50 text-center">
        Prefer to email directly?{" "}
        <a
          href="mailto:stay@kowaifarmstay.co.nz"
          className="text-terracotta hover:text-warm-brown transition-colors"
        >
          stay@kowaifarmstay.co.nz
        </a>
      </p>
    </div>
  );
}
