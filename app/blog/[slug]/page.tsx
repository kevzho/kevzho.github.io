import { notFound } from "next/navigation";
import StemmedInPage, { metadata } from "../../stemmed-in/page";

export { metadata };

export function generateStaticParams() {
  return [{ slug: "stemmed-in" }];
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== "stemmed-in") notFound();

  return <StemmedInPage />;
}
