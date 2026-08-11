import { getInitiativeMetadata, InitiativePage } from "@/components/site/initiative-page";
import { pstcComplexDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() { return getInitiativeMetadata("pstc-complex", "PSTC Complex"); }
export default function Page() { return <InitiativePage pageKey="pstc-complex" pageName="PSTC Complex" variant="complex" defaultContent={pstcComplexDefaultContent} />; }
