import React from "react";
import { 
  Trophy, 
  Weight, 
  Donut, 
  Skull, 
  Calendar,
  ArrowUpRight,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header Section */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-base-content">Dashboard Utama</h1>
          <p className="text-sm text-base-content/60">Ringkasan performa kandang saat ini</p>
        </div>
        <div className="btn btn-circle btn-ghost">
          <AlertCircle className="text-info" />
        </div>
      </header>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Ayam Terpanen */}
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-4">
            <div className="flex items-start justify-between">
              <div className="p-2 bg-success/10 rounded-lg">
                <Trophy className="text-success" size={24} />
              </div>
              <div className="badge badge-success badge-sm gap-1">
                <ArrowUpRight size={12} /> 12%
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-medium text-base-content/50 uppercase tracking-wider">Ayam Terpanen</p>
              <h2 className="text-3xl font-bold mt-1">15.000 <span className="text-lg font-normal">ekor</span></h2>
            </div>
          </div>
        </div>

        {/* Berat Terpanen */}
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-4">
            <div className="flex items-start justify-between">
              <div className="p-2 bg-info/10 rounded-lg">
                <Weight className="text-info" size={24} />
              </div>
              <div className="badge badge-info badge-sm gap-1">
                <TrendingUp size={12} /> 2.1kg avg
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-medium text-base-content/50 uppercase tracking-wider">Berat Terpanen</p>
              <h2 className="text-3xl font-bold mt-1">32.5 <span className="text-lg font-normal">ton</span></h2>
            </div>
          </div>
        </div>

        {/* Total Pakan */}
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-4">
            <div className="flex items-start justify-between">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Donut className="text-warning" size={24} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-medium text-base-content/50 uppercase tracking-wider">Pakan Dikonsumsi</p>
              <h2 className="text-3xl font-bold mt-1">1.200 <span className="text-lg font-normal">sak</span></h2>
            </div>
            <div className="mt-2 text-xs text-base-content/40">Sisa stok: 45 sak</div>
          </div>
        </div>

        {/* Ayam Mati */}
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-4">
            <div className="flex items-start justify-between">
              <div className="p-2 bg-error/10 rounded-lg">
                <Skull className="text-error" size={24} />
              </div>
              <div className="text-error text-xs font-semibold">3.0% Mortalitas</div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-medium text-base-content/50 uppercase tracking-wider">Ayam Mati</p>
              <h2 className="text-3xl font-bold mt-1">450 <span className="text-lg font-normal">ekor</span></h2>
            </div>
          </div>
        </div>

        {/* Umur Ayam */}
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body p-4">
            <div className="flex items-start justify-between">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="text-primary" size={24} />
              </div>
              <div className="badge badge-outline badge-sm">H-3 Panen</div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-medium text-base-content/50 uppercase tracking-wider">Umur Ayam</p>
              <h2 className="text-3xl font-bold mt-1">32 <span className="text-lg font-normal">hari</span></h2>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Action / Tips */}
      <div className="alert shadow-sm bg-base-100 border border-base-200">
        <TrendingUp className="text-success" />
        <div>
          <h3 className="font-bold">Performa Meningkat!</h3>
          <div className="text-xs">Bobot rata-rata ayam Anda 5% lebih tinggi dari siklus sebelumnya di hari yang sama.</div>
        </div>
      </div>
    </div>
  );
}
