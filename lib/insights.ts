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
]

export const categories = ["All", "Web Design", "SEO"] as const
export function getInsight(slug: string) { return insights.find((item) => item.slug === slug) }
export function getRelated(slugs: string[]) { return slugs.map((slug) => getInsight(slug)).filter(Boolean) as Insight[] }
