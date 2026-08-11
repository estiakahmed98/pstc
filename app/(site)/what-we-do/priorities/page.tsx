import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { prioritiesDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("priorities", "Our Priorities"); }
export default function Page() { return <PortfolioPage pageKey="priorities" pageName="Our Priorities" variant="priorities" defaultContent={prioritiesDefaultContent} />; }
