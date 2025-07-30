import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText } from "lucide-react";
import { SamsatService } from "@/types/samsat";

interface ServiceCardProps {
  service: SamsatService;
  onSelect: (service: SamsatService) => void;
}

export const ServiceCard = ({ service, onSelect }: ServiceCardProps) => {
  return (
    <Card className="h-full hover-lift cursor-pointer group gradient-card border-0 shadow-card hover:shadow-floating transition-smooth">
      <CardHeader className="text-center pb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-bounce">
          <span className="text-3xl">{service.icon}</span>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">{service.title}</CardTitle>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pt-0">
        <div className="flex items-center gap-3 text-base bg-muted/50 p-3 rounded-xl">
          <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <div>
            <span className="font-semibold text-foreground">Estimasi:</span>
            <span className="text-muted-foreground ml-2">{service.estimatedTime}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-base font-semibold text-foreground">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <span>Persyaratan:</span>
          </div>
          <div className="bg-muted/30 p-4 rounded-xl">
            <ul className="text-sm text-muted-foreground space-y-2">
              {service.requirements.slice(0, 3).map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-5 h-5 bg-primary/20 rounded-full mt-0.5 flex-shrink-0">
                    <span className="text-primary text-xs font-bold">•</span>
                  </div>
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
              {service.requirements.length > 3 && (
                <li className="flex items-center gap-3 text-primary font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-primary/20 rounded-full flex-shrink-0">
                    <span className="text-xs font-bold">+</span>
                  </div>
                  <span>{service.requirements.length - 3} persyaratan lainnya</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <Button 
          onClick={() => onSelect(service)}
          className="w-full gradient-primary hover:shadow-glow text-base font-semibold py-6 rounded-xl transition-smooth"
          size="lg"
        >
          Pilih Layanan
        </Button>
      </CardContent>
    </Card>
  );
};