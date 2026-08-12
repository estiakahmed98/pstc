import { getEngagementMetadata, GetInvolvedContentPage } from "@/components/site/get-involved-page";
import { trainingCertificationDefaultContent } from "@/lib/cms/get-involved-page-defaults";

export function generateMetadata() {
  return getEngagementMetadata(undefined, "Training & Certification", "Explore PSTC training and organisational policy resources.");
}
export default function Page() {
  return <GetInvolvedContentPage pageName="Training & Certification" defaultContent={trainingCertificationDefaultContent} />;
}
