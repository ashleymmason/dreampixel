import Link from "next/link"

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[.68rem] font-semibold uppercase tracking-[.16em] text-muted-foreground">
    <Link href="/" className="transition-colors hover:text-primary">Home</Link>
    {items.map((item) => <span key={`${item.label}-${item.href ?? "current"}`} className="flex items-center gap-2"><span aria-hidden="true">/</span>{item.href ? <Link href={item.href} className="transition-colors hover:text-primary">{item.label}</Link> : <span aria-current="page" className="text-foreground">{item.label}</span>}</span>)}
  </nav>
}
