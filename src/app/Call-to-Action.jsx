"use client";

import { Typography, Button } from "@material-tailwind/react";

function CallToAction() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 py-2 mb-10">

        {/* Appel à l'action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <Typography variant="h3" className="mb-4">
            Vous souhaitez devenir partenaire ?
          </Typography>
          <Typography variant="lead" className="mb-8 opacity-90">
            Partagez votre expertise avec la communauté africaine de la cybersécurité. 
            Soumettez votre proposition pour rejoindre notre réseau de partenaires reconnus.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Devenir partenaire média
            </Button>
            <Button variant="outlined" size="lg" className="border-white text-white hover:bg-white/10">
              Devenir partenaire événementiel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
