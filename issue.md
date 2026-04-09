# Fitur Baru: Tampilan Beranda & Navigasi (Dashboard Peternak Broiler AI)

## Ringkasan Tujuan
Mengimplementasikan halaman utama (Beranda) untuk aplikasi yang akan menampilkan metrik-metrik penting peternakan, serta menambahkan navigasi utama di bagian bawah layar menggunakan komponen Dock dari DaisyUI.

## Ruang Lingkup Pekerjaan / Perencanaan High-Level

### 1. Setup UI Library
- **Install DaisyUI**: Integrasikan DaisyUI ke dalam proyek Next.js/Tailwind CSS yang sudah ada (tambahkan di `tailwind.config.ts`).
- Pastikan konfigurasi theme DaisyUI sudah sesuai dengan desain yang diinginkan (bisa gunakan theme default/corporate/light).

### 2. Implementasi Komponen Navigasi Bawah (Dock)
- Buat sebuah komponen navigasi global (`BottomNav` atau `DockNavigation`).
- Gunakan komponen **Dock** dari DaisyUI (`dock`).
- Tambahkan icon atau menu dasar untuk sementara (misal: Beranda, Input Data, Pengaturan).
- Letakkan komponen ini di level layout utama (`src/app/layout.tsx`) agar selalu tampil di semua halaman.

### 3. Pembuatan Halaman Beranda (Dashboard)
- Modifikasi halaman utama (`src/app/page.tsx`).
- **PENTING: Gunakan pendekatan Mobile-First**. Buat tampilan layout dashboard yang rapi dan optimal untuk layar HP (menggunakan Card atau Grid/Flexbox), kemudian sesuaikan untuk layar yang lebih besar jika diperlukan.
- Rancang komponen visual (misalnya menggunakan komponen `stat` dari DaisyUI) untuk menampilkan *mock data* (data sementara) dari metrik berikut:
  - **Total Ayam Terpanen**
  - **Total Berat Terpanen** (kg/ton)
  - **Total Pakan Dikonsumsi** (sak/kg)
  - **Ayam Mati** (jumlah ekor/mortalitas)
  - **Umur Ayam** (hari)

## Asumsi Tambahan
- Data yang ditampilkan saat ini sifatnya adalah data statis (*hard-coded* / dummy) untuk keperluan visual dan layouting.
- Responsivitas harus diutamakan (Mobile First), mengingat aplikasi ini ditujukan sebagai PWA untuk diakses dari handphone.

## Kriteria Selesai (Definition of Done)
- Modul DaisyUI sudah terinstal dan berjalan tanpa memutus styling Next.js yang lama.
- Halaman utama (`/`) sudah menampilkan kelima data metrik sesuai poin-poin di atas dengan tampilan visual UI yang baik.
- Terdapat *dock navigasi* yang melayang/tetap berada di bawah layar *viewport* yang berisikan tombol navigasi utama.
