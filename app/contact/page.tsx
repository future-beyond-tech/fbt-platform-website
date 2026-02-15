import { defaultMetadata } from "@/lib/seo";
import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";

export const metadata = defaultMetadata(
  "Contact",
  "Secure, scalable, and intelligent software engineering for startups and security-critical organizations.",
  "/contact"
);

export default function ContactPage() {
    return (
        <section
            className="py-20 sm:py-24 lg:py-32"
            aria-labelledby="contact-heading"
        >
            <Container>
                <div className="mx-auto max-w-2xl">
                    <header className="text-center">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-sm">
                            Get in touch
                        </p>
                        <h1
                            id="contact-heading"
                            className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl"
                        >
                            Contact FBT
                        </h1>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-base">
                            Start a conversation with us. No sales pressure — just a thoughtful
                            discussion about your needs and goals.
                        </p>
                    </header>

                    {/* Client Component */}
                    <ContactForm />

                    <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-500 sm:mt-10">
                        Prefer email? Reach us at{" "}
                        <a
                            href="mailto:contact@futurebeyondtech.com"
                            className="font-medium text-slate-700 dark:text-slate-300 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-2 transition-colors hover:text-slate-900 dark:hover:text-slate-100 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                        >
                            contact@futurebeyondtech.com
                        </a>
                    </p>
                </div>
            </Container>
        </section>
    );
}
