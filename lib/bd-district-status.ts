export type DistrictStatus = "branch" | "none";

export const PSTC_BRANCH_DISTRICT_SLUGS = [
  "dhaka",
  "gazipur",
  "narayanganj",
  "munshiganj",
  "kishoreganj",
  "narsingdi",
  "noakhali",
  "lakshmipur",
  "mymensingh",
  "sherpur",
  "netrokona",
  "comilla",
  "feni",
  "chandpur",
  "chittagong",
  "coxsBazar",
  "faridpur",
  "jessore",
  "khulna",
  "kushtia",
] as const;

const PSTC_BRANCH_DISTRICTS = new Set<string>(PSTC_BRANCH_DISTRICT_SLUGS);

export function getDistrictStatus(slug: string): DistrictStatus {
  return PSTC_BRANCH_DISTRICTS.has(slug) ? "branch" : "none";
}

export const PSTC_BRANCH_COUNT = PSTC_BRANCH_DISTRICTS.size;
