import { getImpactMetadata, ImpactPage } from "@/components/site/impact-page";
import { projanmoKothaDefaultContent } from "@/lib/cms/impact-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getImpactMetadata("projanmo-kotha", "Projanmo Kotha", "Explore Projanmo Kotha publications from PSTC.");
}
export default function Page() {
  return <ImpactPage pageKey="projanmo-kotha" pageName="Projanmo Kotha" parentName="Publications" parentHref="/our-impact/publications" defaultContent={projanmoKothaDefaultContent} />;
}
