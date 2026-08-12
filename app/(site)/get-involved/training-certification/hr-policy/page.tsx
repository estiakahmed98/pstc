import { getEngagementMetadata, GetInvolvedContentPage } from "@/components/site/get-involved-page";
import { hrPolicyDefaultContent } from "@/lib/cms/get-involved-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getEngagementMetadata("hr-policy", "HR Policy", "Explore PSTC's people management policies and resources.");
}
export default function Page() {
  return <GetInvolvedContentPage pageKey="hr-policy" pageName="HR Policy" parentName="Training & Certification" parentHref="/get-involved/training-certification" defaultContent={hrPolicyDefaultContent} />;
}
