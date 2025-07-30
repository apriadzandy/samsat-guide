export interface ServiceStep {
  id: number;
  title: string;
  description: string;
  location: string;
  isCompleted: boolean;
  action?: string;
}

export interface SamsatService {
  id: string;
  title: string;
  description: string;
  icon: string;
  estimatedTime: string;
  requirements: string[];
  steps: ServiceStep[];
}

export const samsatServices: SamsatService[] = [
  {
    id: 'perpanjang-pajak',
    title: 'Perpanjang Pajak Kendaraan',
    description: 'Perpanjangan STNK dan bayar pajak kendaraan bermotor',
    icon: '🚗',
    estimatedTime: '30-45 menit',
    requirements: [
      'STNK asli dan fotocopy',
      'KTP asli dan fotocopy',
      'BPKB (jika STNK habis masa berlaku > 1 tahun)',
      'Kendaraan untuk cek fisik'
    ],
    steps: [
      {
        id: 1,
        title: 'Pendaftaran',
        description: 'Daftar dan ambil nomor antrian di meja pendaftaran',
        location: 'Loket Pendaftaran (Depan)',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 2,
        title: 'Cek Fisik Kendaraan',
        description: 'Lakukan pemeriksaan fisik kendaraan dan kelengkapan dokumen',
        location: 'Loket Cek Fisik (Sebelah Kanan)',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 3,
        title: 'Penyerahan Berkas',
        description: 'Serahkan berkas persyaratan yang sudah lengkap',
        location: 'Loket A (Penyerahan Berkas)',
        isCompleted: false,
        action: 'submit_documents'
      },
      {
        id: 4,
        title: 'Pembayaran',
        description: 'Lakukan pembayaran pajak dan biaya administrasi',
        location: 'Kasir B (Pembayaran)',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 5,
        title: 'Pengambilan STNK',
        description: 'Ambil STNK baru yang sudah diperpanjang',
        location: 'Loket Pengambilan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },
  {
    id: 'balik-nama',
    title: 'Balik Nama Kendaraan',
    description: 'Proses mutasi kepemilikan kendaraan bermotor',
    icon: '📋',
    estimatedTime: '60-90 menit',
    requirements: [
      'BPKB asli',
      'STNK asli',
      'KTP penjual dan pembeli',
      'Surat jual beli bermeterai',
      'Formulir mutasi'
    ],
    steps: [
      {
        id: 1,
        title: 'Pendaftaran',
        description: 'Daftar dan ambil nomor antrian untuk mutasi',
        location: 'Loket Pendaftaran (Depan)',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 2,
        title: 'Verifikasi Dokumen',
        description: 'Verifikasi kelengkapan dan keaslian dokumen',
        location: 'Loket Verifikasi (Tengah)',
        isCompleted: false,
        action: 'verify_documents'
      },
      {
        id: 3,
        title: 'Cek Fisik Kendaraan',
        description: 'Pemeriksaan fisik kendaraan untuk mutasi',
        location: 'Area Cek Fisik (Belakang)',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 4,
        title: 'Input Data',
        description: 'Input data pemilik baru ke sistem',
        location: 'Loket Input Data',
        isCompleted: false,
        action: 'data_input'
      },
      {
        id: 5,
        title: 'Pembayaran',
        description: 'Bayar biaya balik nama dan pajak',
        location: 'Kasir Mutasi',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 6,
        title: 'Pengambilan Dokumen',
        description: 'Ambil BPKB dan STNK atas nama baru',
        location: 'Loket Pengambilan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },
  {
    id: 'ganti-nopol',
    title: 'Ganti Nomor Polisi',
    description: 'Penggantian plat nomor kendaraan bermotor',
    icon: '🔢',
    estimatedTime: '45-60 menit',
    requirements: [
      'STNK asli',
      'BPKB asli',
      'KTP asli dan fotocopy',
      'Plat nomor lama',
      'Kendaraan'
    ],
    steps: [
      {
        id: 1,
        title: 'Pendaftaran',
        description: 'Daftar untuk penggantian nomor polisi',
        location: 'Loket Pendaftaran',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 2,
        title: 'Pilih Nomor',
        description: 'Pilih nomor polisi yang tersedia',
        location: 'Loket Pemilihan Nomor',
        isCompleted: false,
        action: 'choose_number'
      },
      {
        id: 3,
        title: 'Cek Fisik',
        description: 'Pemeriksaan fisik kendaraan',
        location: 'Area Cek Fisik',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 4,
        title: 'Pembayaran',
        description: 'Bayar biaya ganti plat dan administrasi',
        location: 'Kasir',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 5,
        title: 'Pengambilan',
        description: 'Ambil STNK baru dan plat nomor',
        location: 'Loket Pengambilan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },
  {
    id: 'stnk-hilang',
    title: 'STNK Hilang',
    description: 'Penerbitan STNK pengganti karena hilang/rusak',
    icon: '📄',
    estimatedTime: '30-45 menit',
    requirements: [
      'BPKB asli',
      'KTP asli dan fotocopy',
      'Surat kehilangan dari Polsek',
      'Kendaraan untuk cek fisik'
    ],
    steps: [
      {
        id: 1,
        title: 'Pendaftaran',
        description: 'Daftar dengan membawa surat kehilangan',
        location: 'Loket Pendaftaran',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 2,
        title: 'Verifikasi BPKB',
        description: 'Verifikasi keaslian BPKB',
        location: 'Loket Verifikasi',
        isCompleted: false,
        action: 'verify_bpkb'
      },
      {
        id: 3,
        title: 'Cek Fisik',
        description: 'Pemeriksaan fisik kendaraan',
        location: 'Area Cek Fisik',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 4,
        title: 'Pembayaran',
        description: 'Bayar biaya penerbitan STNK baru',
        location: 'Kasir',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 5,
        title: 'Pengambilan STNK',
        description: 'Ambil STNK pengganti',
        location: 'Loket Pengambilan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  }
];