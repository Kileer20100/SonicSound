import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function GlassBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Плавное отталкивание от курсора
  const moveX1 = useTransform(springX, [0.5, -0.5], [-120, 120]);
  const moveY1 = useTransform(springY, [0.5, -0.5], [-120, 120]);
  
  const moveX2 = useTransform(springX, [-0.5, 0.5], [-100, 100]);
  const moveY2 = useTransform(springY, [-0.5, 0.5], [-100, 100]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#050508]">
      
      {/* Контейнер с жидким SVG-фильтром */}
      <div className="absolute inset-0 w-full h-full filter url(#gooey) saturate-200">
        
        {/* Неоново-фиолетовая жидкая масса */}
        <motion.div
          style={{ x: moveX1, y: moveY1 }}
          animate={{
            scale: [1, 1.3, 0.85, 1.1, 1],
            // Меняем радиусы углов для создания эффекта деформации капли
            borderRadius: [
              "42% 58% 70% 30% / 45% 45% 55% 55%",
              "70% 30% 52% 48% / 60% 40% 60% 40%",
              "50% 50% 30% 70% / 30% 60% 40% 70%",
              "42% 58% 70% 30% / 45% 45% 55% 55%"
            ],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] left-[15%] h-[450px] w-[450px] bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-60 blur-[40px]"
        />

        {/* Циановая жидкая масса */}
        <motion.div
          style={{ x: moveX2, y: moveY2 }}
          animate={{
            scale: [1.2, 0.9, 1.4, 1.1, 1.2],
            borderRadius: [
              "50% 50% 30% 70% / 50% 60% 40% 50%",
              "42% 58% 70% 30% / 45% 45% 55% 55%",
              "70% 30% 52% 48% / 60% 40% 60% 40%",
              "50% 50% 30% 70% / 50% 60% 40% 50%"
            ],
            rotate: [0, -120, -240, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] right-[15%] h-[500px] w-[500px] bg-gradient-to-br from-cyan-500 to-blue-600 opacity-50 blur-[40px]"
        />

        {/* Розовая центральная связующая капля */}
        <motion.div
          animate={{
            x: [0, 90, -60, 0],
            y: [0, -70, 70, 0],
            borderRadius: [
              "70% 30% 52% 48% / 60% 40% 60% 40%",
              "50% 50% 30% 70% / 30% 60% 40% 70%",
              "42% 58% 70% 30% / 45% 45% 55% 55%",
              "70% 30% 52% 48% / 60% 40% 60% 40%"
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[30%] left-[30%] h-[400px] w-[400px] bg-gradient-to-r from-pink-500 to-rose-500 opacity-40 blur-[40px]"
        />
      </div>

      {/* Финальный глубокий стеклянный слой */}
      <div className="absolute inset-0 bg-[#050508]/50 backdrop-blur-[100px] backdrop-saturate-150" />

      {/* SVG Фильтр "Gooey" для склеивания капель в единое целое */}
      <svg className="hidden">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
