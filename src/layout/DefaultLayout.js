import { useState } from "react";
import { ChartBarIcon, HomeIcon } from "@heroicons/react/outline";
import MobileSidebar from "./sidebar/MobileSidebar";
import DesktopSidebar from "./sidebar/DesktopSidebar";
import MobileHeader from "./header/MobileHeader";

const navigation = [
  { name: "Dashboard", href: "/", icon: ChartBarIcon },
  { name: "Properties", href: "/properties", icon: HomeIcon },
];

export default function Example({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigation}
        />
        <DesktopSidebar navigation={navigation} />
        <div className="md:pl-64 flex flex-col flex-1">
          <MobileHeader setSidebarOpen={setSidebarOpen} />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}
