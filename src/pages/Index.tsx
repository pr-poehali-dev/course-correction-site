import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };
  const menuItems = [
    "О НАС",
    "СТРУКТУРА ХМАО ВОИ",
    "КОНВЕНЦИЯ ООН О ПРАВАХ ИНВАЛИДОВ",
    "ВЕЛИКИЕ ИНВАЛИДЫ ПЛАНЕТЫ",
    "ПРОЕКТЫ",
    "НОВОСТИ",
    "МЕРОПРИЯТИЯ",
    "ФОТОГАЛЕРЕЯ",
    "ДОКУМЕНТЫ",
  ];

  const newsItems = [
    {
      image: "https://cdn.poehali.dev/projects/4525f3ee-5dd9-42f8-9d97-92f0e20f200a/files/63616d52-e379-4956-9dad-4aed26ee3805.jpg",
      title: "Хотите чувствовать себя лучше, выглядеть моложе и забыть о депрессии?",
      time: "22 часа назад",
    },
    {
      image: "https://cdn.poehali.dev/projects/4525f3ee-5dd9-42f8-9d97-92f0e20f200a/files/be46cb50-d5d8-40f8-a8b8-c6bd10e5bfe5.jpg",
      title: "В Югре ужесточились правила оказания медпомощи иностранцам",
      time: "22 часа назад",
    },
    {
      image: "https://cdn.poehali.dev/projects/4525f3ee-5dd9-42f8-9d97-92f0e20f200a/files/80087ea1-38b0-4f8b-ba2b-64f839514140.jpg",
      title: 'В преддверии празднование праздника Дня Отца «ВместеПапой!» В ДК «Nika»',
      time: "22 часа назад",
    },
  ];

  const calendar = [
    [null, null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, null, null],
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl text-secondary font-bold">ВОИ</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs font-medium text-primary hover:text-secondary transition-all whitespace-nowrap py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item}
                </a>
              ))}
            </nav>

            <Button className="hidden lg:flex bg-secondary text-primary hover:bg-secondary/90 font-medium whitespace-nowrap flex-shrink-0">
              <Icon name="Users" className="mr-2 h-4 w-4" />
              Версия для слабовидящих
            </Button>

            <Button variant="ghost" className="lg:hidden flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
          
          {mobileMenuOpen && (
            <div className="lg:hidden border-t py-4 animate-fade-in">
              <nav className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium text-primary hover:text-secondary transition-colors px-4 py-2 hover:bg-muted rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-primary via-[#1e3a5f] to-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZjEwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Вместе мы сможем больше!
              </h1>
              <div className="space-y-4">
                <p className="text-xl text-secondary font-semibold">
                  Ханты-Мансийская общественная
                </p>
                <p className="text-xl text-secondary font-semibold">
                  региональная организация
                </p>
                <p className="text-white text-lg">
                  Общероссийской общественной организации
                </p>
                <p className="text-white text-lg font-bold">
                  «Всероссийское общество инвалидов»
                </p>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur shadow-2xl animate-slide-in-right border-t-4 border-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-secondary pb-3">
                  Контакты
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-primary font-medium">г. Ханты-Мансийск,</p>
                      <p className="text-muted-foreground">ул. Пионерская, 27</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <a href="tel:+73467320976" className="text-primary font-medium hover:text-secondary transition-colors">
                        +7 (3467) 320-976
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <a href="mailto:hmao-voi@mail.ru" className="text-primary font-medium hover:text-secondary transition-colors">
                        hmao-voi@mail.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-secondary hover:text-primary transition-all transform hover:scale-110"
                    >
                      <Icon name="Users" className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-secondary"></div>
                <h2 className="text-4xl font-bold text-primary">О нас</h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Ханты-Мансийская региональная организация Общероссийской общественной 
                  организации инвалидов — это крупнейшее объединение людей с ограниченными 
                  возможностями здоровья в регионе.
                </p>
                <p className="leading-relaxed">
                  Мы работаем над улучшением качества жизни инвалидов, защитой их прав и 
                  интересов, созданием условий для полноценной интеграции в общество.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 pt-6">
                  <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
                    <div className="text-4xl font-bold text-secondary mb-2">1500+</div>
                    <div className="text-sm text-primary font-medium">Членов организации</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
                    <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                    <div className="text-sm text-primary font-medium">Проектов в год</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
                    <div className="text-4xl font-bold text-secondary mb-2">25</div>
                    <div className="text-sm text-primary font-medium">Лет опыта</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="Shield" className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Защита прав</div>
                      <div className="text-sm">Юридическая поддержка</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="Heart" className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Поддержка</div>
                      <div className="text-sm">Социальная помощь</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="Users" className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Сообщество</div>
                      <div className="text-sm">Мероприятия и клубы</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <img
                  src="https://cdn.poehali.dev/projects/4525f3ee-5dd9-42f8-9d97-92f0e20f200a/files/07e71bb3-613b-41be-b8b8-5552764b911f.jpg"
                  alt="О нас"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-secondary"></div>
            <h2 className="text-4xl font-bold text-primary">Новости</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white"
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Icon name="Clock" className="h-4 w-4 text-secondary" />
                        <span>{item.time}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-primary leading-tight group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2">
                        <Icon name="MessageCircle" className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">0</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-secondary/30 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-center mb-4 text-secondary">
                    Архив новостей
                  </h3>
                  <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-primary">Октябрь 2025</p>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                    {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                      <div key={day} className="text-center font-semibold text-muted-foreground p-1">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {calendar.flat().map((day, index) => (
                      <div
                        key={index}
                        className={`text-center p-2 rounded ${
                          day
                            ? day === 21
                              ? "bg-secondary text-primary font-bold"
                              : "hover:bg-muted cursor-pointer text-primary"
                            : ""
                        }`}
                      >
                        {day || ""}
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-primary">
                        Имя
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border-secondary/30 focus:border-secondary"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-primary">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-secondary/30 focus:border-secondary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-primary">
                        Сообщение
                      </Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="border-secondary/30 focus:border-secondary min-h-[100px]"
                        placeholder="Ваше сообщение..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-8 w-1 bg-secondary"></div>
              <h2 className="text-4xl font-bold text-primary">Наши достижения</h2>
              <div className="h-8 w-1 bg-secondary"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              За годы работы мы реализовали множество значимых проектов и получили признание на региональном и федеральном уровнях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Award" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">15</h3>
              <p className="text-sm text-primary font-medium">Региональных наград</p>
            </Card>

            <Card className="text-center p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Trophy" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">8</h3>
              <p className="text-sm text-primary font-medium">Федеральных грантов</p>
            </Card>

            <Card className="text-center p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Users" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">5000+</h3>
              <p className="text-sm text-primary font-medium">Человек получили помощь</p>
            </Card>

            <Card className="text-center p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Sparkles" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">120+</h3>
              <p className="text-sm text-primary font-medium">Мероприятий проведено</p>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-8">Наши партнёры</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Правительство ХМАО", icon: "Building2" },
              { name: "Минтруд России", icon: "Briefcase" },
              { name: "ПФР", icon: "Landmark" },
              { name: "Фонд поддержки", icon: "HandHeart" },
              { name: "Здравоохранение", icon: "HeartPulse" },
              { name: "Образование", icon: "GraduationCap" },
            ].map((partner, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all hover:scale-105 border-secondary/10"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name={partner.icon as any} className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-xs text-center font-medium text-primary">{partner.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 border-t-4 border-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-secondary font-semibold">
              © 2025 Всероссийское общество инвалидов
            </p>
            <p className="text-sm mt-2 text-white/80">
              Ханты-Мансийская региональная организация
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;