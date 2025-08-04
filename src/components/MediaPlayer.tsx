import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Heart, Volume2 } from "lucide-react";

interface MediaPlayerProps {
  title: string;
  category: string;
  duration: string;
  backgroundImage?: string;
}

export const MediaPlayer = ({ 
  title, 
  category, 
  duration,
  backgroundImage 
}: MediaPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([0]);
  const [volume, setVolume] = useState([70]);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="relative bg-mystical-medium border-gold-primary/20 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="relative p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-gold-primary/20 text-gold-primary text-xs font-medium rounded-full">
              {category}
            </span>
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <h3 className="text-xl font-semibold text-gold-primary">{title}</h3>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-6">
          <Button
            variant="ethereal"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current text-gold-primary' : ''}`} />
          </Button>
          
          <Button
            variant="golden"
            size="lg"
            className="w-16 h-16 rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </Button>
          
          <Button variant="ethereal" size="icon">
            <Volume2 className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>00:01</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-3">
          <Volume2 className="w-4 h-4 text-gold-primary" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>
      </div>
    </Card>
  );
};