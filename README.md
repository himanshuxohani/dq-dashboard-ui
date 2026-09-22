# Digital Quotient — Operations Wall (orange theme)

A Next.js 14 (App Router) rebuild of the AVEVA-style control-room video wall, restyled with an
orange accent theme, split across two screens plus a combined "Full Wall" view. All panels
currently render **dummy data** from `lib/data.ts` so the whole UI works standalone.

## Pages

- `/` — redirects straight to `/full-wall` (no separate launcher screen)
- `/screen-1` — alarms, pump reliability, OPEX, projects, utility consumption, asset map
- `/screen-2` — process flow diagram, digital-twin view, product gauges, work orders, reliability KPIs, control of work
- `/full-wall` — both screens stacked at full size, one above the other; scroll down to go from Screen 1 to Screen 2. Use the tabs in the top bar to jump straight to either screen individually.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/                  routes (page.tsx per screen)
components/           dashboard panels & chart wrappers
  Panel.tsx              panel chrome used by Screen1Content / Screen2Content
                          (i.e. /screen-1 and /screen-2 — do not need to change)
  Screen1Content.tsx      panel layout for /screen-1
  Screen2Content.tsx      panel layout for /screen-2
  PanelWall.tsx           panel chrome used ONLY by the /full-wall page
  Screen1WallContent.tsx  /full-wall's copy of the screen-1 layout
  Screen2WallContent.tsx  /full-wall's copy of the screen-2 layout
lib/data.ts            dummy data — swap this for live data
```

`/full-wall` intentionally renders its own `PanelWall` / `Screen1WallContent` /
`Screen2WallContent` components rather than reusing `Panel` / `Screen1Content` /
`Screen2Content`. They render identically, but the Wall versions add a
`min-h-0` fix so charts and tables can never overflow their box on short
browser windows — an issue specific to stacking two full dashboards on one
scrollable page. Keeping them separate means `/screen-1` and `/screen-2` are
never affected by anything done to `/full-wall`, and vice versa. If you make
a content change (e.g. edit a panel, add a KPI), you'll generally want to
mirror it in both the `...Content.tsx` and `...WallContent.tsx` versions.

## Wiring up live data

Every panel calls a `getX()` function exported from `lib/data.ts` (e.g. `getAlarmRows()`,
`getGauges()`, `getMonthlyWorkOrders()`). The shapes returned by those functions are the
contract the UI depends on — component code never needs to change.

To go live:

1. Keep the exported function names and return types the same.
2. Replace the body of each function with a `fetch()` call to your API (or use
   `React Query`/`SWR` in the page components for polling).
3. For real-time tag data (alarms, gauges, trend charts), consider a small SSE/WebSocket
   hook that updates state and re-renders the relevant panel — the chart components
   (`SimpleLine`, `ReliabilityTrend`, `HourlyBars`, etc.) already re-render cleanly on
   prop changes.
4. `AlarmsTable`, `EventLog` and the reliability trend charts are the most time-sensitive —
   good candidates for a short polling interval (2–5s) once live.

## Theme

Colors live in `tailwind.config.ts` under `wall`, `panel`, `ink`, `amber`, and `status`.
The whole UI was restyled around the `amber` (orange) scale in place of the source
dashboard's blue/purple accents; alarm severity colors (`status.good/warn/bad/info`)
are kept for legibility.

## Notes

- Charts: [Recharts](https://recharts.org/)
- Icons: [lucide-react](https://lucide.dev/)
- The UK map, plant "digital twin" view, and site photos are stylised SVG/CSS placeholders,
  not real geodata or photography — swap `UkMap.tsx` for a real map (e.g. Mapbox/Leaflet) and
  `PlantIsometric.tsx` for a real 3D viewer when available.
