import BottomNavigation from "@/components/organisms/BottomNavigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
