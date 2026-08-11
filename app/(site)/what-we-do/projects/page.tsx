import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { projectsIndexDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("projects", "Our Projects"); }
export default function Page() { return <PortfolioPage pageKey="projects" pageName="Our Projects" variant="projects" defaultContent={projectsIndexDefaultContent} />; }
