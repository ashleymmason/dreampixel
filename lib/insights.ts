export type Insight = {
  slug: string
  category: "Web Design" | "SEO"
  title: string
  excerpt: string
  date: string
  isoDate: string
  readTime: string
  image: string
  alt: string
  intro: string
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
  related: string[]
}

export const insights: Insight[] = [
  {
    slug: "why-good-web-design-starts-before-the-design",
    category: "Web Design",
    title: "Why good web design starts before the design",
    excerpt: "The strongest websites are shaped by better questions long before a colour palette or component is chosen.",
    date: "22 September 2026",
    isoDate: "2026-09-22",
    readTime: "6 min read",
    image: "/images/responsive-showcase.png",
    alt: "Responsive website layouts displayed across devices",
    intro: "A website is not a poster. It is a working part of a business, and the design gets better when the thinking underneath it is clear.",
    sections: [
      { heading: "Start with the job", paragraphs: ["Before we ask what a website should look like, we ask what it needs to do. That might be making a complicated service easier to understand, helping the right people find a business, or giving an existing reputation somewhere better to land.", "The answer gives the project a useful centre of gravity. Without it, design decisions become a collection of preferences."], bullets: ["What needs to change for the business?", "What does the visitor need to understand next?", "What should feel easier after launch?"] },
      { heading: "Structure creates confidence", paragraphs: ["Good design often feels effortless because the structure has done the hard work. Clear navigation, purposeful content and a considered page hierarchy help people move without having to decode the interface."], },
      { heading: "Make the visual system earn its place", paragraphs: ["Colour, type and imagery should make the message more memorable, not distract from it. We like visual identities with a point of view, but every distinctive decision still has to help someone understand, trust or act."], },
    ],
    related: ["the-website-redesign-question", "seo-is-not-a-layer-you-add-later"],
  },
  {
    slug: "seo-is-not-a-layer-you-add-later",
    category: "SEO",
    title: "SEO is not a layer you add later",
    excerpt: "Search visibility is shaped by the same decisions that make a website clearer, faster and more useful.",
    date: "15 September 2026",
    isoDate: "2026-09-15",
    readTime: "7 min read",
    image: "/images/portfolio/rcs-tuning.png",
    alt: "RCS Tuning website project shown on screen",
    intro: "The best SEO work rarely looks like SEO. It looks like a website that understands its audience, answers useful questions and makes the next step obvious.",
    sections: [
      { heading: "Search follows clarity", paragraphs: ["Search engines need to understand a page, but so do people. A clear page title, sensible structure and useful language are not separate SEO tricks; they are the basic ingredients of a good experience."], },
      { heading: "Performance is part of the message", paragraphs: ["A slow page changes how a business feels before a visitor has read a word. Technical foundations, responsive imagery and disciplined front-end decisions protect both discoverability and trust."], bullets: ["Useful page architecture", "Descriptive, human language", "Fast, accessible experiences"] },
      { heading: "Build a system, not a spike", paragraphs: ["Organic visibility compounds when every service page, article and case study supports the next one. That is why SEO belongs in the planning conversation, not in a handover checklist."], },
    ],
    related: ["why-good-web-design-starts-before-the-design", "the-website-redesign-question"],
  },
  {
    slug: "the-website-redesign-question",
    category: "Web Design",
    title: "The question to ask before redesigning your website",
    excerpt: "A redesign should solve a real business problem, not simply make the old version feel dated.",
    date: "8 September 2026",
    isoDate: "2026-09-08",
    readTime: "5 min read",
    image: "/images/portfolio/withymead-cottage.png",
    alt: "Withymead Cottage website project",
    intro: "Before replacing a website, look closely at what is not working. The answer usually points to a more useful brief than ‘make it look better’. ",
    sections: [
      { heading: "Find the friction", paragraphs: ["Maybe the site no longer reflects the business. Maybe the right visitors cannot find the right information. Maybe the team has stopped updating it because doing so feels difficult. Each problem asks for a different response."], },
      { heading: "Keep what is working", paragraphs: ["A redesign is not an excuse to throw away recognition, useful content or the parts of the experience people already understand. Good work edits with intent."], },
      { heading: "Give the next version a job", paragraphs: ["The most useful redesigns leave a business with more than a new front door. They create a clearer system for communicating, marketing and growing."], },
    ],
    related: ["why-good-web-design-starts-before-the-design", "seo-is-not-a-layer-you-add-later"],
  },
  {
    slug: "how-much-does-a-website-cost",
    category: "Web Design",
    title: "How much does a website cost?",
    excerpt: "A useful way to think about website cost — and the questions that matter more than a headline price.",
    date: "29 September 2026",
    isoDate: "2026-09-29",
    readTime: "7 min read",
    image: "/images/responsive-showcase.png",
    alt: "Responsive website layouts displayed across devices",
    intro: "There is no honest one-size-fits-all price for a useful website. The cost follows the decisions the project needs to make and the work required to make them well.",
    sections: [
      { heading: "Scope changes the shape of the project", paragraphs: ["A small brochure site, a growing service business and an e-commerce catalogue have different needs. The number of pages, templates, products and user journeys all affect the work involved.", "The useful question is not simply how many pages you need. It is what each part of the website needs to help someone understand or do."] },
      { heading: "The main factors that influence cost", paragraphs: ["Website cost can be shaped by strategy and discovery, bespoke design, development functionality, content, integrations, e-commerce requirements, SEO and ongoing support. A project that needs a content model, booking system or product catalogue will need a different plan from a simple marketing site."], bullets: ["The number and complexity of pages", "Design and interaction requirements", "Functionality, integrations or e-commerce", "Content creation and migration", "SEO foundations and ongoing improvement"] },
      { heading: "Ask what is included", paragraphs: ["A useful proposal should make the work visible: what is being designed, what is being built, what content is needed, how revisions work and what happens after launch. Clarity at the start makes it easier to compare approaches and avoid surprises later."] },
      { heading: "Start with the problem", paragraphs: ["The best starting point is a conversation about the business, the audience and the change the website needs to create. From there, the right scope can be shaped around the opportunity rather than a fixed package."] },
    ],
    related: ["why-good-web-design-starts-before-the-design", "the-website-redesign-question"],
  },
  {
    slug: "local-seo-for-devon-businesses",
    category: "SEO",
    title: "Local SEO for Devon businesses: what actually helps",
    excerpt: "A practical guide to becoming more visible for the local searches that matter to a Devon business.",
    date: "3 October 2026", isoDate: "2026-10-03", readTime: "8 min read", image: "/images/barnstaple-reflected-in-water.webp", alt: "Barnstaple riverside in North Devon",
    intro: "Local SEO is not about repeating a town name. It is about making your business, service area and evidence clear enough for people and search engines to trust.",
    sections: [],
    related: ["seo-is-not-a-layer-you-add-later", "how-to-write-a-service-page-that-ranks"]
  },
  {
    slug: "how-to-write-a-service-page-that-ranks",
    category: "SEO",
    title: "How to write a service page that ranks and converts",
    excerpt: "The structure, evidence and language that make a service page useful to both searchers and search engines.",
    date: "10 October 2026", isoDate: "2026-10-10", readTime: "9 min read", image: "/images/responsive-showcase.png", alt: "Responsive website service page layouts",
    intro: "A strong service page does more than target a phrase. It helps the right visitor decide that your business understands their problem and has a credible way to solve it.",
    sections: [{ heading: "Match the page to the question", paragraphs: ["A page targeting web design should explain web design. A page targeting technical SEO should not make the reader hunt through generic agency copy to understand what is included."] }, { heading: "Use headings as a useful route", paragraphs: ["Good H2s answer the next questions: who is the service for, what does the process involve, what does it include, what evidence supports it and what should someone do next?"] }, { heading: "Add proof without making claims you cannot support", paragraphs: ["Case studies, specific deliverables, experience, testimonials and clear process details are stronger than vague superlatives. Make the evidence easy to find and easy to understand."] }], related: ["local-seo-for-devon-businesses", "why-good-web-design-starts-before-the-design"]
  },
  {
    slug: "website-accessibility-basics-for-businesses",
    category: "Web Design",
    title: "Website accessibility basics every business should understand",
    excerpt: "Accessible websites are clearer, more usable and more resilient for everyone—not just people using assistive technology.",
    date: "17 October 2026", isoDate: "2026-10-17", readTime: "7 min read", image: "/images/responsive-showcase.png", alt: "Responsive website interfaces",
    intro: "Accessibility is part of good web design. It helps more people use the site, improves clarity and often exposes friction that affects every visitor.",
    sections: [{ heading: "Make the content operable", paragraphs: ["Keyboard access, visible focus states, sensible heading order, readable contrast and large enough touch targets make a site easier to navigate across devices and abilities."] }, { heading: "Write and design for understanding", paragraphs: ["Plain language, descriptive link text, meaningful labels and useful error messages help people complete tasks without guessing what the interface wants from them."] }, { heading: "Treat accessibility as ongoing quality", paragraphs: ["Testing is not a final checkbox. Content changes, new components and third-party tools can introduce issues, so accessibility should remain part of maintenance and improvement."] }], related: ["the-website-redesign-question", "why-good-web-design-starts-before-the-design"]
  },
  {
    slug: "website-speed-and-core-web-vitals",
    category: "SEO",
    title: "Website speed and Core Web Vitals: a practical guide",
    excerpt: "What makes a website feel fast, what Core Web Vitals measure and where a business should start improving.",
    date: "24 October 2026", isoDate: "2026-10-24", readTime: "8 min read", image: "/images/responsive-showcase.png", alt: "Website layouts on mobile and desktop",
    intro: "Performance is part of the experience. A fast website feels more trustworthy, is easier to use on mobile and gives search engines a healthier technical foundation.",
    sections: [{ heading: "Speed is more than a score", paragraphs: ["Lab tools can reveal useful problems, but real people experience the page through different phones, networks and browsers. Look at both measured signals and the moments that feel slow to a customer."] }, { heading: "Start with the biggest causes", paragraphs: ["Oversized images, unnecessary scripts, slow hosting, layout shifts and heavy third-party tools are common places to investigate. Fixing the largest bottleneck usually matters more than polishing tiny details."] }, { heading: "Protect performance as the site grows", paragraphs: ["New content, tracking, integrations and campaigns can change a page. Build performance into the publishing and maintenance process rather than treating it as a one-off launch task."] }], related: ["seo-is-not-a-layer-you-add-later", "the-website-redesign-question"]
  },
  {
    slug: "ecommerce-website-content-that-sells",
    category: "Web Design",
    title: "E-commerce website content that helps people buy",
    excerpt: "Product pages, category structure and buying information that reduce doubt in an online shop.",
    date: "31 October 2026", isoDate: "2026-10-31", readTime: "8 min read", image: "/images/portfolio/truck-bracket.png", alt: "E-commerce website project interface",
    intro: "E-commerce design is not only about making products look good. It is about helping people understand the choice, trust the business and complete the purchase with confidence.",
    sections: [{ heading: "Give each product a useful job", paragraphs: ["A product page should answer what it is, who it is for, why it is different, what it includes and what happens after someone orders. Images and copy should work together rather than repeat each other."] }, { heading: "Make categories useful", paragraphs: ["A clear catalogue structure helps shoppers browse and helps search engines understand the relationship between products. Use the language customers use, not only internal product names."] }, { heading: "Remove uncertainty near the decision", paragraphs: ["Delivery, returns, availability, sizing, specifications, payment and support information can all affect a purchase. Make the important reassurance easy to find on mobile."] }], related: ["why-good-web-design-starts-before-the-design", "website-speed-and-core-web-vitals"]
  },
  {
    slug: "website-content-planning-for-small-business",
    category: "Web Design",
    title: "Website content planning for a small business",
    excerpt: "A realistic content plan for businesses that need a clearer website without creating a publishing burden.",
    date: "7 November 2026", isoDate: "2026-11-07", readTime: "7 min read", image: "/images/portfolio/rjh-construction.png", alt: "Business website project for a construction company",
    intro: "Small businesses do not need endless content. They need the right pages, written for the right questions, and a practical way to keep those pages useful.",
    sections: [{ heading: "Start with the buying journey", paragraphs: ["List the questions someone asks before contacting you, then make sure the website answers them in the order they arise. This usually reveals a better structure than copying a competitor’s navigation."] }, { heading: "Choose a sustainable publishing rhythm", paragraphs: ["A helpful article every few weeks can be more valuable than a burst of generic posts followed by silence. Choose topics from customer conversations, sales objections and the work you actually do."] }, { heading: "Connect content to commercial pages", paragraphs: ["Insights should guide people towards the service, product or contact page that makes sense next. Internal links are part of the user journey, not just an SEO afterthought."] }], related: ["how-to-write-a-service-page-that-ranks", "local-seo-for-devon-businesses"]
  },
]

export const categories = ["All", "Web Design", "SEO"] as const
export function getInsight(slug: string) { return insights.find((item) => item.slug === slug) }
export function getRelated(slugs: string[]) { return slugs.map((slug) => getInsight(slug)).filter(Boolean) as Insight[] }
