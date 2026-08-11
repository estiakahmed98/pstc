import { getInitiativeMetadata, InitiativePage } from "@/components/site/initiative-page";
import { pmcDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() { return getInitiativeMetadata("pmc", "PSTC Model Clinic (PMC)"); }
export default function Page() { return <InitiativePage pageKey="pmc" pageName="PSTC Model Clinic (PMC)" variant="pmc" defaultContent={pmcDefaultContent} />; }
