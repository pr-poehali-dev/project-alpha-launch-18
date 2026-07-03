import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Running club testimonials data with randomly generated icons
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Заказывали мойку остекления бизнес-центра. Команда «Вертикаль» отработала за один день, без единого замечания. Здание засияло, работу жильцов не остановили.",
    by: "Сергей Иванов, УК «Меридиан»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyIvanov&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Герметизировали межпанельные швы в нашем доме — протечки прекратились полностью. Всё чисто, с гарантией и договором. Рекомендую как надёжного подрядчика.",
    by: "Марина Петрова, председатель ТСЖ",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaPetrova&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Работаем с «Вертикалью» на нескольких объектах. Всегда допуски в порядке, техника безопасности на высоте, сроки соблюдают. Профессионалы своего дела.",
    by: "Анна Козлова, прораб СК «СтройГрад»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaKozlova&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Устанавливали кондиционеры на фасаде 12-го этажа. Аккуратно, быстро и безопасно. Приятно иметь дело с людьми, которые не боятся высоты и знают своё дело.",
    by: "Дмитрий Смирнов, частный клиент",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitrySmirnov&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Зимой чистили кровлю от снега и наледи над входной группой ТЦ. Убрали угрозу для посетителей за пару часов. Оперативно откликнулись даже в выходной.",
    by: "Елена Новикова, директор ТЦ «Плаза»",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaNovikova&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Красили и восстанавливали фасад административного здания. Результат превзошёл ожидания — как новое. Смета прозрачная, без скрытых доплат.",
    by: "Алексей Морозов, собственник здания",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyMorozov&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Монтировали рекламную вывеску на высоте — сделали ровно, надёжно и точно в срок. Порадовало, что всё застраховано. Будем обращаться ещё.",
    by: "Айгуль Рахимова, маркетолог сети",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AigulRahimova&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Спилили аварийные ветки, нависавшие над парковкой, без повреждения машин и построек. Работа ювелирная. Спасибо за профессионализм и чистоту.",
    by: "Ольга Ким, управляющая ЖК",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaKim&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Отмыли фасад после ремонтных работ — сняли остатки раствора и краски со стекла. Идеально. Приятная команда, всё по договору и с гарантией.",
    by: "Наталья Соколова, застройщик",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaSokolova&backgroundColor=f97316&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}