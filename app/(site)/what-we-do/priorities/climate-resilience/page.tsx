import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { climateResilienceDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("climate-resilience", "Climate Resilience & Inclusiveness"); }
export default function Page() { return <PortfolioPage pageKey="climate-resilience" pageName="Climate Resilience & Inclusiveness" variant="climate" defaultContent={climateResilienceDefaultContent} />; }
