import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Beautiful Overlay Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-sage/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-13.8-11.2-25-25-25s-25 11.2-25 25 11.2 25 25 25 25-11.2 25-25zm25-25c0-13.8-11.2-25-25-25s-25 11.2-25 25 11.2 25 25 25 25-11.2 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        {/* Elegant Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-sage/10 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-accent-light/8 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Star className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium">Premium Printing Services</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Creativity Meets
              <span className="block text-transparent bg-gradient-to-r from-accent to-accent-light bg-clip-text">
                Quality Printing
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
              Your one-stop solution for premium printing and creative designs. 
              From wedding cards to business materials, we bring your vision to life.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                'Custom Designs',
                'Premium Quality',
                'Fast Delivery',
                'Affordable Pricing'
              ].map((feature) => (
                <div key={feature} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <CheckCircle className="h-4 w-4 text-sage-light mr-2" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button className="btn-hero group">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold">
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1000+</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-white/15 to-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Elegant Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-sage/15 rounded-2xl"></div>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15-15c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                  
                  <div className="text-center text-white relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center mb-6 mx-auto shadow-[var(--shadow-glow)] border-2 border-white/30">
                      <span className="text-4xl font-bold text-primary">DP</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Premium Printing</h3>
                    <p className="text-white/70">Quality You Can Trust</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Refined Floating Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent/25 to-accent-light/15 rounded-full animate-pulse blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-sage/20 to-sage-light/10 rounded-full animate-pulse blur-xl" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-10 w-24 h-24 bg-gradient-to-br from-accent-light/15 to-transparent rounded-full animate-pulse blur-lg" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/4 -left-8 w-20 h-20 bg-gradient-to-br from-sage-light/15 to-transparent rounded-full animate-pulse blur-lg" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-sm mt-2 text-white/70">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;