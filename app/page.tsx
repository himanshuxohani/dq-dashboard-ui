import { redirect } from "next/navigation";

// No separate launcher screen — the wall opens straight into the combined view.
export default function Home() {
  redirect("/full-wall");
}
