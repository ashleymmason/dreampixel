export type Location = {
  slug: string
  name: string
  region: string
  descriptor: string
  intro: string
  localContext: string
  image: string
  imageAlt: string
  nearby: string[]
  focus: string[]
}

export const locations: Location[] = [
  { slug: "barnstaple", name: "Barnstaple", region: "North Devon", descriptor: "Web design for businesses in Barnstaple and North Devon.", intro: "A considered digital partner for Barnstaple businesses that want to look credible, communicate clearly and turn more of the right visits into conversations.", localContext: "From our North Devon home base, we understand the character of Barnstaple’s independent businesses, professional services, hospitality and growing creative community.", image: "/images/barnstaple-reflected-in-water.webp", imageAlt: "Barnstaple riverside reflected in the water", nearby: ["North Devon", "South Molton", "Ilfracombe"], focus: ["Web design", "Website development", "Local SEO"] },
  { slug: "bideford", name: "Bideford", region: "North Devon", descriptor: "Web design for businesses in Bideford and across the Torridge coast.", intro: "Websites with the clarity and character Bideford businesses need to compete locally, reach beyond the town and make a stronger first impression.", localContext: "Bideford’s waterfront, independent businesses and surrounding communities need digital experiences that feel personal, useful and easy to act on.", image: "/images/bideford-waterfront.png", imageAlt: "Bideford waterfront and historic bridge", nearby: ["Torridge", "Westward Ho!", "Appledore"], focus: ["Web design", "E-commerce", "SEO"] },
  { slug: "exeter", name: "Exeter", region: "East Devon", descriptor: "Strategic web design for Exeter businesses ready to grow.", intro: "A sharper website for Exeter organisations that need to explain a complex offer, stand apart in a competitive market and generate better enquiries.", localContext: "Exeter combines ambitious independent businesses, professional services, education and technology. Your website should reflect the confidence of the city you operate in.", image: "/images/exeter-aerial-view.jpeg", imageAlt: "Aerial view of Exeter and the River Exe", nearby: ["East Devon", "Exmouth", "Crediton"], focus: ["Web design", "Website redesign", "Technical SEO"] },
  { slug: "plymouth", name: "Plymouth", region: "South Devon", descriptor: "High-performance web design for Plymouth businesses.", intro: "Digital experiences that help Plymouth businesses make their value obvious, build trust quickly and reach customers across the city and beyond.", localContext: "Plymouth is a city of makers, marine businesses, hospitality, professional services and ambitious independents. We shape websites around the audience and the opportunity.", image: "/images/plymouth-hoe-aerial.jpeg", imageAlt: "Plymouth Hoe and coastline from above", nearby: ["South Devon", "Ivybridge", "Saltash"], focus: ["Web design", "E-commerce", "Content"] },
  { slug: "torquay", name: "Torquay", region: "South Devon", descriptor: "Web design for Torquay and English Riviera businesses.", intro: "Memorable, conversion-focused websites for Torquay businesses in hospitality, tourism, retail and professional services.", localContext: "In a destination market, your website has to create confidence before someone arrives. We combine strong visual direction with clear journeys and useful content.", image: "/images/torquay-harbor.jpeg", imageAlt: "Torquay harbour and waterfront", nearby: ["English Riviera", "Paignton", "Newton Abbot"], focus: ["Web design", "Website redesign", "Local SEO"] },
]

export const getLocation = (slug: string) => locations.find((location) => location.slug === slug)
export const locationSlugs = locations.map((location) => location.slug)
