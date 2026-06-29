import fs from "node:fs";
import path from "node:path";
import SVGPathCommander from "svg-path-commander";

const svgPath = path.join(process.cwd(), "public/maps/bd-districts.svg");
const svg = fs.readFileSync(svgPath, "utf8");

function samplePathPolygon(d, steps = 48) {
  const commander = new SVGPathCommander(d);
  const length = commander.getTotalLength();
  const polygon = [];

  for (let i = 0; i <= steps; i += 1) {
    const point = commander.getPointAtLength((length * i) / steps);
    polygon.push([point.x, point.y]);
  }

  return polygon;
}

function polygonArea(points) {
  let area = 0;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    area += (points[j][0] + points[i][0]) * (points[j][1] - points[i][1]);
  }
  return Math.abs(area / 2);
}

function pointInPolygon([x, y], polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 0.00001) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

const pathRegex =
  /<path id="([^"]+)" class="cls-([^"]+)" d="([^"]+)"/g;
const pathById = new Map();
let match;

while ((match = pathRegex.exec(svg))) {
  const [, id, cls, d] = match;
  if (["10", "12", "13", "14"].includes(cls)) continue;

  try {
    const polygon = samplePathPolygon(d);
    const area = polygonArea(polygon);
    if (area < 120) continue;

    const xs = polygon.map((p) => p[0]);
    const ys = polygon.map((p) => p[1]);

    pathById.set(id, {
      id,
      cls,
      d,
      polygon,
      area,
      cx: xs.reduce((a, b) => a + b, 0) / xs.length,
      cy: ys.reduce((a, b) => a + b, 0) / ys.length,
    });
  } catch {
    // skip invalid paths
  }
}

const paths = [...pathById.values()];

const textRegex =
  /<text id="([^"]+)"[^>]*transform="translate\(([\d.]+)\s+([\d.]+)[^"]*"[^>]*><tspan[^>]*>([^<]+)<\/tspan>/g;
const labels = [];

while ((match = textRegex.exec(svg))) {
  labels.push({
    id: match[1],
    name: match[4].replace(/&apos;/g, "'"),
    x: Number(match[2]),
    y: Number(match[3]),
  });
}

const slugToPathId = {};
const districts = [];
const usedPathIds = new Set();

for (const label of labels) {
  const availablePaths = paths.filter((p) => !usedPathIds.has(p.id));
  const pool = availablePaths.length > 0 ? availablePaths : paths;

  const containing = pool.filter((p) =>
    pointInPolygon([label.x, label.y], p.polygon),
  );

  const chosen =
    containing.sort((a, b) => a.area - b.area)[0] ??
    pool
      .map((p) => ({
        p,
        dist: (p.cx - label.x) ** 2 + (p.cy - label.y) ** 2,
      }))
      .sort((a, b) => a.dist - b.dist)[0]?.p;

  if (!chosen) continue;

  usedPathIds.add(chosen.id);
  slugToPathId[label.id] = chosen.id;
  districts.push({
    slug: label.id,
    name: label.name,
    pathId: chosen.id,
    d: chosen.d,
  });
}

const outDir = path.join(process.cwd(), "lib");
fs.writeFileSync(
  path.join(outDir, "bd-district-path-map.json"),
  JSON.stringify(slugToPathId, null, 2),
);
fs.writeFileSync(
  path.join(outDir, "bd-districts.json"),
  JSON.stringify(districts, null, 2),
);

console.log(
  "paths:",
  paths.length,
  "labels:",
  labels.length,
  "districts:",
  districts.length,
);
