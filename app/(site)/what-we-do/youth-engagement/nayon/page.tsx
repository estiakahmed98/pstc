import { getPortfolioMetadata, PortfolioPage } from "@/components/site/portfolio-page";
import { nayonDefaultContent } from "@/lib/cms/content-page-defaults";
export const dynamic = "force-dynamic";
export function generateMetadata() { return getPortfolioMetadata("nayon", "NaYoN"); }
export default function Page() { return <PortfolioPage pageKey="nayon" pageName="NaYoN" variant="nayon" defaultContent={nayonDefaultContent} />; }
