import { Button } from "@/components/ui/button";

export const SURHeader = () => {
  return (
    <header className="relative bg-gradient-cosmic border-b border-gold-primary/20 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
            <span className="text-mystical-dark font-bold text-lg">S</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gold-primary tracking-wider">
              ВСЕЛЕННАЯ СУР
            </h1>
            <p className="text-xs text-gold-primary/70">ИИ-проводник Варвара</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-2">
          <Button variant="ethereal" size="sm">
            Профиль
          </Button>
        </div>
      </div>
    </header>
  );
};