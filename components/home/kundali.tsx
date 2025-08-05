"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function PhysicsKundaliBanner() {
  return (
    <section className="py-12 md:py-16 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/kundali.jpg" // Replace with your image path
              alt="Physics Kundali"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-4">
              Get Your <span className="text-[#FF5722]">Physics Kundali</span> Analysis
            </h2>
            <p className="text-lg text-[#321414]/90 mb-6">
              Our unique Physics Kundali combines ancient Vedic astrology with modern scientific principles to provide you with the most accurate life predictions and guidance.
            </p>
            <p className="text-[#321414]/80 mb-8">
              We analyze planetary positions using advanced physics calculations to give you precise insights about your career, relationships, health, and future possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919827175769?text=Namaste%20Pandit%20ji%2C%20I%20want%20to%20get%20my%20Physics%20Kundali%20analysis" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consult Now (WhatsApp)
                </Button>
              </a>
              <a href="tel:+919827175769">
                <Button variant="outline" className="w-full border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722]/10 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}