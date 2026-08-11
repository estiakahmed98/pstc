import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { thematicAreasIndexDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("thematic-areas", "Our Thematic Areas"); }
export default function Page() { return <PortfolioPage pageKey="thematic-areas" pageName="Our Thematic Areas" variant="themes" defaultContent={thematicAreasIndexDefaultContent} />; }
