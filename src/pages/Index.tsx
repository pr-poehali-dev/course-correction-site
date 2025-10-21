import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      image: "https://cdn.poehali.dev/files/d75dae69-2135-4ea7-8cae-ebc4e731a63b.png",
      title: "Хотите чувствовать себя лучше, выглядеть моложе и забыть о депрессии?",
      time: "22 часа назад",
    },
    {
      image: "https://cdn.poehali.dev/files/d75dae69-2135-4ea7-8cae-ebc4e731a63b.png",
      title: "В Югре ужесточились правила оказания медпомощи иностранцам",
      time: "22 часа назад",
    },
    {
      image: "https://cdn.poehali.dev/files/d75dae69-2135-4ea7-8cae-ebc4e731a63b.png",
      title: "В преддверии празднование праздника Дня Отца «ВместеПапой!» В ДК «Ника»",
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-xl text-white font-bold">ВОИ</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs font-medium text-gray-700 hover:text-blue-600 transition-all whitespace-nowrap py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item}
                </a>
              ))}
            </nav>

            <Button className="hidden lg:flex bg-red-600 text-white hover:bg-red-700 font-medium whitespace-nowrap flex-shrink-0">
              <Icon name="Eye" className="mr-2 h-4 w-4" />
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
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 hover:bg-gray-100 rounded"
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

      <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZjEwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Вместе мы сможем больше!
              </h1>
              <div className="space-y-4">
                <p className="text-xl text-white font-semibold">
                  Ханты-Мансийская общественная
                </p>
                <p className="text-xl text-white font-semibold">
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

            <Card className="bg-gray-100 backdrop-blur shadow-2xl animate-slide-in-right border-t-4 border-red-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-3">
                  Контакты
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">г. Ханты-Мансийск,</p>
                      <p className="text-gray-600">ул. Пионерская, 27</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <a href="tel:+73467320976" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                        +7 (3467) 320-976
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <a href="mailto:hmao-voi@mail.ru" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                        hmao-voi@mail.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110"
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500 mb-2">Главная</p>
            <h2 className="text-4xl font-bold text-gray-900">Новости</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mt-12">
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600 group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
                        <Icon name="Clock" className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-medium text-gray-700">{item.time}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-4">
                        <Icon name="MessageCircle" className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="border-t-4 border-red-600 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
                    Архив новостей
                  </h3>
                  <div className="mb-4">
                    <p className="text-center font-semibold text-gray-700 mb-3">Октябрь 2025</p>
                    <div className="grid grid-cols-7 gap-1 text-xs">
                      <div className="text-center font-semibold text-gray-600 p-1">Пн</div>
                      <div className="text-center font-semibold text-gray-600 p-1">Вт</div>
                      <div className="text-center font-semibold text-gray-600 p-1">Ср</div>
                      <div className="text-center font-semibold text-gray-600 p-1">Чт</div>
                      <div className="text-center font-semibold text-gray-600 p-1">Пт</div>
                      <div className="text-center font-semibold text-gray-600 p-1">Сб</div>
                      <div className="text-center font-semibold text-gray-600 p-1">Вс</div>
                      {calendar.flat().map((day, i) => (
                        <div 
                          key={i} 
                          className={`text-center p-1 rounded ${
                            day ? 'hover:bg-blue-100 cursor-pointer text-gray-700' : ''
                          } ${day === 21 ? 'bg-blue-600 text-white font-bold' : ''}`}
                        >
                          {day || ''}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-blue-600 mt-3 cursor-pointer hover:underline">« Сен</p>
                  </div>
                  <div className="space-y-3 border-t pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      НАПИСАТЬ
                    </Button>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      СООБЩЕНИЕ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2 inline-block">О нас</h4>
              <p className="text-gray-400 leading-relaxed">
                Ханты-Мансийская региональная организация Всероссийского общества инвалидов
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2 inline-block">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-600" />
                  г. Ханты-Мансийск, ул. Пионерская, 27
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-5 w-5 text-blue-600" />
                  +7 (3467) 320-976
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                  hmao-voi@mail.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2 inline-block">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110">
                  <Icon name="Users" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 ХМАО ВОИ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
