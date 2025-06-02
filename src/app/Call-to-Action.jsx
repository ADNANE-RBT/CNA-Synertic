"use client";


import { useState } from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";


function CallToAction() {
   
 

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 py-2 mb-10">

        {/* Call to Action */}
         <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <Typography variant="h3" className="mb-4">
            Want to Become a Partner?
          </Typography>
          <Typography variant="lead" className="mb-8 opacity-90">
            Share your expertise with Africa's cybersecurity community. 
            Submit your proposal to join our distinguished lineup.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Join as media partner
            </Button>
            <Button variant="outlined" size="lg" className="border-white text-white hover:bg-white/10">
              Join as event partner
            </Button>
          </div>
        </div> 
      </div>
    </section>
  );
  
  };

export default CallToAction;