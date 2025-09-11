import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Dream Pixel",
  description:
    "Learn how Dream Pixel collects, uses, and protects your personal information. Our comprehensive privacy policy covers data protection and your rights.",
  robots: "index, follow",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: January 2025</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Dream Pixel ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
          <p className="mb-4">We may collect personal information that you voluntarily provide, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Business information (company name, website, industry)</li>
            <li>Project requirements and preferences</li>
            <li>Payment information (processed securely through third-party providers)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
          <p className="mb-4">We automatically collect certain information when you visit our website:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website information</li>
            <li>Device information (mobile, desktop, etc.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing and improving our web design and digital marketing services</li>
            <li>Communicating with you about projects, updates, and support</li>
            <li>Processing payments and managing subscriptions</li>
            <li>Analyzing website usage to improve user experience</li>
            <li>Sending marketing communications (with your consent)</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information. We may share information in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist with hosting, analytics, payment
              processing, and email services
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
            </li>
            <li>
              <strong>Consent:</strong> When you have given explicit permission
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You
            can control cookie preferences through your browser settings or our cookie consent banner.
          </p>

          <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Essential Cookies:</strong> Required for basic website functionality
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
          <p className="mb-4">Under applicable data protection laws, you have the following rights:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Access:</strong> Request a copy of your personal information
            </li>
            <li>
              <strong>Rectification:</strong> Correct inaccurate or incomplete information
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your personal information
            </li>
            <li>
              <strong>Portability:</strong> Receive your data in a structured, machine-readable format
            </li>
            <li>
              <strong>Objection:</strong> Object to processing for marketing purposes
            </li>
            <li>
              <strong>Restriction:</strong> Request limitation of processing
            </li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at{" "}
            <a href="mailto:privacy@dreampixel.co.uk" className="text-purple-600 hover:underline">
              privacy@dreampixel.co.uk
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
          <p className="mb-4">
            We retain personal information for as long as necessary to fulfill the purposes outlined in this policy,
            comply with legal obligations, resolve disputes, and enforce agreements. Client project data is typically
            retained for 7 years after project completion for business and legal purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Third-Party Services</h2>
          <p className="mb-4">Our website may contain links to third-party services with their own privacy policies:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Google Analytics:</strong> Website traffic analysis
            </li>
            <li>
              <strong>PayPal:</strong> Payment processing
            </li>
            <li>
              <strong>Email Service Providers:</strong> Communication and marketing
            </li>
          </ul>
          <p className="mb-4">
            We are not responsible for the privacy practices of these third parties. Please review their privacy
            policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
          <p className="mb-4">
            Our services are not intended for children under 16. We do not knowingly collect personal information from
            children under 16. If we become aware of such collection, we will delete the information immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate
            safeguards are in place to protect your information in accordance with applicable data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically. We will notify you of significant changes by posting the
            updated policy on our website with a new "Last updated" date. Your continued use of our services after
            changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>
              <strong>Dream Pixel</strong>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@dreampixel.co.uk" className="text-purple-600 hover:underline">
                privacy@dreampixel.co.uk
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+447123456789" className="text-purple-600 hover:underline">
                +44 7123 456789
              </a>
            </p>
            <p>Address: Devon, United Kingdom</p>
          </div>
        </section>
      </div>
    </div>
  )
}
