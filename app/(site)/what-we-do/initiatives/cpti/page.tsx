import { getInitiativeMetadata, InitiativePage } from "@/components/site/initiative-page";
import { cptiDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() { return getInitiativeMetadata("cpti", "Community Paramedic Training Institute (CPTI)"); }
export default function Page() { return <InitiativePage pageKey="cpti" pageName="Community Paramedic Training Institute (CPTI)" variant="cpti" defaultContent={cptiDefaultContent} />; }
