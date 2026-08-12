import { getImpactMetadata, ImpactPage } from "@/components/site/impact-page";
import { ourImpactDefaultContent } from "@/lib/cms/impact-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getImpactMetadata(undefined, "Our Impact", "Explore PSTC publications, reports, research, events and media stories.");
}
export default function Page() {
  return <ImpactPage pageName="Our Impact" defaultContent={ourImpactDefaultContent} />;
}
