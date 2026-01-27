import React from 'react';
import { Heart, Users, Award, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Your comfort and wellbeing are our top priorities. We take time to listen and understand your needs.'
  },
  {
    icon: Users,
    title: 'Family-Friendly',
    description: 'Comprehensive dental care for patients of all ages, from children to seniors.'
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: 'Our skilled professionals bring years of expertise and ongoing training to deliver exceptional care.'
  },
  {
    icon: Shield,
    title: 'Trusted in San Jose',
    description: 'Proudly serving the San Jose community with quality dental care you can trust.'
  }];


  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Khalsa Dental Care
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Khalsa Dental Care, we believe that quality dental care should be accessible, comfortable, and personalized. Our dedicated team is committed to providing gentle, professional treatment in a warm and welcoming environment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:shadow-lg">

                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>);

          })}
        </div>

        {/* About Content */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="">With years of experience serving the San Jose community, Khalsa Dental Care has built a reputation for providing exceptional dental care that combines advanced technology with a gentle, compassionate approach. The Exceptional Dentistry Registry wrote that our clinic is "an example of “Exceptional Patient Safety and Dental Office compliance!"

              </p>
              <p>
                We understand that visiting the dentist can be stressful for some patients. That's why we've created a comfortable, calming environment where you can feel at ease. Our team takes the time to explain procedures, answer questions, and ensure you're comfortable every step of the way.
              </p>
              <p>
                Whether you need a routine cleaning, restorative work, or cosmetic dentistry, we're here to help you achieve and maintain optimal oral health. Your smile is our passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;