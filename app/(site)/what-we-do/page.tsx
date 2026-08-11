import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { whatWeDoDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("what-we-do", "What We Do"); }
export default function Page() { return <PortfolioPage pageKey="what-we-do" pageName="What We Do" variant="overview" defaultContent={whatWeDoDefaultContent} />; }
