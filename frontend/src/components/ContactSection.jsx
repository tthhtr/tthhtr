import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactSection = () => {
  const businessHours = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' }];


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're conveniently located in San Jose and ready to serve you. Call us to schedule your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  2850 Quimby Rd #145<br />
                  San Jose, CA 95148
                </p>
                <a
                  href="https://maps.google.com/?q=2850+Quimby+Rd+145+San+Jose+CA+95148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block">

                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Phone className="h-7 w-7 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <a
                  href="tel:4082745000"
                  className="hover:text-blue-700 transition-colors !font-bold !text-2xl text-blue-600">(408) 274-5000


                </a>
                <p className="text-gray-600 mt-1">We're here to help!</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 ml-1">
                {businessHours.map((schedule, index) =>
                <div
                  key={index}
                  className="flex justify-between py-2 border-b border-gray-100 last:border-0">

                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span
                    className={`${
                    schedule.hours === 'Closed' ?
                    'text-gray-400' :
                    'text-gray-900 font-medium'}`
                    }>

                      {schedule.hours}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="rounded-xl overflow-hidden h-[500px]">
                <iframe
                  title="Khalsa Dental Care Location"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Khalsa+Dental+Care,2850+Quimby+Rd+145,San+Jose,CA+95148"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Ready to Schedule?</h3>
              <p className="text-blue-100 mb-6">
                Call us today to book your appointment. We look forward to seeing you!
              </p>
              <button
                onClick={() => window.location.href = 'tel:4082745000'}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2">

                <Phone className="h-5 w-5" />
                Call (408) 274-5000
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;