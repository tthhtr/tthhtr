import React from 'react';
import { Stethoscope, Sparkles, Shield, Smile, Baby, ClipboardCheck } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Orthodontics and Braces',
      description: 'Professional orthodontic treatments including braces and aligners to straighten teeth and create beautiful, healthy smiles.',
      image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2'
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Proactive dental services to prevent issues before they start, including fluoride treatments and sealants.',
      image: 'https://images.unsplash.com/photo-1704455306251-b4634215d98f'
    },
    {
      icon: Sparkles,
      title: 'Cleanings & Exams',
      description: 'Professional teeth cleaning and thorough examinations to maintain your oral health and bright smile.',
      image: 'https://images.pexels.com/photos/16212691/pexels-photo-16212691.png'
    },
    {
      icon: ClipboardCheck,
      title: 'Fillings & Restorations',
      description: 'Quality restorative treatments including fillings, crowns, and bridges to repair and strengthen teeth.',
      image: 'https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg'
    },
    {
      icon: Smile,
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with professional cosmetic treatments including whitening and aesthetic improvements.',
      image: 'https://images.unsplash.com/photo-1609840113564-ab4aba4956c4'
    },
    {
      icon: Baby,
      title: 'Family Dental Care',
      description: 'Gentle, comprehensive dental care for patients of all ages, from young children to seniors.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From routine check-ups to advanced treatments, we offer comprehensive dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Have questions about our services? We're here to help!
          </p>
          <button
            onClick={() => (window.location.href = 'tel:4082745000')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
