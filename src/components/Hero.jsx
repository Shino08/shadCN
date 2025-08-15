import { useState } from "react";
import { HeaderHero } from "./HeaderHero";

export const Hero = () => {
  const values = [
    { number: "01", title: "Confianza" },
    { number: "02", title: "Seguridad" },
    { number: "03", title: "Diseño" },
    { number: "04", title: "Perseverancia" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background con colores personalizados y bordes redondeados más definidos */}
      <div
        className="absolute inset-0 rounded-b-[4rem] md:rounded-b-[5rem] lg:rounded-b-[6rem]"
        style={{ backgroundColor: "rgb(104, 102, 114)" }}
      >
        {/* Overlay con gradiente sutil y bordes redondeados */}
        <div
          className="absolute inset-0 opacity-85 rounded-b-[4rem] md:rounded-b-[5rem] lg:rounded-b-[6rem]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Overlay adicional para mejor contraste */}
        <div 
          className="absolute inset-0 rounded-b-[4rem] md:rounded-b-[5rem] lg:rounded-b-[6rem]"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <HeaderHero />

        {/* Main Content */}
        <div className="flex-1 flex items-center py-8 md:py-16 lg:py-20">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 xl:gap-64 items-center">
              
              {/* Left Side - Brand */}
              <div className="text-white space-y-8 md:space-y-12 order-1 lg:order-1">
                {/* Brand - Exactamente como en la imagen */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold leading-none">
                    b&d Consulting
                  </h2>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-white space-y-6 md:space-y-8 order-2 lg:order-2">
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-md sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    Transforma tu Potencial Profesional
                  </h4>
                </div>

                <p
                  className="text-md md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl"
                  
                >
                  Descubre cursos dinámicos que impulsan tu carrera. Metodología
                  innovadora, resultados comprobados y networking de alto valor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values - Positioned at bottom like in the image */}
        <div className="pb-8 md:pb-12 lg:pb-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 md:space-y-3 hover:transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div
                    className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold group-hover:scale-110 transition-transform duration-300"
                    style={{
                      color: index === 2 ? "rgb(19, 105, 161)" : "rgb(195, 88, 59)",
                    }}
                  >
                    # <span className="text-white">{value.number}</span>
                  </div>
                  <div
                    className="text-sm md:text-md lg:text-lg xl:text-lg font-medium text-white"
                  >
                    {value.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
