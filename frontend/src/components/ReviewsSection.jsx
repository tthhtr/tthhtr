import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockReviews } from '../data/mockData';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            With over 2,600 five-star Google reviews, our patients trust us for exceptional dental care.
          </p>
          
          {/* Google Rating Highlight */}
          <div className="inline-flex items-center gap-4 bg-blue-50 px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="border-l-2 border-blue-200 pl-4">
              <p className="text-2xl font-bold text-gray-900">4.0+</p>
              <p className="text-sm text-gray-600">2,600+ Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockReviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12 bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">
            Join Our Family of Satisfied Patients
          </h3>
          <p className="text-blue-100 mb-6">
            Experience the difference that compassionate, professional dental care can make.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Schedule Your Visit Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
