import TopBar from "@/components/TopBar";
import Screen2Content from "@/components/Screen2Content";

export default function Screen2Page() {
  return (
    <div className="h-screen flex flex-col">
      <TopBar activeTab="screen-2" />
      <main className="flex-1 min-h-0 p-2">
        <Screen2Content />
      </main>
    </div>
  );
}
