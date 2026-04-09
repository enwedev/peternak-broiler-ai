"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList, BarChart3, Settings } from "lucide-react";

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Beranda", icon: Home, href: "/" },
    { label: "Laporan", icon: ClipboardList, href: "/laporan" },
    { label: "Statistik", icon: BarChart3, href: "/statistik" },
    { label: "Pengaturan", icon: Settings, href: "/pengaturan" },
  ];

  return (
    <div className="dock dock-sm md:dock-md bg-base-100 border-t border-base-200 safe-area-bottom">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "dock-active" : ""}
          >
            <item.icon size={20} />
            <span className="dock-label">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
