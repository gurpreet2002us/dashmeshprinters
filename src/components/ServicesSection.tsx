import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Printer, Heart, Gift, CreditCard, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Cards',
      description: 'Elegant wedding invitations with premium finishes and custom designs',
      image: '/lovable-uploads/55ec85bb-9727-457c-97b1-ed74c8f216a0.png',
      color: 'from-pink-500 to-rose-500',
      link: '/services/wedding-cards',
    },
    {
      icon: CreditCard,
      title: 'Business Cards',
      description: 'Professional visiting cards and ID cards for your business needs',
      image: '/lovable-uploads/22597d3e-a89e-40d3-b573-d8ff21b2f7b9.png',
      color: 'from-blue-500 to-indigo-500',
      link: '/services/business-cards',
    },
    {
      icon: Printer,
      title: 'Flex Printing',
      description: 'Large format banners and flex printing for events and advertising',
      image: '/lovable-uploads/bf96175b-5c3e-44f1-b4d8-2d5e082b02dd.png',
      color: 'from-green-500 to-emerald-500',
      link: '/services/flex-printing',
    },
    {
      icon: Gift,
      title: 'Packaging Solutions',
      description: 'Custom dry fruit boxes and fancy envelopes for special occasions',
      image: '/lovable-uploads/c6502e7f-7ee5-4f7d-987c-fe812961383d.png',
      color: 'from-purple-500 to-violet-500',
      link: '/services/packaging-solutions',
    },
    {
      icon: FileText,
      title: 'Office Printing',
      description: 'Bill books, pamphlets, and office stationery printing',
      image: '/lovable-uploads/29187546-7b1d-4994-a524-31b09cf6f1cc.png',
      color: 'from-orange-500 to-amber-500',
      link: '/services/office-printing',
    },
    {
      icon: Calendar,
      title: 'Custom Items',
      description: 'Calendars, school diaries, and personalized printing solutions',
      image: '/lovable-uploads/7951b787-64a0-4900-863c-66658904d1dd.png',
      color: 'from-teal-500 to-cyan-500',
      link: '/services/custom-items',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional offset printing to modern digital solutions, we offer comprehensive 
            printing services tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.title}
                to={service.link || '/services'}
                className="card-elegant group cursor-pointer block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We specialize in creating unique printing solutions tailored to your specific requirements. 
              Let's discuss your project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-accent text-accent-foreground hover:bg-accent-light px-8 py-4 rounded-xl font-semibold">
                  Get Custom Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-black hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;