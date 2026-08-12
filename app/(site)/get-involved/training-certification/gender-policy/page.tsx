import { getEngagementMetadata, GetInvolvedContentPage } from "@/components/site/get-involved-page";
import { genderPolicyDefaultContent } from "@/lib/cms/get-involved-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getEngagementMetadata("gender-policy", "Gender Policy", "Explore PSTC's gender equality and inclusion commitments.");
}
export default function Page() {
  return <GetInvolvedContentPage pageKey="gender-policy" pageName="Gender Policy" parentName="Training & Certification" parentHref="/get-involved/training-certification" defaultContent={genderPolicyDefaultContent} />;
}
