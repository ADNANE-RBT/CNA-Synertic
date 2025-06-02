"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. Comment puis-je m'inscrire au Forum Africain de la Cybersécurité 2025 ?",
    desc: "Vous pouvez vous inscrire en visitant notre page d'inscription officielle. Suivez les étapes simples pour finaliser votre enregistrement et garantir votre place à l'événement.",
  },
  {
    title: "2. Quels sont les frais d'inscription et que comprennent-ils ?",
    desc: "Les frais d'inscription varient en fonction du type de participant (professionnel, étudiant, institutionnel). Ils comprennent l'accès à toutes les conférences, ateliers, démonstrations, ainsi qu'aux pauses café et au matériel de conférence.",
  },
  {
    title: "3. Où se déroule l'événement et quelles sont les dates ?",
    desc: "Le Forum se tiendra à Rabat, Maroc, du 10 au 12 juin 2025. Le lieu précis sera communiqué après confirmation de l'inscription.",
  },
  {
    title: "4. À qui s'adresse ce forum ?",
    desc: "Le Forum s'adresse aux professionnels de la cybersécurité, décideurs politiques, chercheurs, entreprises technologiques et étudiants intéressés par les enjeux de la cybersécurité, de l'IA et du Cloud de confiance.",
  },
  {
    title: "5. L'événement propose-t-il des sessions en ligne ?",
    desc: "Oui, certaines sessions seront diffusées en direct pour permettre une participation à distance. Les détails seront disponibles après l'inscription.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Foire aux questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Retrouvez ici les réponses aux questions les plus fréquentes concernant le Forum Africain de la Cybersécurité 2025.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
