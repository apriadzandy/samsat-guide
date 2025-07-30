import { useState } from "react";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { StepGuide } from "@/components/StepGuide";
import { samsatServices, SamsatService } from "@/types/samsat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Users, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  const [selectedService, setSelectedService] = useState<SamsatService | null>(null);

  const handleServiceSelect = (service: SamsatService) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  if (selectedService) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto">
          <StepGuide service={selectedService} onBack={handleBack} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <Header />

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center gradient-card border-0 shadow-card hover:shadow-floating transition-smooth group">
            <CardContent className="pt-6 pb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-bounce">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">1,250</div>
              <div className="text-sm text-muted-foreground font-medium">Pelanggan Hari Ini</div>
            </CardContent>
          </Card>
          <Card className="text-center gradient-card border-0 shadow-card hover:shadow-floating transition-smooth group">
            <CardContent className="pt-6 pb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-success/10 rounded-2xl mb-4 group-hover:scale-110 transition-bounce">
                <TrendingUp className="w-7 h-7 text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Tingkat Kepuasan</div>
            </CardContent>
          </Card>
          <Card className="text-center gradient-card border-0 shadow-card hover:shadow-floating transition-smooth group">
            <CardContent className="pt-6 pb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-warning/10 rounded-2xl mb-4 group-hover:scale-110 transition-bounce">
                <Shield className="w-7 h-7 text-warning" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Info Online</div>
            </CardContent>
          </Card>
          <Card className="text-center gradient-card border-0 shadow-card hover:shadow-floating transition-smooth group">
            <CardContent className="pt-6 pb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-bounce">
                <Info className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">15 Min</div>
              <div className="text-sm text-muted-foreground font-medium">Rata-rata Layanan</div>
            </CardContent>
          </Card>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pilih Layanan SAMSAT</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Klik pada layanan yang Anda butuhkan untuk mendapatkan panduan lengkap dan ikuti langkah demi langkah
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {samsatServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={handleServiceSelect}
              />
            ))}
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="gradient-card border-0 shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                Informasi Penting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                <Badge variant="destructive" className="w-fit font-semibold">🚨 Penting</Badge>
                <p className="text-base leading-relaxed">
                  Pastikan semua dokumen asli dan fotocopy sudah disiapkan sebelum datang ke SAMSAT.
                </p>
              </div>
              <div className="space-y-3 p-4 bg-muted/50 rounded-xl">
                <Badge variant="secondary" className="w-fit font-semibold">💡 Tips</Badge>
                <p className="text-base leading-relaxed">
                  Datang lebih awal untuk menghindari antrian panjang, terutama di akhir bulan.
                </p>
              </div>
              <div className="space-y-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <Badge className="w-fit font-semibold">ℹ️ Info</Badge>
                <p className="text-base leading-relaxed">
                  Pembayaran dapat dilakukan tunai, debit, atau transfer ke rekening resmi.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">🕒 Jam Operasional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid grid-cols-2 gap-6 text-base">
                <div className="p-4 bg-success/5 rounded-xl border border-success/20">
                  <div className="font-bold text-success mb-1">Hari Kerja</div>
                  <div className="text-muted-foreground mb-2">Senin - Jumat</div>
                  <div className="text-primary font-bold text-lg">08:00 - 16:00</div>
                </div>
                <div className="p-4 bg-warning/5 rounded-xl border border-warning/20">
                  <div className="font-bold text-warning mb-1">Sabtu</div>
                  <div className="text-muted-foreground mb-2">Layanan Terbatas</div>
                  <div className="text-primary font-bold text-lg">08:00 - 12:00</div>
                </div>
              </div>
              <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                <div className="font-bold text-destructive mb-1">Minggu & Hari Libur</div>
                <div className="text-muted-foreground font-medium">TUTUP</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Footer */}
        <Card className="mt-12 gradient-card border-0 shadow-card">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-2">
                <span className="text-2xl">🏢</span>
              </div>
              <p className="text-muted-foreground text-lg font-medium">
                © 2024 SAMSAT Digital Service
              </p>
              <p className="text-primary font-semibold">
                Melayani dengan sepenuh hati untuk kemudahan Anda
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;