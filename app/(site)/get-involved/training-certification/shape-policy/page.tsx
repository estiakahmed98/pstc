import { getEngagementMetadata, GetInvolvedContentPage } from "@/components/site/get-involved-page";
import { shapePolicyDefaultContent } from "@/lib/cms/get-involved-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getEngagementMetadata("shape-policy", "SHaPE Policy", "Access approved PSTC SHaPE guidance and resources.");
}
export default function Page() {
  return <GetInvolvedContentPage pageKey="shape-policy" pageName="SHaPE Policy" parentName="Training & Certification" parentHref="/get-involved/training-certification" defaultContent={shapePolicyDefaultContent} />;
}
