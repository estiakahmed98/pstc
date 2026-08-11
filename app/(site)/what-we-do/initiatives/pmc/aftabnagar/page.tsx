import {
  getPmcLocationMetadata,
  PmcLocationPage,
} from "@/components/site/pmc-location-page";
import { pmcAftabnagarDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";

export function generateMetadata() {
  return getPmcLocationMetadata("pmc-aftabnagar", "Aftabnagar");
}

export default function Page() {
  return (
    <PmcLocationPage
      pageKey="pmc-aftabnagar"
      location="Aftabnagar"
      defaultContent={pmcAftabnagarDefaultContent}
    />
  );
}
