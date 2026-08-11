import { getInitiativeMetadata, InitiativePage } from "@/components/site/initiative-page";
import { caregiversDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";
export function generateMetadata() { return getInitiativeMetadata("caregivers", "Caregivers"); }
export default function Page() { return <InitiativePage pageKey="caregivers" pageName="Caregivers" variant="caregivers" defaultContent={caregiversDefaultContent} />; }
