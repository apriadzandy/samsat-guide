import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone } from "lucide-react";

export const Header = () => {
  return (
    <Card className="gradient-hero text-white shadow-floating border-0 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white/30 rounded-full"></div>
      
      <CardContent className="pt-8 pb-8 relative z-10">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl backdrop-blur-sm border border-white/30">
              <span className="text-4xl">🏢</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">SAMSAT</h1>
              <p className="text-white/90 text-lg font-medium">Sistem Administrasi Manunggal Satu Atap</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Layanan Terpadu Kendaraan Bermotor</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Pilih layanan yang Anda butuhkan dan ikuti panduan langkah demi langkah 
              untuk menyelesaikan urusan kendaraan bermotor Anda dengan mudah, cepat, dan profesional.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-base">
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-white" />
              <span className="font-medium text-foreground">Senin - Jumat: 08:00 - 16:00</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white" />
              <span className="font-medium text-foreground">Jl. Ahmad Yani No. 123</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <Phone className="w-5 h-5 text-white" />
              <span className="font-medium text-foreground">(021) 123-4567</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            <Badge variant="secondary" className="bg-white/25 text-white border-white/40 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              ⚡ Pelayanan Cepat
            </Badge>
            <Badge variant="secondary" className="bg-white/25 text-white border-white/40 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              💻 Digital Service
            </Badge>
            <Badge variant="secondary" className="bg-white/25 text-white border-white/40 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              🏢 Satu Atap
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};