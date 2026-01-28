import React from 'react';
import { Phone, Calendar, Star } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="md:text-5xl lg:text-6xl !font-bold !text-4xl text-gray-900">
                Family <span className="text-blue-600">Dental Care</span> in San Jose
              </h1>
              <p className="md:text-xl !text-lg text-gray-600">Experience compassionate, professional dental care for you and your entire family at Khalsa Dental Care.

              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.location.href = 'tel:4082745000'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">

                <Phone className="h-5 w-5" />
                Call Now
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2">

                <Calendar className="h-5 w-5" />
                Schedule Appointment
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg"
                alt="Professional dental care at Khalsa Dental Care"
                className="w-full h-auto object-cover" />

            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;