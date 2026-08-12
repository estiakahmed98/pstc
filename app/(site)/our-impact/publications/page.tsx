import { getImpactMetadata, ImpactPage } from "@/components/site/impact-page";
import { publicationsImpactDefaultContent } from "@/lib/cms/impact-page-defaults";

export function generateMetadata() {
  return getImpactMetadata(undefined, "Publications", "Discover PSTC publications and knowledge products.");
}
export default function Page() {
  return <ImpactPage pageName="Publications" defaultContent={publicationsImpactDefaultContent} />;
}
