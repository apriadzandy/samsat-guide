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
    <Card className="h-full hover:shadow-primary transition-smooth cursor-pointer group">
      <CardHeader className="text-center">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-smooth">
          {service.icon}
        </div>
        <CardTitle className="text-lg">{service.title}</CardTitle>
        <CardDescription className="text-sm">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Estimasi: {service.estimatedTime}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <FileText className="w-4 h-4" />
            <span>Persyaratan:</span>
          </div>
          <ul className="text-xs text-muted-foreground space-y-1">
            {service.requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="flex items-start gap-1">
                <span className="text-primary">•</span>
                <span>{req}</span>
              </li>
            ))}
            {service.requirements.length > 3 && (
              <li className="text-primary text-xs">
                +{service.requirements.length - 3} persyaratan lainnya
              </li>
            )}
          </ul>
        </div>
        
        <Button 
          onClick={() => onSelect(service)}
          className="w-full gradient-primary hover:shadow-primary"
          size="sm"
        >
          Pilih Layanan
        </Button>
      </CardContent>
    </Card>
  );
};