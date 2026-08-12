import { getEngagementMetadata, GetInvolvedContentPage } from "@/components/site/get-involved-page";
import { safeguardingPolicyDefaultContent } from "@/lib/cms/get-involved-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getEngagementMetadata("safeguarding-policy", "Safeguarding Policy", "Explore PSTC safeguarding commitments and resources.");
}
export default function Page() {
  return <GetInvolvedContentPage pageKey="safeguarding-policy" pageName="Safeguarding Policy" parentName="Training & Certification" parentHref="/get-involved/training-certification" defaultContent={safeguardingPolicyDefaultContent} />;
}
