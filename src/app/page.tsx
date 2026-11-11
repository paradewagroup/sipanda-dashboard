import Link from "next/link"

import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Clock3,
  Database,
  FileText,
  Landmark,
  MapPinned,
  Network,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react"

const stats = [
  {
    title: "Total Ketetapan PBB-P2",
    value: "Belum tersedia",
    description: "Menunggu integrasi data SPPT",
    icon: Building2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Realisasi PBB-P2",
    value: "Belum tersedia",
    description: "Menunggu data pembayaran",
    icon: Wallet,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Realisasi BPHTB",
    value: "Belum tersedia",
    description: "Menunggu data transaksi",
    icon: Landmark,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    title: "Total Piutang",
    value: "Belum tersedia",
    description: "Menunggu analisis piutang",
    icon: FileText,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
]

const integrations = [
  { name: "Frontend Dashboard", status: "Aktif", active: true },
  { name: "Database", status: "Belum terhubung", active: false },
  { name: "Data PBB-P2", status: "Menunggu integrasi", active: false },
  { name: "Data BPHTB", status: "Menunggu integrasi", active: false },
  { name: "GIS & Pemetaan", status: "Menunggu integrasi", active: false },
]

const modules = [
  {
    title: "PBB-P2",
    description: "Data SPPT, pembayaran, piutang, dan analisis perpajakan.",
    href: "/pbb-p2",
    icon: Building2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "BPHTB",
    description: "Monitoring transaksi, berkas, dan validasi BPHTB.",
    href: "/bphtb",
    icon: Landmark,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    title: "Pendapatan",
    description: "Pemantauan target dan realisasi pendapatan daerah.",
    href: "/pendapatan",
    icon: TrendingUp,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Rekonsiliasi",
    description: "Pencocokan dan monitoring data penerimaan.",
    href: "/rekonsiliasi",
    icon: Network,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "GIS & Pemetaan",
    description: "Visualisasi data perpajakan berdasarkan wilayah.",
    href: "/gis",
    icon: MapPinned,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Laporan",
    description: "Pusat penyajian laporan pendapatan daerah.",
    href: "/laporan",
    icon: ChartNoAxesCombined,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-[1700px] space-y-8">

      {/* PAGE HEADER */}
      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Activity size={16} />
            Intelligence Command Center
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Overview Dashboard
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Pusat monitoring, analisis, dan pengelolaan pendapatan daerah.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
          <CalendarDays size={20} className="text-primary" />

          <div>
            <p className="text-xs text-muted-foreground">
              Periode Pelaporan
            </p>
            <p className="text-sm font-bold">
              Tahun Anggaran 2026
            </p>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="premium-gradient relative overflow-hidden rounded-2xl p-7 text-white shadow-lg md:p-10">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            SIPANDA Command Center
          </div>

          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            Sistem Informasi Pendapatan Daerah
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">
            Satu pusat kendali untuk memantau, menganalisis, dan mengelola
            informasi pendapatan daerah melalui integrasi data perpajakan
            dan informasi geografis.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/pbb-p2"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              Buka PBB-P2
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/pendapatan"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Monitoring Pendapatan
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-5 -top-14 h-72 w-72 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-28 right-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-5 right-10 hidden opacity-10 lg:block">
          <Landmark size={210} strokeWidth={0.8} />
        </div>
      </section>

      {/* EXECUTIVE KPI */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold tracking-tight">
              Executive Revenue Overview
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Indikator utama penerimaan dan piutang daerah.
            </p>
          </div>

          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-600">
            Data belum terintegrasi
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.title}
                className="premium-card group p-5"
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-xl p-3 ${stat.bg}`}>
                    <Icon size={22} className={stat.color} />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Belum tersedia
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ANALYTICS AND SYSTEM MONITORING */}
      <section className="grid gap-6 xl:grid-cols-3">

        {/* REVENUE ANALYTICS */}
        <div className="premium-card p-6 xl:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold">
                Analisis Realisasi Pendapatan
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Monitoring perkembangan penerimaan daerah.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-xs font-medium">
              <CalendarDays size={14} />
              Tahun 2026
            </div>
          </div>

          <div className="mt-6 flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 p-8 text-center">
            <div className="rounded-2xl bg-primary/10 p-4">
              <ChartNoAxesCombined size={32} className="text-primary" />
            </div>

            <h3 className="mt-4 font-semibold">
              Data Analisis Belum Tersedia
            </h3>

            <p className="mt-2 max-w-md text-xs leading-6 text-muted-foreground">
              Grafik realisasi, tren penerimaan, dan perbandingan target
              akan ditampilkan setelah data pendapatan terintegrasi.
            </p>
          </div>
        </div>

        {/* SYSTEM MONITORING */}
        <div className="premium-card p-6">
          <div className="flex items-center gap-2">
            <Activity size={19} className="text-primary" />
            <h2 className="text-lg font-bold">
              System Monitoring
            </h2>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            Kesiapan komponen dan integrasi SIPANDA.
          </p>

          <div className="mt-6 space-y-5">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      item.active
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                  />
                  <span className="text-xs font-medium">
                    {item.name}
                  </span>
                </div>

                <span
                  className={`whitespace-nowrap text-[10px] font-semibold ${
                    item.active
                      ? "text-emerald-600"
                      : "text-amber-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-xl bg-muted/60 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <ShieldCheck size={16} className="text-primary" />
              Development Status
            </div>

            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Fondasi aplikasi sedang dikembangkan. Integrasi database
              dan sumber data belum diaktifkan.
            </p>
          </div>
        </div>
      </section>

      {/* INTELLIGENCE MONITORING */}
      <section className="grid gap-6 xl:grid-cols-2">

        {/* GIS PANEL */}
        <div className="premium-card overflow-hidden">
          <div className="flex items-center justify-between p-6">
            <div>
              <div className="flex items-center gap-2">
                <MapPinned size={19} className="text-primary" />
                <h2 className="text-lg font-bold">
                  Geographic Intelligence
                </h2>
              </div>

              <p className="mt-1 text-xs text-muted-foreground">
                Monitoring informasi perpajakan berdasarkan wilayah.
              </p>
            </div>

            <Link
              href="/gis"
              className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-primary"
              aria-label="Buka GIS"
            >
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="mx-6 mb-6 flex min-h-[230px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center">
            <MapPinned size={38} className="text-primary/70" />

            <h3 className="mt-4 text-sm font-semibold">
              Peta Wilayah Belum Terhubung
            </h3>

            <p className="mt-2 max-w-sm text-xs leading-5 text-muted-foreground">
              Visualisasi peta Kabupaten, Kecamatan, dan Desa akan
              tersedia setelah data geospasial diintegrasikan.
            </p>

            <Link
              href="/gis"
              className="mt-4 text-xs font-semibold text-primary hover:underline"
            >
              Buka GIS & Pemetaan
            </Link>
          </div>
        </div>

        {/* DATA INTEGRATION PANEL */}
        <div className="premium-card p-6">
          <div className="flex items-center gap-2">
            <Database size={19} className="text-primary" />
            <h2 className="text-lg font-bold">
              Data Intelligence
            </h2>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            Gambaran kesiapan sumber data utama SIPANDA.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                name: "Data SPPT",
                description: "Data ketetapan PBB-P2",
                icon: Building2,
              },
              {
                name: "Data Pembayaran",
                description: "Penerimaan dan pelunasan PBB-P2",
                icon: Wallet,
              },
              {
                name: "Data BPHTB",
                description: "Transaksi dan berkas BPHTB",
                icon: Landmark,
              },
              {
                name: "Data Geospasial",
                description: "Referensi wilayah dan pemetaan",
                icon: MapPinned,
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-xl border border-border p-4"
                >
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <Icon size={19} className="text-primary" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[9px] font-semibold text-amber-600">
                    Pending
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MODULE ACCESS */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold tracking-tight">
            System Modules
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Akses cepat ke seluruh modul utama SIPANDA.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon

            return (
              <Link
                key={module.title}
                href={module.href}
                className="premium-card group flex flex-col p-5 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-xl p-3 ${module.bg}`}>
                    <Icon size={22} className={module.color} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>

                <h3 className="mt-5 font-bold tracking-tight">
                  {module.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground">
                  {module.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary">
                  Buka Modul
                  <ArrowRight size={14} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col justify-between gap-2 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row">
        <p>
          SIPANDA — Sistem Informasi Pendapatan Daerah
        </p>

        <div className="flex items-center gap-2">
          <Clock3 size={13} />
          <span>Dashboard Version 1.0.0</span>
        </div>
      </footer>

    </div>
  )
}