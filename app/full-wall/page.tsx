import TopBar from "@/components/TopBar";
import Screen1WallContent from "@/components/Screen1WallContent";
import Screen2WallContent from "@/components/Screen2WallContent";

// Each half of the wall renders at full browser width/height (same size as its
// standalone /screen-1 and /screen-2 pages) so nothing is cramped or shrunk.
// The two halves are stacked and the page scrolls vertically between them.
//
// NOTE: this page intentionally uses its own Screen1WallContent /
// Screen2WallContent / PanelWall components (not Screen1Content / Screen2Content
// / Panel). They render identical panels but with an extra min-h-0 fix applied
// so charts/tables can never overflow their box on short viewports. Screen1Content
// and Screen2Content (used by /screen-1 and /screen-2) are untouched.
export default function FullWallPage() {
  return (
    <div className="h-screen flex flex-col">
      <TopBar activeTab="full-wall" />
      <main className="flex-1 min-h-0 overflow-y-auto">
        <section className="h-[calc(100vh-53px)] p-2">
          <Screen1WallContent />
        </section>
        <div className="border-t-2 border-amber-500/30 flex items-center justify-center py-1 bg-wall-800/60">
          <span className="text-[9px] tracking-widest text-amber-400/80 uppercase">
            Screen 2 ↓ scroll for more
          </span>
        </div>
        <section className="h-[calc(100vh-53px)] p-2">
          <Screen2WallContent />
        </section>
      </main>
    </div>
  );
}
