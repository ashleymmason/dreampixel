import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Dream Pixel",
  description:
    "Read Dream Pixel's terms of service covering web design, hosting, and digital marketing services. Understand our policies and your rights as a client.",
  robots: "index, follow",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600">Last updated: January 2025</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing and using Dream Pixel's services, you accept and agree to be bound by the terms and provision
            of this agreement. These Terms of Service ("Terms") govern your use of our website design, hosting, SEO, and
            digital marketing services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
          <p className="mb-4">Dream Pixel provides the following services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Website design and development</li>
            <li>Website hosting and maintenance</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Pay-Per-Click (PPC) advertising management</li>
            <li>Content creation and marketing</li>
            <li>UX/UI design services</li>
            <li>Backlink building services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>

          <h3 className="text-xl font-semibold mb-3">Project Payments</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Full project payment required before work starts, unless agreed otherwise</li>
            <li>Final payment due upon project completion (if staggered payments agreed)</li>
            <li>Payments are non-refundable once work has commenced</li>
            <li>Late payments may result in project suspension</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Subscription Services</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Monthly or annual billing cycles</li>
            <li>Automatic renewal unless cancelled</li>
            <li>30-day notice required for cancellation</li>
            <li>No refunds for partial months</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>

          <h3 className="text-xl font-semibold mb-3">Client Content</h3>
          <p className="mb-4">
            Clients retain ownership of all content, images, and materials provided to Dream Pixel. By providing
            content, you grant us a license to use it for your project.
          </p>

          <h3 className="text-xl font-semibold mb-3">Developed Work</h3>
          <p className="mb-4">
            Upon full payment, clients may receive login details to their website, if it was built using a WordPress
            site. If it was custom-developed, we will not give out login details for security reasons, however, we can
            provide the website code. Dream Pixel retains the right to use general methodologies, techniques, and
            knowledge gained.
          </p>

          <h3 className="text-xl font-semibold mb-3">Third-Party Assets</h3>
          <p className="mb-4">
            Some projects may include third-party assets (fonts, images, plugins) subject to their own licensing terms.
            Clients are responsible for ongoing license compliance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Website Hosting and Maintenance</h2>

          <h3 className="text-xl font-semibold mb-3">Service Availability</h3>
          <p className="mb-4">
            Whilst we aim for a minimum 99.9% uptime (excluding scheduled maintenance) sometimes technical issues can
            bring a site down temporarily.
          </p>

          <h3 className="text-xl font-semibold mb-3">Hosting Terms</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Hosting services are provided on a monthly subscription basis or annually if agreed/offered</li>
            <li>Regular backups are performed but clients should maintain their own backups</li>
            <li>We reserve the right to suspend accounts for policy violations</li>
            <li>Migration assistance available for new clients</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Maintenance Services</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Regular security updates and monitoring</li>
            <li>Content updates as per service agreement</li>
            <li>Technical support during business hours</li>
            <li>Emergency support available for critical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Client Responsibilities</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and complete project information</li>
            <li>Supply content, images, and materials in a timely manner</li>
            <li>Respond to requests for feedback within reasonable timeframes</li>
            <li>Ensure all provided content is legally owned or licensed</li>
            <li>Maintain current contact information</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Project Timeline and Revisions</h2>

          <h3 className="text-xl font-semibold mb-3">Timelines</h3>
          <p className="mb-4">
            Project timelines are estimates and may be affected by client response times, scope changes, or unforeseen
            technical challenges.
          </p>

          <h3 className="text-xl font-semibold mb-3">Revisions</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Minor revisions included in project scope</li>
            <li>Major changes may incur additional costs</li>
            <li>Unlimited revisions not guaranteed unless specified</li>
            <li>Final approval required before project completion</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            Dream Pixel's liability is limited to the amount paid for services. We are not liable for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of profits, data, or business opportunities</li>
            <li>Third-party actions or content</li>
            <li>Force majeure events beyond our control</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Confidentiality</h2>
          <p className="mb-4">
            We maintain strict confidentiality regarding client information and projects. We will not disclose
            confidential information without written consent, except as required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Termination</h2>

          <h3 className="text-xl font-semibold mb-3">By Client</h3>
          <p className="mb-4">
            Clients may terminate services with 30 days written notice. Completed work will be delivered, but no refunds
            will be provided for work already performed.
          </p>

          <h3 className="text-xl font-semibold mb-3">By Dream Pixel</h3>
          <p className="mb-4">
            We may terminate services for non-payment, policy violations, or if the working relationship becomes
            untenable. Reasonable notice will be provided when possible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Dispute Resolution</h2>
          <p className="mb-4">
            Any disputes will be resolved through good faith negotiation. If resolution cannot be reached, disputes will
            be subject to the jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Significant changes will be communicated to active
            clients. Continued use of services constitutes acceptance of updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
          <p className="mb-4">
            These terms are governed by the laws of England and Wales. Any legal proceedings will be conducted in the
            appropriate courts of England and Wales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
          <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>
              <strong>Dream Pixel</strong>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@dreampixel.co.uk" className="text-purple-600 hover:underline">
                info@dreampixel.co.uk
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

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">15. Severability</h2>
          <p className="mb-4">
            If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full
            force and effect.
          </p>
        </section>
      </div>
    </div>
  )
}
