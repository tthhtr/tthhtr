import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
