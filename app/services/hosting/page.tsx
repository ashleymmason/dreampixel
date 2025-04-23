import type { Metadata } from "next"
import ClientWrapper from "./client-wrapper"

export const metadata: Metadata = {
  title: "Website Hosting Services | Dream Pixel",
  description:
    "Reliable and secure website hosting services with 24/7 support, backups, and maintenance. Choose from our Basic or Premium hosting packages.",
}

export default function HostingPage() {
  return <ClientWrapper />
}
