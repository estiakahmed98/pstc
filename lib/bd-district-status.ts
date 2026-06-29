export type DistrictStatus = "branch" | "none";

const PSTC_BRANCH_DISTRICTS = new Set([
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
]);

export function getDistrictStatus(slug: string): DistrictStatus {
  return PSTC_BRANCH_DISTRICTS.has(slug) ? "branch" : "none";
}

export const PSTC_BRANCH_COUNT = PSTC_BRANCH_DISTRICTS.size;
