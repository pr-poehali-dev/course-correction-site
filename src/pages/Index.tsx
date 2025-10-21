import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigationItems = [
    "О НАС",
    "СТРУКТУРА ХМАО ВОИ",
    "КОНВЕНЦИЯ ООН О ПРАВАХ ИНВАЛИДОВ",
    "ВЕЛИКИЕ ИНВАЛИДЫ ПЛАНЕТЫ",
    "ПРОЕКТЫ",
    "НОВОСТИ",
    "МЕРОПРИЯТИЯ",
    "ФОТОГАЛЕРЕЯ",
    "ДОКУМЕНТЫ"
  ];

  const newsItems = [
    {
      image: "https://cdn.poehali.dev/files/d75dae69-2135-4ea7-8cae-ebc4e731a63b.png",
      title: "Хотите чувствовать себя лучше, выглядеть моложе и забыть о депрессии?",
      date: "22 часа назад",
      comments: 0
    },
    {
      image: "https://cdn.poehali.dev/files/d75dae69-2135-4ea7-8cae-ebc4e731a63b.png",
      title: "В Югре ужесточились правила оказания медпомощи иностранцам",
      date: "22 часа назад",
      comments: 0
    },
    {
      image: "https://cdn.poehali.dev/files/d75dae69-2135-4ea7-8cae-ebc4e731a63b.png",
      title: "В преддверии празднование праздника Дня Отца «ВместеСПапой» В ДК «Ника» первичная ячейка Каркатеевы команда «Сильные Духом»",
      date: "22 часа назад",
      comments: 0
    }
  ];

  const calendarDays = [
    [null, null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31]
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/d75dae69-2135-4ea7-8cae-ebc4e731a63b.png" 
                alt="ВОИ Лого" 
                className="h-12 w-12 object-contain"
              />
            </div>
            
            <nav className="hidden lg:flex items-center gap-6 text-sm">
              {navigationItems.map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-sm">
                <Icon name="Eye" className="mr-2" size={16} />
                Версия для слабовидящих
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-secondary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Вместе мы сможем больше!
              </h1>
              <div className="space-y-3 text-lg">
                <p className="font-semibold">Ханты-Мансийская общественная</p>
                <p className="font-semibold">региональная организация</p>
                <p>Общероссийской общественной организации</p>
                <p className="text-xl font-bold">«Всероссийское общество инвалидов»</p>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Контакты</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">г. Ханты-Мансийск,</p>
                    <p className="text-muted-foreground">ул. Пионерская, 27</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <a href="tel:+73467320976" className="hover:text-primary transition-colors">
                    +7 (3467) 320-976
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <a href="mailto:hmao-voi@mail.ru" className="hover:text-primary transition-colors">
                    hmao-voi@mail.ru
                  </a>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">Главная</p>
            <h2 className="text-4xl font-bold text-foreground">Новости</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Clock" size={14} />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="font-semibold text-foreground leading-tight hover:text-primary transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="MessageCircle" size={14} />
                        <span>{item.comments}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Calendar Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold text-center text-foreground">
                    Архив новостей
                  </h3>
                  <p className="text-center text-muted-foreground">Октябрь 2025</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-7 gap-1 text-xs font-semibold text-center mb-2">
                      <div>Пн</div>
                      <div>Вт</div>
                      <div>Ср</div>
                      <div>Чт</div>
                      <div>Пт</div>
                      <div>Сб</div>
                      <div>Вс</div>
                    </div>
                    {calendarDays.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-cols-7 gap-1">
                        {week.map((day, dayIndex) => (
                          <div
                            key={dayIndex}
                            className={`aspect-square flex items-center justify-center text-sm rounded ${
                              day
                                ? "hover:bg-primary hover:text-white cursor-pointer transition-colors"
                                : ""
                            }`}
                          >
                            {day || ""}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <a href="#" className="text-primary text-sm hover:underline block mt-4">
                    « Сен
                  </a>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <Button className="w-full">НАПИСАТЬ</Button>
                <Button variant="outline" className="w-full">СООБЩЕНИЕ</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <p className="text-sm text-gray-300">
                Ханты-Мансийская общественная региональная организация ВОИ
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <p className="text-sm text-gray-300">г. Ханты-Мансийск</p>
              <p className="text-sm text-gray-300">ул. Пионерская, 27</p>
              <p className="text-sm text-gray-300">+7 (3467) 320-976</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3 justify-center md:justify-start">
                <Button size="icon" variant="ghost" className="text-white hover:text-secondary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-secondary">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-secondary">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 ХМАО ВОИ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
