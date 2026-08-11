import {
  getPmcLocationMetadata,
  PmcLocationPage,
} from "@/components/site/pmc-location-page";
import { pmcKushtiaDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";

export function generateMetadata() {
  return getPmcLocationMetadata("pmc-kushtia", "Kushtia");
}

export default function Page() {
  return (
    <PmcLocationPage
      pageKey="pmc-kushtia"
      location="Kushtia"
      defaultContent={pmcKushtiaDefaultContent}
    />
  );
}
