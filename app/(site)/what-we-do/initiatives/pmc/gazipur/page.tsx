import {
  getPmcLocationMetadata,
  PmcLocationPage,
} from "@/components/site/pmc-location-page";
import { pmcGazipurDefaultContent } from "@/lib/cms/content-page-defaults";

export const dynamic = "force-dynamic";

export function generateMetadata() {
  return getPmcLocationMetadata("pmc-gazipur", "Gazipur");
}

export default function Page() {
  return (
    <PmcLocationPage
      pageKey="pmc-gazipur"
      location="Gazipur"
      defaultContent={pmcGazipurDefaultContent}
    />
  );
}
