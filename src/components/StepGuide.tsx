import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  ArrowRight,
  Home,
  FileText
} from "lucide-react";
import { SamsatService, ServiceStep } from "@/types/samsat";

interface StepGuideProps {
  service: SamsatService;
  onBack: () => void;
}

export const StepGuide = ({ service, onBack }: StepGuideProps) => {
  const [currentSteps, setCurrentSteps] = useState<ServiceStep[]>(service.steps);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  const completedSteps = currentSteps.filter(step => step.isCompleted).length;
  const progress = (completedSteps / currentSteps.length) * 100;
  const currentStep = currentSteps[currentStepIndex];
  const isLastStep = currentStepIndex === currentSteps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const completeCurrentStep = () => {
    const updatedSteps = currentSteps.map(step => 
      step.id === currentStep.id ? { ...step, isCompleted: true } : step
    );
    setCurrentSteps(updatedSteps);
    
    if (!isLastStep) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const goToNextStep = () => {
    if (!isLastStep) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const goToPrevStep = () => {
    if (!isFirstStep) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const isAllCompleted = completedSteps === currentSteps.length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="gradient-primary text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
            <div className="text-center flex-1">
              <div className="text-2xl mb-1">{service.icon}</div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-white/80">
                {service.description}
              </CardDescription>
            </div>
            <div className="w-20"></div>
          </div>
        </CardHeader>
      </Card>

      {/* Progress Overview */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Progress Layanan</h3>
              <Badge variant={isAllCompleted ? "default" : "secondary"}>
                {completedSteps}/{currentSteps.length} Langkah
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Estimasi: {service.estimatedTime}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Steps Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Step Detail */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {currentStep.isCompleted ? (
                <CheckCircle className="w-5 h-5 text-success" />
              ) : (
                <Circle className="w-5 h-5 text-primary" />
              )}
              Langkah {currentStep.id}: {currentStep.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{currentStep.description}</p>
            
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">Lokasi: {currentStep.location}</span>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevStep}
                disabled={isFirstStep}
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Sebelumnya
              </Button>
              
              {!currentStep.isCompleted ? (
                <Button
                  onClick={completeCurrentStep}
                  size="sm"
                  className="gradient-primary"
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Selesai
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextStep}
                  disabled={isLastStep}
                >
                  Selanjutnya
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* All Steps List */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Semua Langkah</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border transition-smooth cursor-pointer ${
                    index === currentStepIndex
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:bg-muted/50'
                  }`}
                  onClick={() => setCurrentStepIndex(index)}
                >
                  <div className="mt-0.5">
                    {step.isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : index === currentStepIndex ? (
                      <Circle className="w-5 h-5 text-primary fill-primary/20" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Requirements Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Persyaratan Lengkap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {service.requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm">{req}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Completion Actions */}
      {isAllCompleted && (
        <Card className="border-success bg-success/5">
          <CardContent className="pt-6 text-center">
            <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Proses Selesai!</h3>
            <p className="text-muted-foreground mb-6">
              Anda telah menyelesaikan semua langkah untuk {service.title}.
              Terima kasih telah menggunakan layanan SAMSAT.
            </p>
            <Button onClick={onBack} className="gradient-primary">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};