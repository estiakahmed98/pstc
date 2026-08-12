import { getEngagementMetadata, GetInvolvedContentPage } from "@/components/site/get-involved-page";
import { getInvolvedDefaultContent } from "@/lib/cms/get-involved-page-defaults";

export function generateMetadata() {
  return getEngagementMetadata(undefined, "Get Involved", "Explore careers, training and ways to engage with PSTC.");
}
export default function Page() {
  return <GetInvolvedContentPage pageName="Get Involved" defaultContent={getInvolvedDefaultContent} />;
}
