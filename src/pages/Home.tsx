import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import { Star, Quote, ArrowRight, CheckCircle, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest materials and latest printing technology to ensure exceptional quality.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced designers and printing professionals bring your vision to life.',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or attention to detail.',
    },
    {
      icon: CheckCircle,
      title: 'Affordable Pricing',
      description: 'Competitive rates for premium printing services that fit your budget.',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Bride',
      content: 'Dashmesh Printers and Card Gallery created the most beautiful wedding cards for us. The quality and design exceeded our expectations!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Professional service and excellent quality business cards. Highly recommend for all printing needs.',
      rating: 5,
    },
    {
      name: 'Anjali Gupta',
      role: 'Event Organizer',
      content: 'Amazing flex printing services for our corporate event. The banners looked fantastic and were delivered on time.',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-warm">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient">Dashmesh Printers and Card Gallery?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 15 years of experience, we're committed to delivering exceptional 
              printing solutions that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-card)]">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-elegant text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="h-12 w-12 text-sage mx-auto mb-6" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-dark via-primary to-sage-dark text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Whether you need wedding cards, business materials, or custom printing solutions, 
            we're here to help you create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-accent text-accent-foreground hover:bg-accent-light px-8 py-4 rounded-xl font-semibold text-lg shadow-[var(--shadow-button)]">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;