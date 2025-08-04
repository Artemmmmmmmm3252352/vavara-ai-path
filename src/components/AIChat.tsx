import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

interface AIChatProps {
  characterName?: string;
  placeholder?: string;
}

export const AIChat = ({ 
  characterName = "Варвара", 
  placeholder = "Задайте вопрос Варваре..." 
}: AIChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: `Приветствую! Я ${characterName}, ваш ИИ-проводник по Вселенной СУР. Я здесь, чтобы помочь вам в путешествии самопознания и духовного развития. О чём бы вы хотели поговорить?`,
      isAI: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Благодарю за вопрос! Для полноценного ответа мне потребуется подключение к OpenAI API. Пока что я могу лишь выразить своё понимание важности этой темы для вашего духовного пути.",
        isAI: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Card className="bg-mystical-medium border-gold-primary/20 h-96 flex flex-col">
      <div className="p-4 border-b border-gold-primary/20">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-gold-primary" />
          <h3 className="font-semibold text-gold-primary">Чат с {characterName}</h3>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isAI
                    ? 'bg-mystical-light text-foreground'
                    : 'bg-gradient-gold text-mystical-dark'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-gold-primary/20">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="bg-mystical-light border-gold-primary/30 text-foreground placeholder:text-muted-foreground"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button 
            variant="golden" 
            size="icon"
            onClick={handleSendMessage}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};