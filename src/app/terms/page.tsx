import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20 gradient-forest text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block text-igni-mint text-sm font-semibold uppercase tracking-wider mb-3">
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Terms of Service
              </h1>
              <p className="text-white/75 text-lg leading-relaxed">
                Please read these terms carefully before using Igniwave.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-igni-cream">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-10 border border-igni-mint/20 space-y-8">
              <div>
                <p className="text-igni-slate text-sm mb-6">
                  <strong className="text-igni-charcoal">Last updated:</strong>{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {[
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
              ].map(({ title, content }) => (
                <div key={title}>
                  <h2 className="text-lg font-bold text-igni-charcoal mb-2">
                    {title}
                  </h2>
                  <p className="text-igni-slate leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
