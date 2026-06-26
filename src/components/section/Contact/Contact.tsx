import React from "react";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo/ContactInfo";
import ContactSocialLinks from "@/components/ui/ContactSocialLinks/ContactSocialLinks";
import { Section } from "@/components/ui/Section/Section";

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      variant="primary"
      aria-label="Contact"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
                05 · Contact
              </p>
              <h2 className="mt-5 font-display text-5xl font-semibold tracking-[-0.055em] text-primary md:text-6xl">
                Let’s work together.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-secondary lg:col-span-6 lg:col-start-7">
              Have an idea, an opening, or a frontend problem worth thinking through? Send a note and I&apos;ll get back to you.
            </p>
          </div>

          <div className="mx-auto max-w-6xl overflow-hidden rounded-panel border border-line bg-surface shadow-soft lg:grid lg:grid-cols-12">
            <aside className="flex flex-col gap-8 p-6 sm:p-8 lg:col-span-5">
              <div>
                <p className="font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-primary">
                  I&apos;m open to thoughtful product work, frontend collaborations, and friendly hellos.
                </p>
                <p className="mt-5 max-w-md text-secondary">
                  I do my best work with teams that care about accessibility, maintainability, and interfaces that make complex products feel easier to use.
                </p>
              </div>

              <div>
                <ContactInfo/>
                <ContactSocialLinks/>
              </div>
            </aside>

            <ContactForm/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
