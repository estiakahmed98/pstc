import { getImpactMetadata, ImpactPage } from "@/components/site/impact-page";
import { annualReportDefaultContent } from "@/lib/cms/impact-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getImpactMetadata("annual-report", "Annual Report", "Explore PSTC annual reports and organisational progress.");
}
export default function Page() {
  return <ImpactPage pageKey="annual-report" pageName="Annual Report" parentName="Reports" parentHref="/our-impact/reports" defaultContent={annualReportDefaultContent} />;
}
