import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "«Вертикаль» — команда сертифицированных промышленных альпинистов, для которых высота — это работа, а безопасность — закон. Мы выполняем весь спектр высотных работ для строительных компаний, управляющих зданиями и частных клиентов: от мойки фасадов и остекления до монтажа, ремонта и герметизации. Наши специалисты имеют допуски и многолетний опыт, а каждый объект застрахован. Мы работаем там, где не пройдёт вышка и не встанут леса — быстро, аккуратно и без остановки жизни здания. Доверьте высоту профессионалам, которые знают её изнутри."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/bb3ad2f0-a972-414c-8c08-5d3f3419bb91/files/9ff9c18f-aed7-492c-be1e-f1aa4b754b29.jpg",
      alt: "Мойка фасадов и остекления на высоте",
      title: "Мойка фасадов и окон",
      description:
        "Профессиональная мойка остекления, витражей и фасадов любой этажности. Убираем грязь, известковый налёт и следы после стройки. Возвращаем зданию идеальный вид без вышек и лесов. Стоимость от 30 ₽/м².",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/bb3ad2f0-a972-414c-8c08-5d3f3419bb91/files/5678f2e3-1be7-4fce-b1a1-c94fcaf11b1e.jpg",
      alt: "Ремонт и покраска фасада здания",
      title: "Ремонт и покраска фасадов",
      description:
        "Восстановление штукатурки, герметизация межпанельных швов, покраска и утепление фасадов. Устраняем трещины, протечки и разрушения на любой высоте. Гарантия на все работы. Стоимость от 500 ₽/м².",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/bb3ad2f0-a972-414c-8c08-5d3f3419bb91/files/322eef43-b864-490a-8dd4-89924c992729.jpg",
      alt: "Монтажные работы на высоте",
      title: "Монтаж и высотный сервис",
      description:
        "Установка рекламных конструкций, кондиционеров, водостоков и снегозадержателей. Демонтаж, чистка кровли от снега и наледи, спил деревьев. Работаем с частными и коммерческими объектами. Расчёт по объекту.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">О КОМПАНИИ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">НАШИ УСЛУГИ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Выполняем все виды высотных работ с гарантией качества и полным соблюдением техники безопасности.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Нам доверяют{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">КЛИЕНТЫ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Отзывы строительных компаний, управляющих зданиями и частных заказчиков, для которых мы работали.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/bb3ad2f0-a972-414c-8c08-5d3f3419bb91/files/d950d254-a189-448a-9010-31fc0729adfe.jpg"
          mobileImage="https://cdn.poehali.dev/projects/bb3ad2f0-a972-414c-8c08-5d3f3419bb91/files/d950d254-a189-448a-9010-31fc0729adfe.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}