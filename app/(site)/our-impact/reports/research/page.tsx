import { getImpactMetadata, ImpactPage } from "@/components/site/impact-page";
import { researchDefaultContent } from "@/lib/cms/impact-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getImpactMetadata("research", "Research", "Explore PSTC research, studies, briefs and learning products.");
}
export default function Page() {
  return <ImpactPage pageKey="research" pageName="Research" parentName="Reports" parentHref="/our-impact/reports" defaultContent={researchDefaultContent} />;
}
