import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'СПА-комплексы',
      description: 'Проектирование и строительство современных спа-центров с полным комплексом услуг',
      icon: 'Sparkles',
      image: 'https://cdn.poehali.dev/projects/eda34125-77ee-438f-8d09-1ee8ca9671aa/files/35d0a6b8-94c8-4d16-a897-566172a60c64.jpg'
    },
    {
      title: 'Бани и сауны',
      description: 'Традиционные и современные бани из качественных материалов с учётом всех технологий',
      icon: 'Flame',
      image: 'https://cdn.poehali.dev/projects/eda34125-77ee-438f-8d09-1ee8ca9671aa/files/1bbbc199-acf4-4584-a1b5-d44c20f1bc17.jpg'
    },
    {
      title: 'Хаммамы',
      description: 'Строительство турецких хаммамов с аутентичным дизайном и современными технологиями',
      icon: 'Droplets',
      image: 'https://cdn.poehali.dev/projects/eda34125-77ee-438f-8d09-1ee8ca9671aa/files/3844f8ff-8a17-4a93-a2ed-4d5d83264355.jpg'
    }
  ];

  const portfolio = [
    {
      title: 'Спа-центр "Гармония"',
      location: 'Москва',
      area: '450 м²',
      year: '2024'
    },
    {
      title: 'Банный комплекс "Релакс"',
      location: 'Санкт-Петербург',
      area: '320 м²',
      year: '2023'
    },
    {
      title: 'Хаммам "Восточная сказка"',
      location: 'Казань',
      area: '280 м²',
      year: '2024'
    }
  ];

  const features = [
    {
      icon: 'Award',
      title: 'Опыт 15+ лет',
      description: 'Реализовали более 200 проектов'
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия качества',
      description: 'Официальная гарантия на все работы'
    },
    {
      icon: 'Users',
      title: 'Профессионалы',
      description: 'Команда сертифицированных специалистов'
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Соблюдаем договорные обязательства'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">СпаСтрой</h1>
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Консультация</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className={`container mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Строительство премиальных<br />
            <span className="text-primary">СПА и релакс-пространств</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаём уникальные помещения для отдыха и восстановления с 2009 года
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="FileText" size={20} className="mr-2" />
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный цикл работ от проектирования до сдачи объекта под ключ
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Реализованные проекты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Примеры наших работ за последние годы
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-48 bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Building2" size={64} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Ruler" size={16} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">О компании СпаСтрой</h3>
                <p className="text-muted-foreground mb-4">
                  Мы специализируемся на проектировании и строительстве премиальных СПА-комплексов, 
                  бань, саун и хаммамов. За 15 лет работы реализовали более 200 успешных проектов 
                  по всей России.
                </p>
                <p className="text-muted-foreground">
                  Наша команда — это профессионалы своего дела: архитекторы, инженеры, строители 
                  и дизайнеры, которые создают уникальные пространства для релаксации и оздоровления.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Реализованных<br />проектов</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Лет успешной<br />работы</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Клиентов<br />рекомендуют нас</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="info@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                  />
                </div>
                <Button size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Phone" size={32} className="text-primary mx-auto mb-2" />
              <p className="font-semibold">Телефон</p>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="text-primary mx-auto mb-2" />
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground">info@spastroy.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-2" />
              <p className="font-semibold">Офис</p>
              <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 СпаСтрой. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;