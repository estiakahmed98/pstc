import { getImpactMetadata, ImpactPage } from "@/components/site/impact-page";
import { eventsMediaDefaultContent } from "@/lib/cms/impact-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() {
  return getImpactMetadata("events-media", "Events & Media", "Follow PSTC events, programme stories and media updates.");
}
export default function Page() {
  return <ImpactPage pageKey="events-media" pageName="Events & Media" defaultContent={eventsMediaDefaultContent} />;
}
