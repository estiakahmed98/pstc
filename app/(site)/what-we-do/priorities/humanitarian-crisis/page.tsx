import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { humanitarianCrisisDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("humanitarian-crisis", "Humanitarian Crisis (Preparedness & Response)"); }
export default function Page() { return <PortfolioPage pageKey="humanitarian-crisis" pageName="Humanitarian Crisis (Preparedness & Response)" variant="humanitarian" defaultContent={humanitarianCrisisDefaultContent} />; }
