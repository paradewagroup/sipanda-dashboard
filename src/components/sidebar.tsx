"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  Building2,
  Landmark,
  Wallet,
  ArrowLeftRight,
  Map,
  FileBarChart,
  Settings,
  Users,
  ShieldCheck,
  Database,
  ChevronDown,
  FileText,
  CreditCard,
  ChartNoAxesCombined,
  Receipt,
  MapPinned,
  ClipboardList,
  Activity,
  Command,
  Sparkles,
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

interface SubMenuItem {
  title: string
  href: string
  icon?: LucideIcon
}

interface MenuItem {
  title: string
  href?: string
  icon: LucideIcon
  children?: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "PBB-P2",
    icon: Building2,
    children: [
      { title: "Data SPPT", href: "/pbb-p2/sppt", icon: FileText },
      { title: "Pembayaran", href: "/pbb-p2/pembayaran", icon: CreditCard },
      { title: "Piutang PBB-P2", href: "/pbb-p2/piutang", icon: Wallet },
      { title: "Analisis Piutang", href: "/pbb-p2/analisis-piutang", icon: ChartNoAxesCombined },
      { title: "Monitoring", href: "/pbb-p2/monitoring", icon: ClipboardList },
    ],
  },
  {
    title: "BPHTB",
    icon: Landmark,
    children: [
      { title: "Data Transaksi", href: "/bphtb/transaksi", icon: Receipt },
      { title: "Data Berkas", href: "/bphtb/berkas", icon: FileText },
      { title: "Validasi BPHTB", href: "/bphtb/validasi", icon: ShieldCheck },
      { title: "Monitoring BPHTB", href: "/bphtb/monitoring", icon: Activity },
    ],
  },
  {
    title: "Pendapatan",
    icon: Wallet,
    children: [
      { title: "Realisasi Pendapatan", href: "/pendapatan/realisasi" },
      { title: "Target Pendapatan", href: "/pendapatan/target" },
      { title: "Rekapitulasi", href: "/pendapatan/rekapitulasi" },
    ],
  },
  {
    title: "Rekonsiliasi",
    icon: ArrowLeftRight,
    children: [
      { title: "Rekonsiliasi PBB-P2", href: "/rekonsiliasi/pbb-p2" },
      { title: "Rekonsiliasi BPHTB", href: "/rekonsiliasi/bphtb" },
      { title: "Riwayat Rekonsiliasi", href: "/rekonsiliasi/riwayat" },
    ],
  },
  {
    title: "GIS & Pemetaan",
    icon: Map,
    children: [
      { title: "Peta Kabupaten", href: "/gis/kabupaten", icon: MapPinned },
      { title: "Peta Kecamatan", href: "/gis/kecamatan", icon: MapPinned },
      { title: "Peta Desa", href: "/gis/desa", icon: MapPinned },
    ],
  },
  {
    title: "Laporan",
    icon: FileBarChart,
    children: [
      { title: "Laporan PBB-P2", href: "/laporan/pbb-p2" },
      { title: "Laporan BPHTB", href: "/laporan/bphtb" },
      { title: "Laporan Pendapatan", href: "/laporan/pendapatan" },
    ],
  },
  {
    title: "Pengaturan",
    icon: Settings,
    children: [
      { title: "Pengguna", href: "/pengaturan/pengguna", icon: Users },
      { title: "Hak Akses", href: "/pengaturan/hak-akses", icon: ShieldCheck },
      { title: "Konfigurasi", href: "/pengaturan/konfigurasi", icon: Database },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<string[]>([])

  function toggleMenu(title: string) {
    setOpenMenus((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    )
  }

  return (
    <aside className="relative z-30 flex h-screen w-[272px] shrink-0 flex-col overflow-hidden border-r border-white/[0.07] bg-[#111315] text-white shadow-[12px_0_40px_rgba(0,0,0,0.25)]">

      {/* GLOSS BACKGROUND */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-500/[0.09] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-amber-500/[0.06] blur-[100px]" />

      {/* BRAND HEADER */}
      <div className="relative flex h-[76px] shrink-0 items-center gap-3 border-b border-white/[0.07] px-5">

        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/30 bg-gradient-to-br from-orange-400/25 to-orange-600/10 shadow-[0_0_25px_rgba(242,140,56,0.15)]">
          <Command size={21} strokeWidth={1.8} className="text-orange-400" />
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="text-[17px] font-bold tracking-[0.13em]">
            SIPANDA
          </h1>
          <p className="mt-0.5 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.16em] text-white/40">
            Intelligence Command Center
          </p>
        </div>

        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
      </div>

      {/* NAVIGATION LABEL */}
      <div className="relative shrink-0 px-5 pb-3 pt-6">
        <div className="flex items-center gap-2">
          <Sparkles size={12} className="text-orange-400" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
            Command Navigation
          </span>
        </div>
      </div>

      {/* NAVIGATION MENU */}
      <nav className="custom-scrollbar relative min-h-0 flex-1 space-y-1 overflow-y-auto px-3 pb-5">

        {menuItems.map((item) => {
          const Icon = item.icon

          const isActive = item.href
            ? pathname === item.href
            : item.children?.some(
                (child) =>
                  pathname === child.href ||
                  pathname.startsWith(child.href + "/")
              ) ?? false

          const isOpen = openMenus.includes(item.title) || isActive

          if (!item.children) {
            return (
              <Link
                key={item.title}
                href={item.href!}
                className={`group relative flex items-center gap-3 rounded-xl border px-3.5 py-[11px] text-[12px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-orange-300/20 bg-gradient-to-r from-[#ed8133] to-[#d96520] text-white shadow-[0_4px_20px_rgba(232,117,36,0.24)]"
                    : "border-transparent text-white/55 hover:border-white/[0.06] hover:bg-white/[0.045] hover:text-white"
                }`}
              >
                <Icon size={17} strokeWidth={1.8} />

                <span>{item.title}</span>

                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                )}
              </Link>
            )
          }

          return (
            <div key={item.title} className="space-y-1">

              {/* PARENT MENU */}
              <button
                type="button"
                onClick={() => toggleMenu(item.title)}
                aria-expanded={isOpen}
                className={`group flex w-full items-center justify-between rounded-xl border px-3.5 py-[11px] text-left text-[12px] font-medium transition-all duration-300 ${
                  isActive
                    ? "border-orange-400/15 bg-orange-400/[0.08] text-orange-300"
                    : "border-transparent text-white/55 hover:border-white/[0.06] hover:bg-white/[0.045] hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} strokeWidth={1.8} />
                  {item.title}
                </span>

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-orange-400"
                      : "text-white/30"
                  }`}
                />
              </button>

              {/* SUBMENU */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-[22px] space-y-1 border-l border-white/[0.09] py-1 pl-4">

                    {item.children.map((child) => {
                      const ChildIcon = child.icon

                      const active =
                        pathname === child.href ||
                        pathname.startsWith(child.href + "/")

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[10px] transition-all duration-200 ${
                            active
                              ? "bg-orange-500/[0.13] font-semibold text-orange-300"
                              : "text-white/40 hover:bg-white/[0.04] hover:text-white/85"
                          }`}
                        >
                          {ChildIcon ? (
                            <ChildIcon size={13} strokeWidth={1.7} />
                          ) : (
                            <span className="h-1 w-1 rounded-full bg-current" />
                          )}

                          <span>{child.title}</span>

                          {active && (
                            <span className="ml-auto h-1 w-1 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(242,140,56,0.9)]" />
                          )}
                        </Link>
                      )
                    })}

                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </nav>

      {/* AI INTELLIGENCE CARD */}
      <div className="relative mx-3 mb-3 shrink-0 overflow-hidden rounded-xl border border-orange-400/15 bg-gradient-to-br from-[#29221d] via-[#1e1d1b] to-[#17191c] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">

        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/[0.12] blur-2xl" />

        <div className="relative flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-orange-400" />
            <span className="text-[10px] font-semibold text-white/85">
              SIPANDA Intelligence
            </span>
          </div>

          <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[8px] font-semibold text-amber-300">
            DEVELOPMENT
          </span>
        </div>

        <p className="relative mt-2 text-[9px] leading-relaxed text-white/40">
          Intelligent data monitoring and analysis system.
        </p>
      </div>

      {/* SYSTEM FOOTER */}
      <div className="relative shrink-0 border-t border-white/[0.07] px-5 py-4">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#343434] to-[#1c1e20]">
            <Settings size={16} className="text-white/65" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold tracking-wide text-white/80">
              SIPANDA SYSTEM
            </p>

            <p className="mt-0.5 text-[9px] text-white/35">
              Version 1.0.0
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] text-white/40">
              Online
            </span>
          </div>
        </div>
      </div>

    </aside>
  )
}