import { getEngagementMetadata, GetInvolvedContentPage } from "@/components/site/get-involved-page";
import { jobsPageDefaultContent } from "@/lib/cms/get-involved-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getEngagementMetadata("jobs", "Jobs", "Discover current career opportunities at PSTC.");
}
export default function Page() {
  return <GetInvolvedContentPage pageKey="jobs" pageName="Jobs" defaultContent={jobsPageDefaultContent} />;
}
