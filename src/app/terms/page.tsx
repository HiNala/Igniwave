import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service | Igniwave",
  description:
    "Read the Igniwave Terms of Service. Understand your rights and responsibilities when using our privacy-first wellness intelligence platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Igniwave platform, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.",
  },
  {
    title: "2. Description of Service",
    content:
      "Igniwave is a consumer wellness intelligence platform that allows users to connect wearable devices, view a unified wellness timeline, and generate consented health data summaries for sharing with care providers. Igniwave is not a medical device, medical provider, or covered entity under HIPAA.",
  },
  {
    title: "3. User Data & Privacy",
    content:
      "You are the data controller for your health data. Igniwave processes data only at your direction. All sharing is user-initiated. See our Privacy Policy for full details.",
  },
  {
    title: "4. Not Medical Advice",
    content:
      "Igniwave does not provide medical advice, diagnosis, or treatment. The platform provides wellness insights for informational purposes only. Always consult a qualified healthcare provider for medical decisions.",
  },
  {
    title: "5. Account Responsibilities",
    content:
      "You are responsible for maintaining the security of your account. You agree not to share your credentials or use the platform for any unlawful purpose.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All platform content, design, and technology are the intellectual property of Igniwave. Your health data remains yours. You grant Igniwave a limited license to process your data solely to provide the services you request.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "Igniwave is provided on an as-is basis. To the maximum extent permitted by law, we disclaim all warranties and shall not be liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "8. Changes to Terms",
    content:
      "We may update these terms from time to time. We will notify you of material changes via email or in-app notification.",
  },
  {
    title: "9. Contact",
    content:
      "For questions about these terms, contact legal@igniwave.com.",
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subheadline="Please read these terms carefully before using Igniwave."
      />

      <Section bg="cream">
        <Container size="narrow">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-igni-mint/20">
            <p className="font-sans text-igni-slate text-sm mb-8">
              <strong className="text-igni-charcoal">Last updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="space-y-8">
              {sections.map(({ title, content }) => (
                <div key={title}>
                  <h2 className="font-sans font-bold text-lg text-igni-charcoal mb-2">
                    {title}
                  </h2>
                  <p className="font-sans text-igni-slate leading-relaxed">
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
