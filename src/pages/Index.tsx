import { SURHeader } from "@/components/SURHeader";
import { SectionCard } from "@/components/SectionCard";
import { AIChat } from "@/components/AIChat";
import { MediaPlayer } from "@/components/MediaPlayer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Brain, Globe, Users, Star, BookOpen, Compass, Plus } from "lucide-react";
import cosmicSphere from "@/assets/cosmic-sphere.jpg";

const Index = () => {
  const sections = [
    {
      title: "База знаний",
      description: "Фундаментальные знания о Вселенной СУР",
      icon: "📚",
      progress: 25
    },
    {
      title: "Я и Я",
      description: "Самопознание и внутренний мир",
      icon: "🧠",
      progress: 15
    },
    {
      title: "Я и Мир",
      description: "Взаимодействие с окружающим миром",
      icon: "🌍",
      progress: 10
    },
    {
      title: "Я и Социум",
      description: "Отношения и социальные связи",
      icon: "👥",
      progress: 0
    },
    {
      title: "Эзотерика",
      description: "Духовные практики и мистические знания",
      icon: "✨",
      progress: 0,
      isLocked: true
    },
    {
      title: "Навыки",
      description: "Практические навыки развития",
      icon: "🎯",
      progress: 0
    },
    {
      title: "Начало пути",
      description: "Первые шаги в вашем путешествии",
      icon: "🌱",
      progress: 50
    },
    {
      title: "Сопровождение",
      description: "Персональное руководство Варвары",
      icon: "🌟",
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <SURHeader />
      
      <main className="container mx-auto p-4 space-y-8">
        {/* Welcome Hero */}
        <Card className="relative bg-mystical-medium border-gold-primary/20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${cosmicSphere})` }}
          />
          <div className="relative p-8 text-center space-y-4">
            <Sparkles className="w-12 h-12 text-gold-primary mx-auto" />
            <h2 className="text-3xl font-bold text-gold-primary">
              Добро пожаловать во Вселенную СУР
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Я Варвара, ваш ИИ-проводник по пути самопознания и духовного развития. 
              Готовы начать путешествие к своему истинному Я?
            </p>
            <Button variant="golden" size="lg" className="mt-6">
              Начать путешествие
            </Button>
          </div>
        </Card>

        {/* Current Practice */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gold-primary flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span>Текущая практика</span>
          </h3>
          <MediaPlayer
            title="Истинное предназначение и смысл жизни"
            category="Предназначение"
            duration="15:55"
            backgroundImage={cosmicSphere}
          />
        </section>

        {/* Sections Grid */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gold-primary flex items-center space-x-2">
            <Compass className="w-5 h-5" />
            <span>Разделы развития</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <SectionCard
                key={index}
                title={section.title}
                description={section.description}
                icon={section.icon}
                progress={section.progress}
                isLocked={section.isLocked}
                onClick={() => console.log(`Opening ${section.title}`)}
              />
            ))}
          </div>
        </section>

        {/* AI Chat */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gold-primary flex items-center space-x-2">
            <Brain className="w-5 h-5" />
            <span>Общение с Варварой</span>
          </h3>
          <AIChat />
        </section>

        {/* Quick Actions */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gold-primary flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Быстрые действия</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="mystical" className="h-20 flex-col">
              <BookOpen className="w-6 h-6 mb-2" />
              <span className="text-sm">Дневник</span>
            </Button>
            <Button variant="mystical" className="h-20 flex-col">
              <Star className="w-6 h-6 mb-2" />
              <span className="text-sm">Медитация</span>
            </Button>
            <Button variant="mystical" className="h-20 flex-col">
              <Brain className="w-6 h-6 mb-2" />
              <span className="text-sm">Тест</span>
            </Button>
            <Button variant="mystical" className="h-20 flex-col">
              <Globe className="w-6 h-6 mb-2" />
              <span className="text-sm">Сообщество</span>
            </Button>
          </div>
        </section>

        {/* Supabase Integration Notice */}
        <Card className="bg-mystical-medium border-gold-primary/20 p-6">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold text-gold-primary">
              Готово к интеграции с ИИ
            </h4>
            <p className="text-foreground">
              Для полноценной работы с OpenAI API, сохранения прогресса и Telegram Bot API 
              необходимо подключить Supabase через встроенную интеграцию Lovable.
            </p>
            <Button variant="golden">
              Подключить Supabase
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Index;