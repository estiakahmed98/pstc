import { getImpactMetadata, ImpactPage } from "@/components/site/impact-page";
import { reportsImpactDefaultContent } from "@/lib/cms/impact-page-defaults";

export function generateMetadata() {
  return getImpactMetadata(undefined, "Reports", "Access PSTC annual reports, audit reports and research.");
}
export default function Page() {
  return <ImpactPage pageName="Reports" defaultContent={reportsImpactDefaultContent} />;
}
