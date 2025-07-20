import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Printer, Heart, Gift, CreditCard, FileText, Calendar, Palette, Camera, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Cards',
      description: 'Elegant wedding invitations with premium finishes, gold foil printing, and custom designs that make your special day even more memorable.',
      features: ['Custom Designs', 'Gold Foil Printing', 'Premium Paper', 'Multiple Formats'],
      image: '/lovable-uploads/55ec85bb-9727-457c-97b1-ed74c8f216a0.png',
      color: 'from-pink-500 to-rose-500',
      price: 'Starting from ₹25 per card',
    },
    {
      icon: Gift,
      title: 'Birthday Cards',
      description: 'Personalized birthday cards and party invitations with vibrant colors and creative designs for all ages.',
      features: ['Personalized Messages', 'Colorful Designs', 'Multiple Sizes', 'Fast Delivery'],
      image: '/lovable-uploads/f306fb72-48f7-45b9-8108-3ba573c64e0a.png',
      color: 'from-purple-500 to-violet-500',
      price: 'Starting from ₹15 per card',
    },
    {
      icon: Gift,
      title: 'Dry Fruit Boxes',
      description: 'Custom packaging solutions for dry fruits with attractive designs perfect for festivals and gifting.',
      features: ['Food-Safe Materials', 'Custom Sizes', 'Attractive Designs', 'Bulk Orders'],
      image: '/lovable-uploads/c6502e7f-7ee5-4f7d-987c-fe812961383d.png',
      color: 'from-amber-500 to-orange-500',
      price: 'Starting from ₹45 per box',
    },
    {
      icon: FileText,
      title: 'Fancy Envelopes',
      description: 'Premium quality envelopes with decorative elements, perfect for wedding cards and special invitations.',
      features: ['Decorative Elements', 'Multiple Colors', 'Custom Printing', 'Bulk Pricing'],
      image: '/lovable-uploads/b5ccb44c-f767-460d-98a1-bfc374842a04.png',
      color: 'from-teal-500 to-cyan-500',
      price: 'Starting from ₹8 per envelope',
    },
    {
      icon: Printer,
      title: 'Flex Printing',
      description: 'High-quality large format printing for banners, hoardings, and outdoor advertising materials.',
      features: ['Weather Resistant', 'Vibrant Colors', 'Large Formats', 'Quick Turnaround'],
      image: '/lovable-uploads/bf96175b-5c3e-44f1-b4d8-2d5e082b02dd.png',
      color: 'from-green-500 to-emerald-500',
      price: 'Starting from ₹35 per sq ft',
    },
    {
      icon: Palette,
      title: 'Screen Printing',
      description: 'Professional screen printing services for t-shirts, bags, and promotional materials.',
      features: ['Durable Prints', 'Multiple Colors', 'Bulk Orders', 'Custom Designs'],
      image: '/lovable-uploads/55ec85bb-9727-457c-97b1-ed74c8f216a0.png',
      color: 'from-indigo-500 to-blue-500',
      price: 'Starting from ₹80 per piece',
    },
    {
      icon: FileText,
      title: 'Offset Printing',
      description: 'High-volume offset printing for books, magazines, brochures, and marketing materials.',
      features: ['High Volume', 'Cost Effective', 'Sharp Quality', 'Multiple Formats'],
      image: '/lovable-uploads/299c3fd0-c0fd-4abf-995d-a389990270a1.png',
      color: 'from-red-500 to-pink-500',
      price: 'Quote on demand',
    },
    {
      icon: FileText,
      title: 'Pamphlets & Posters',
      description: 'Eye-catching pamphlets and multicolor posters for marketing, events, and promotions.',
      features: ['Multicolor Printing', 'Various Sizes', 'Glossy/Matte Finish', 'Bulk Discounts'],
      image: '/lovable-uploads/bf96175b-5c3e-44f1-b4d8-2d5e082b02dd.png',
      color: 'from-yellow-500 to-amber-500',
      price: 'Starting from ₹5 per piece',
    },
    {
      icon: Camera,
      title: 'Digital Printing',
      description: 'High-quality digital printing for small batches, prototypes, and quick turnaround projects.',
      features: ['Quick Delivery', 'Small Batches', 'High Quality', 'Color Accuracy'],
      image: '/lovable-uploads/22597d3e-a89e-40d3-b573-d8ff21b2f7b9.png',
      color: 'from-cyan-500 to-blue-500',
      price: 'Starting from ₹3 per page',
    },
    {
      icon: CreditCard,
      title: 'Visiting Cards',
      description: 'Professional business cards and visiting cards with various finishes and paper options.',
      features: ['Premium Paper', 'Multiple Finishes', 'Quick Delivery', 'Design Service'],
      image: '/lovable-uploads/22597d3e-a89e-40d3-b573-d8ff21b2f7b9.png',
      color: 'from-blue-500 to-indigo-500',
      price: 'Starting from ₹3 per card',
    },
    {
      icon: CreditCard,
      title: 'ID Cards',
      description: 'Professional ID cards for employees, students, and organizations with security features.',
      features: ['Security Features', 'Durable Material', 'Custom Designs', 'Bulk Orders'],
      image: '/lovable-uploads/22597d3e-a89e-40d3-b573-d8ff21b2f7b9.png',
      color: 'from-gray-500 to-slate-500',
      price: 'Starting from ₹25 per card',
    },
    {
      icon: Calendar,
      title: 'Calendars',
      description: 'Custom calendars for corporate gifting and personal use with high-quality printing and binding.',
      features: ['Custom Designs', 'Multiple Formats', 'High-Quality Binding', 'Corporate Branding'],
      image: '/lovable-uploads/7951b787-64a0-4900-863c-66658904d1dd.png',
      color: 'from-emerald-500 to-teal-500',
      price: 'Starting from ₹120 per calendar',
    },
    {
      icon: FileText,
      title: 'School Diaries',
      description: 'Custom school diaries and planners with institutional branding and quality binding.',
      features: ['Institutional Branding', 'Durable Binding', 'Custom Pages', 'Bulk Orders'],
      image: '/lovable-uploads/210c5685-69f7-4ee1-abb4-3652821b0608.png',
      color: 'from-orange-500 to-red-500',
      price: 'Starting from ₹85 per diary',
    },
    {
      icon: FileText,
      title: 'Bill Books',
      description: 'Professional bill books and invoice books for businesses with carbonless copies.',
      features: ['Carbonless Copies', 'Sequential Numbering', 'Custom Headers', 'Multiple Formats'],
      image: '/lovable-uploads/29187546-7b1d-4994-a524-31b09cf6f1cc.png',
      color: 'from-violet-500 to-purple-500',
      price: 'Starting from ₹120 per book',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Premium Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Comprehensive printing solutions for all your personal and business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="card-elegant group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-30 transition-opacity`}></div>
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
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-3 w-3 text-accent mr-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link to="/quote" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-primary to-primary-light text-primary-foreground hover:shadow-[var(--shadow-button)] hover:scale-105 transition-all duration-300">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Working Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to get your printing project completed with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your requirements and get expert advice' },
              { step: '02', title: 'Design & Quote', description: 'Receive design mockups and detailed pricing' },
              { step: '03', title: 'Production', description: 'High-quality printing with strict quality control' },
              { step: '04', title: 'Delivery', description: 'On-time delivery of your finished products' },
            ].map((process, index) => (
              <div
                key={process.step}
                className="text-center relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-dark via-primary to-accent-dark text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a free quote for your printing needs. Our team is ready to help you create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;