import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { youthEngagementDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("youth-engagement", "Youth Engagement"); }
export default function Page() { return <PortfolioPage pageKey="youth-engagement" pageName="Youth Engagement" variant="youth" defaultContent={youthEngagementDefaultContent} />; }
