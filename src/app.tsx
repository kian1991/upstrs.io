import { BottomNav } from "./components/bottom-nav/bottom-nav";
import { Outlet } from "react-router";

export function App() {
  return (
    <div className="bg-base-200 min-h-screen pb-20">
      <Outlet />
      <BottomNav />
      {/* <Cursor /> */}
    </div>
  );
}
