import { BottomNav } from "./components/bottom-nav/bottom-nav";
import { Outlet } from "react-router";

export function App() {
  return (
    <div className="from-base-200 min-h-screen bg-gradient-to-br to-slate-200 pb-20">
      <Outlet />
      <BottomNav />
      {/* <Cursor /> */}
    </div>
  );
}
