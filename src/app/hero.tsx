"use client";

import { useState, useEffect } from "react";
import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2025-09-15T09:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unitTranslations = {
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/image/african_cybersecurity_summit_morocco_cover.jfif')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="grid min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center max-w-6xl py-10">
          {/* Badge de l'événement */}
          <div className="flex flex-wrap justify-center items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 sm:mb-6 border border-white/20">
            <div className="flex items-center">
              <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-300" />
              <Typography
                variant="small"
                color="white"
                className="font-medium text-xs sm:text-sm ml-1"
              >
                15 Septembre 2025
              </Typography>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-300 ml-1 sm:ml-2" />
              <Typography
                variant="small"
                color="white"
                className="font-medium text-xs sm:text-sm ml-1"
              >
                Maroc
              </Typography>
            </div>
          </div>

          {/* Titre principal */}
          <Typography
            variant="h1"
            color="white"
            className="w-full mb-4 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2"
          >
            FORUM AFRICAIN DE LA CYBERSÉCURITÉ
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
              2025
            </span>
          </Typography>

          {/* Sous-titre */}
          <Typography
            variant="h4"
            color="white"
            className="mb-6 font-light opacity-90 text-sm sm:text-base md:text-lg lg:text-xl px-4 max-w-3xl"
          >
            Renforcer la cybersécurité grâce à l'intelligence artificielle et au
            cloud de confiance
          </Typography>

          {/* Compte à rebours */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8 w-full max-w-md sm:max-w-lg">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-white/20"
              >
                <Typography
                  variant="h2"
                  color="white"
                  className="font-bold text-xl sm:text-2xl md:text-3xl"
                >
                  {value.toString().padStart(2, "0")}
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="uppercase tracking-wide opacity-70 text-xs sm:text-sm"
                >
                  {unitTranslations[unit as keyof typeof unitTranslations]}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
