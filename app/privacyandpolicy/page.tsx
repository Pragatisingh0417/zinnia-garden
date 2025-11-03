"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-40 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center mt-20">
        Zinnia Gardens Privacy Policy
      </h1>

      <p className="mb-6">
        Zinnia Gardens is a privately owned venue available for hire by independent event organisers. 
        This website serves as a point of contact and information hub for those interested in events 
        held at the property.
      </p>

      <p className="mb-6">
        When you make an enquiry through this website, your personal information is collected on behalf 
        of the relevant event organiser, who is responsible for handling your data in line with the UK 
        General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <p className="mb-8">
        This Privacy Policy explains what information is collected through this website, how it is used, 
        how it may be shared, and how it is protected.
      </p>

      {/* Section I */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">I. WHO COLLECTS YOUR INFORMATION</h2>
        <p className="mb-2">
          Zinnia Gardens does not directly run events or act as the data controller for them. Instead:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            The event organiser managing your event is the data controller, and your information is 
            passed to them so they can respond to your enquiry and provide services. They are responsible 
            for handling your personal data lawfully under UK data protection legislation.
          </li>
          <li>
            Zinnia Gardens does not sell, trade, or use your data independently of the organiser’s purpose.
          </li>
        </ul>
      </section>

      {/* Section II */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">II. WHAT INFORMATION WE COLLECT</h2>
        <p className="mb-2">The website may collect:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal Information: e.g. your name, email, phone number, address, and event details.</li>
          <li>Non-Personal Information: e.g. IP address, browser type, and site usage data collected through cookies or analytics tools.</li>
        </ul>
        <p className="mt-2">
          Cookies may be used to improve website performance and user experience. You may disable cookies 
          in your browser settings, although some features may be affected.
        </p>
      </section>

      {/* Section III */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">III. HOW YOUR INFORMATION IS USED</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Forward your enquiry or booking request to the relevant event organiser.</li>
          <li>Allow the organiser to contact you and provide requested services.</li>
          <li>Improve the website and user experience.</li>
          <li>Comply with legal obligations, if required.</li>
        </ul>
        <p className="mt-2">
          We do not use your data for marketing or unrelated purposes without your explicit consent.
        </p>
      </section>

      {/* Section IV */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">IV. THIRD-PARTY SERVICES</h2>
        <p>
          This website is hosted by Weebly, and your data may be stored on their secure servers. For more 
          information, refer to Weebly’s Privacy Policy.
        </p>
        <p className="mt-2">
          If you are referred to third-party service providers (e.g. caterers, marquee suppliers), their 
          own privacy policies will apply to any information you provide to them directly.
        </p>
      </section>

      {/* Section V */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">V. YOUR RIGHTS</h2>
        <p className="mb-2">Under UK law, you have the right to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Access the personal data held about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Withdraw consent at any time.</li>
          <li>Request that your data not be shared or processed further.</li>
        </ul>
        <p className="mt-2">
          To exercise your rights, you may contact <a href="mailto:info@zinniagardens.com" className="text-amber-600 underline">info@zinniagardens.com</a> 
          or the event organiser directly.
        </p>
      </section>

      {/* Section VI */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">VI. SECURITY</h2>
        <p>
          We follow industry-standard measures to protect your information, but no system can guarantee 
          100% security. By using this website, you accept these risks.
        </p>
      </section>

      {/* Section VII */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">VII. LINKS TO OTHER WEBSITES</h2>
        <p>
          Our website may include links to third-party websites or services. These are not governed by 
          this policy. You should review the privacy policies of those sites before submitting any 
          personal information.
        </p>
      </section>

      {/* Section VIII */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">VIII. AGE LIMITATION</h2>
        <p>
          This website is intended for individuals aged 18 and over. By using the site, you confirm you 
          meet this requirement.
        </p>
      </section>

      {/* Section IX */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">IX. CHANGES TO THIS POLICY</h2>
        <p>
          This policy may be updated from time to time. All changes will be published on this page with a 
          new effective date. Continued use of the site indicates your acceptance of any updates.
        </p>
      </section>

      {/* Section X */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">X. CONTACT</h2>
        <p>
          If you have questions or concerns about this policy, or if you wish to withdraw consent or 
          request data access, please contact:{" "}
          <a href="mailto:info@zinniagardens.com" className="text-amber-600 underline">
            info@zinniagardens.com
          </a>
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10 text-center">
        <em>Last Updated: May 2024</em>
      </p>
    </main>
  );
}
