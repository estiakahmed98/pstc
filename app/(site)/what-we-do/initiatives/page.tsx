import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { initiativesIndexDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("initiatives", "Our Initiatives"); }
export default function Page() { return <PortfolioPage pageKey="initiatives" pageName="Our Initiatives" variant="initiatives" defaultContent={initiativesIndexDefaultContent} />; }
