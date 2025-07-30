import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone } from "lucide-react";

export const Header = () => {
  return (
    <Card className="gradient-primary text-white shadow-primary">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-4xl">🏢</div>
            <div>
              <h1 className="text-3xl font-bold">SAMSAT</h1>
              <p className="text-white/80 text-sm">Sistem Administrasi Manunggal Satu Atap</p>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Layanan Terpadu Kendaraan Bermotor</h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Pilih layanan yang Anda butuhkan dan ikuti panduan langkah demi langkah 
              untuk menyelesaikan urusan kendaraan bermotor Anda dengan mudah dan cepat.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Senin - Jumat: 08:00 - 16:00</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Jl. Ahmad Yani No. 123</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>(021) 123-4567</span>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Pelayanan Cepat
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Digital Service
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Satu Atap
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};