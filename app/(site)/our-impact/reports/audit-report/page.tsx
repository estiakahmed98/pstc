import { getImpactMetadata, ImpactPage } from "@/components/site/impact-page";
import { auditReportDefaultContent } from "@/lib/cms/impact-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getImpactMetadata("audit-report", "Audit Report", "Access approved PSTC audit reports and accountability documents.");
}
export default function Page() {
  return <ImpactPage pageKey="audit-report" pageName="Audit Report" parentName="Reports" parentHref="/our-impact/reports" defaultContent={auditReportDefaultContent} />;
}
