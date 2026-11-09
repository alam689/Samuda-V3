import { useEffect, useRef, useState } from "react";

// Equirectangular projection cropped to 78°N–56°S.
const W = 1000, H = 372, N = 78, S = -56;
const proj = (lon, lat) => [((lon + 180) / 360) * W, ((N - lat) / (N - S)) * H];

const DHAKA = [90.41, 23.81];
export const EXPORT_REGIONS = [
  // name, lon, lat, label anchor, label dx, label dy
  ["Europe", 12, 49, "end", -14, -10],
  ["Africa", 21, 3, "end", -14, 22],
  ["East Asia", 118, 34, "start", 14, -8],
  ["South-East Asia", 105, 5, "start", 14, 22],
  ["South Asia", 77, 14, "middle", 0, 30],
];

function ringContains(ring, x, y) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Turns the land MultiPolygon into a grid of dot positions (computed once, then cached). */
let dotsCache;
async function landDots() {
  if (dotsCache) return dotsCache;
  const [{ merge }, topo] = await Promise.all([
    import("topojson-client"),
    import("world-atlas/land-110m.json").then((m) => m.default),
  ]);
  const land = topo.objects.land;
  const geom = merge(topo, land.geometries || [land]);
  const polys = geom.coordinates.map((rings) => {
    let minX = 180, maxX = -180, minY = 90, maxY = -90;
    for (const [x, y] of rings[0]) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
    return { rings, box: [minX, maxX, minY, maxY] };
  });
  const isLand = (lon, lat) => polys.some(({ rings, box }) =>
    lon >= box[0] && lon <= box[1] && lat >= box[2] && lat <= box[3] &&
    ringContains(rings[0], lon, lat) && !rings.slice(1).some((h) => ringContains(h, lon, lat)));

  const dots = [];
  for (let lat = N - 1; lat > S; lat -= 2) {
    for (let lon = -179; lon < 180; lon += 2) {
      if (!isLand(lon, lat)) continue;
      const [x, y] = proj(lon, lat);
      dots.push({ x, y, home: lon > 87.5 && lon < 93 && lat > 20 && lat < 27 });
    }
  }
  dotsCache = dots;
  return dots;
}

export default function WorldMap() {
  const [dots, setDots] = useState(dotsCache || null);
  const [failed, setFailed] = useState(false);
  const reduce = useRef(typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    let alive = true;
    if (!dots) landDots().then((d) => alive && setDots(d)).catch(() => alive && setFailed(true));
    return () => { alive = false; };
  }, [dots]);

  const [hx, hy] = proj(...DHAKA);
  const routes = EXPORT_REGIONS.map(([name, lon, lat, anchor, dx, dy], i) => {
    const [x, y] = proj(lon, lat);
    const dist = Math.hypot(x - hx, y - hy);
    const cx = (x + hx) / 2;
    const cy = Math.min(y, hy) - dist * 0.42 - 10;
    return { name, x, y, anchor, dx, dy, i, d: `M${hx.toFixed(1)} ${hy.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}` };
  });

  return (
    <figure className={`wm${dots ? " is-drawn" : ""}${failed ? " is-drawn no-land" : ""}`}>
      <svg className="wm__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="wm-title">
        <title id="wm-title">World map showing exports from Dhaka, Bangladesh to Europe, Africa, East Asia, South-East Asia and South Asia</title>
        <g className="wm__land">
          {dots && dots.map((d, k) => (
            <circle
              key={k}
              cx={d.x.toFixed(1)}
              cy={d.y.toFixed(1)}
              r={d.home ? 2.6 : 1.9}
              className={d.home ? "is-home" : undefined}
              style={{ "--t": `${((d.x / W) * 1.4).toFixed(2)}s` }}
            />
          ))}
        </g>
        <g className="wm__arcs">
          {routes.map((r) => (
            <g key={r.name}>
              <path className="wm__arc" d={r.d} style={{ "--i": r.i }} />
              {!reduce.current && (
                <circle className="wm__spark" r="3.2">
                  <animateMotion dur={`${(2.6 + r.i * 0.35).toFixed(2)}s`} begin={`${r.i * 0.5}s`} repeatCount="indefinite" path={r.d} />
                </circle>
              )}
            </g>
          ))}
        </g>
        <g className="wm__nodes">
          {routes.map((r) => (
            <g key={r.name} className="wm__node" style={{ "--i": r.i }}>
              <circle className="wm__ring" cx={r.x} cy={r.y} r="9" />
              <circle className="wm__dot" cx={r.x} cy={r.y} r="4.5" />
            </g>
          ))}
        </g>
        <g className="wm__hub">
          <circle className="wm__pulse" cx={hx} cy={hy} r="8" />
          <circle className="wm__pulse wm__pulse--2" cx={hx} cy={hy} r="8" />
          <circle className="wm__hubdot" cx={hx} cy={hy} r="7" />
        </g>
        <text className="wm__label wm__label--hub" x={hx + 14} y={hy - 14}>Dhaka</text>
        <text className="wm__sub" x={hx + 14} y={hy + 1}>BANGLADESH</text>
        <g className="wm__labels">
          {routes.map((r) => (
            <text key={r.name} className="wm__label" x={r.x + r.dx} y={r.y + r.dy} textAnchor={r.anchor}>{r.name}</text>
          ))}
        </g>
      </svg>
      <figcaption className="wm__legend">
        <span className="wm__legend-hub">Head office · Dhaka</span>
        <ul>{EXPORT_REGIONS.map(([name]) => <li key={name}><span className="wm__legend-dot" />{name}</li>)}</ul>
      </figcaption>
    </figure>
  );
}
