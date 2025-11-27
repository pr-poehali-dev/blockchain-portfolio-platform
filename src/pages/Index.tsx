import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={32} className="text-primary" />
            <span className="text-2xl font-bold">VerifyChain</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#solutions" className="hover:text-primary transition-colors">Решения</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Начать
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Блокчейн-верификация
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Цифровое портфолио с гарантией подлинности
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Платформа для создания верифицированных профессиональных профилей. 
                Каждое достижение подтверждено блокчейн-технологией.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Создать портфолио
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">Экономия времени на проверку</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Достоверность данных</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Доступность системы</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/56f6dbf1-d96c-4ecb-bbea-8d66a8fc679d/files/d91cf117-cc7f-4e13-a3e3-476348452b20.jpg" 
                alt="Digital Portfolio Platform"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Как это работает
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Три шага к верифицированному портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и прозрачный процесс создания защищенного цифрового профиля
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="UserPlus" size={24} className="text-primary" />
                </div>
                <CardTitle>1. Создайте профиль</CardTitle>
                <CardDescription>
                  Заполните информацию о себе, добавьте образование, опыт работы и проекты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={24} className="text-secondary" />
                </div>
                <CardTitle>2. Пройдите верификацию</CardTitle>
                <CardDescription>
                  Подтвердите свои достижения через образовательные учреждения и работодателей
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Share2" size={24} className="text-primary" />
                </div>
                <CardTitle>3. Делитесь с работодателями</CardTitle>
                <CardDescription>
                  Получите уникальную ссылку на верифицированное портфолио с блокчейн-защитой
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/56f6dbf1-d96c-4ecb-bbea-8d66a8fc679d/files/36dc36a1-a01e-4b7b-9e66-bff8d696996b.jpg" 
                alt="Blockchain Network"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Технология блокчейн гарантирует надежность</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Icon name="Lock" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Неизменность данных</h4>
                    <p className="text-muted-foreground">Информация в блокчейне не может быть изменена или удалена</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Shield" size={24} className="text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Криптографическая защита</h4>
                    <p className="text-muted-foreground">Каждая запись защищена современными алгоритмами шифрования</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Прозрачная верификация</h4>
                    <p className="text-muted-foreground">Любой работодатель может мгновенно проверить подлинность данных</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Решения для всех
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Кто использует нашу платформу</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <CardHeader>
                <Icon name="Briefcase" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Соискатели</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Создайте верифицированное цифровое резюме</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Подтвердите свои компетенции и достижения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Получите конкурентное преимущество</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30">
              <CardHeader>
                <Icon name="Building2" size={40} className="text-secondary mb-4" />
                <CardTitle className="text-2xl">Компании</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span>Сократите время на проверку кандидатов на 70%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span>Получайте только достоверную информацию</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span>Интеграция с HR-системами</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <CardHeader>
                <Icon name="GraduationCap" size={40} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Университеты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Выпускайте цифровые дипломы и сертификаты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Защитите документы от подделок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Повысьте престиж учебного заведения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Тарифы
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите подходящий план</h2>
            <p className="text-xl text-muted-foreground">Гибкие условия для любого масштаба</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription>Для индивидуальных пользователей</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Бесплатно</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Создание цифрового портфолио</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>До 5 верифицированных записей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Публичная ссылка на профиль</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary shadow-xl scale-105">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Популярный</Badge>
                <CardTitle className="text-2xl">Профессиональный</CardTitle>
                <CardDescription>Для активных специалистов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">2 990 ₽</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Неограниченные записи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Приоритетная верификация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Аналитика просмотров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Индивидуальный дизайн</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-secondary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Корпоративный</CardTitle>
                <CardDescription>Для компаний и университетов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">От 99 990 ₽</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span>Все функции Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span>API интеграция</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <span>SLA 99.9%</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Связаться с нами
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 24 часов
              </p>
              <img 
                src="https://cdn.poehali.dev/projects/56f6dbf1-d96c-4ecb-bbea-8d66a8fc679d/files/ac7035c0-b383-472b-92c2-3a09b659f0ee.jpg" 
                alt="Contact Us"
                className="rounded-2xl"
              />
            </div>
            <Card className="bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Заполните форму, и наш менеджер свяжется с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input placeholder="Компания" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} className="text-primary" />
                <span className="text-xl font-bold">VerifyChain</span>
              </div>
              <p className="text-muted-foreground">
                Платформа для создания верифицированных цифровых портфолио на блокчейне
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#solutions" className="hover:text-primary transition-colors">Решения</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VerifyChain. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
