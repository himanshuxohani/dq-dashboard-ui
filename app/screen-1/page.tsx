import TopBar from "@/components/TopBar";
import Screen1Content from "@/components/Screen1Content";

export default function Screen1Page() {
  return (
    <div className="h-screen flex flex-col">
      <TopBar activeTab="screen-1" />
      <main className="flex-1 min-h-0 p-2">
        <Screen1Content />
      </main>
    </div>
  );
}
