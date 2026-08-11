import { getInitiativeMetadata, InitiativePage } from "@/components/site/initiative-page";
import { piesDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() { return getInitiativeMetadata("pies", "PSTC Institute for Employment Support (PIES)"); }
export default function Page() { return <InitiativePage pageKey="pies" pageName="PSTC Institute for Employment Support (PIES)" variant="pies" defaultContent={piesDefaultContent} />; }
