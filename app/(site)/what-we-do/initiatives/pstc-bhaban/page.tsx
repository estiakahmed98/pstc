import { getInitiativeMetadata, InitiativePage } from "@/components/site/initiative-page";
import { pstcBhabanDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() { return getInitiativeMetadata("pstc-bhaban", "PSTC Bhaban"); }
export default function Page() { return <InitiativePage pageKey="pstc-bhaban" pageName="PSTC Bhaban" variant="bhaban" defaultContent={pstcBhabanDefaultContent} />; }
