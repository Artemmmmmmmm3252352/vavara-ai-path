import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Lock } from "lucide-react";

interface SectionCardProps {
  title: string;
  description: string;
  icon: string;
  isLocked?: boolean;
  progress?: number;
  onClick?: () => void;
}

export const SectionCard = ({ 
  title, 
  description, 
  icon, 
  isLocked = false, 
  progress = 0,
  onClick 
}: SectionCardProps) => {
  return (
    <Card 
      className="relative bg-mystical-medium border-gold-primary/20 hover:border-gold-primary/40 transition-mystical cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      {/* Progress Bar */}
      {progress > 0 && (
        <div className="absolute top-0 left-0 h-1 bg-gradient-gold transition-all duration-300" 
             style={{ width: `${progress}%` }} />
      )}
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gold-primary mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {isLocked && <Lock className="w-4 h-4 text-muted-foreground" />}
            <ChevronRight className="w-5 h-5 text-gold-primary/60 group-hover:text-gold-primary transition-colors" />
          </div>
        </div>
        
        {progress > 0 && (
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">Прогресс</span>
            <span className="text-gold-primary font-medium">{progress}%</span>
          </div>
        )}
      </div>
    </Card>
  );
};