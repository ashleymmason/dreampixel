import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Dream Pixel",
  description:
    "Terms of Service for Dream Pixel - Read our terms and conditions for using our web design and digital marketing services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using Dream Pixel's website and services, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="mb-4">Dream Pixel provides:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Web design and development services</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click (PPC) advertising management</li>
              <li>Content creation and marketing</li>
              <li>UX/UI design services</li>
              <li>Website hosting and maintenance</li>
              <li>Digital marketing consultancy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Service Terms and Conditions</h2>

            <h3 className="text-xl font-medium mb-3">Project Scope</h3>
            <p className="mb-4">
              All projects begin with a detailed scope of work that outlines deliverables, timelines, and costs. Changes
              to the agreed scope may result in additional charges and timeline adjustments.
            </p>

            <h3 className="text-xl font-medium mb-3">Payment Terms</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Full project payment required before work starts, unless agreed otherwise</li>
              <li>Final payment due upon project completion (if staggered payments agreed)</li>
              <li>Monthly retainer services billed in advance</li>
              <li>Late payments may incur additional charges</li>
              <li>All prices are exclusive of VAT where applicable</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Client Responsibilities</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide necessary content, images, and materials in a timely manner</li>
              <li>Respond to requests for feedback within agreed timeframes</li>
              <li>Ensure all provided content is legally compliant and copyright-free</li>
              <li>Maintain backup copies of all website data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>

            <h3 className="text-xl font-medium mb-3">Client Content</h3>
            <p className="mb-4">
              Clients retain ownership of all content, images, and materials provided to Dream Pixel. Clients grant
              Dream Pixel a license to use these materials for the duration of the project.
            </p>

            <h3 className="text-xl font-medium mb-3">Developed Work</h3>
            <p className="mb-4">
              Upon full payment, clients may receive login details to their website, if it was built using a WordPress
              site. If it was custom-developed, we will not give out login details for security reasons, however, we can
              provide the website code. Dream Pixel retains the right to use general methodologies, techniques, and
              knowledge gained.
            </p>

            <h3 className="text-xl font-medium mb-3">Third-Party Components</h3>
            <p className="mb-4">
              Some projects may include third-party themes, plugins, or components subject to their own licensing terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Website Hosting and Maintenance</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Hosting services are provided on a monthly subscription basis or annually if agreed/offered</li>
              <li>
                Whilst we aim for a minimum 99.9% uptime (excluding scheduled maintenance) sometimes technical issues
                can bring a site down temporarily
              </li>
              <li>Regular backups are performed, but clients should maintain their own backups</li>
              <li>Security updates and monitoring are included in hosting packages</li>
              <li>Termination requires 30 days written notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Warranties and Disclaimers</h2>
            <p className="mb-4">
              Dream Pixel warrants that services will be performed with professional skill and care. However:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>We cannot guarantee specific search engine rankings or traffic levels</li>
              <li>Website performance may vary based on hosting environment and third-party services</li>
              <li>We are not responsible for content provided by clients</li>
              <li>All services are provided "as is" without warranty of any kind</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              Dream Pixel's liability is limited to the amount paid for services. We are not liable for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Third-party actions or services</li>
              <li>Force majeure events beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="mb-4">Either party may terminate services with written notice. Upon termination:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>All outstanding invoices become immediately due</li>
              <li>Clients receive completed work up to termination date</li>
              <li>Hosting services continue until the end of the billing period</li>
              <li>Confidential information must be returned or destroyed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
            <p className="mb-4">
              Both parties agree to maintain confidentiality of proprietary information shared during the course of
              business. This obligation survives termination of services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Dispute Resolution</h2>
            <p className="mb-4">
              Any disputes will be resolved through good faith negotiation. If unsuccessful, disputes will be subject to
              the jurisdiction of English courts and governed by English law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="mb-4">
              Dream Pixel reserves the right to modify these terms at any time. Clients will be notified of significant
              changes, and continued use of services constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Dream Pixel</strong>
              </p>
              <p>Email: info@dreampixel.co.uk</p>
              <p>Address: Barnstaple, Devon, UK</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
