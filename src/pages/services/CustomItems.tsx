import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Palette, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomItems = () => {
  const services = [
    {
      title: 'Custom Calendars',
      description: 'Personalized calendars for home, office, and promotional use',
      features: ['Wall & desk calendars', 'Custom photos/designs', 'Corporate branding', 'Various sizes available']
    },
    {
      title: 'School Diaries',
      description: 'Custom school diaries and student planners',
      features: ['Academic year planning', 'School branding', 'Student information pages', 'Durable binding']
    },
    {
      title: 'Custom Notebooks',
      description: 'Personalized notebooks for corporate and personal use',
      features: ['Custom covers', 'Various paper types', 'Spiral/bound options', 'Logo printing']
    },
    {
      title: 'Personalized Stationery',
      description: 'Custom stationery items tailored to your needs',
      features: ['Planners & organizers', 'Custom memo pads', 'Personalized notepads', 'Special occasions items']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Custom <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Items</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Personalized printing solutions that reflect your unique style and needs
            </p>
            <Link to="/quote">
              <Button className="btn-accent text-lg px-8 py-4">
                Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Custom Printing <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From calendars to school diaries, we create personalized items that serve your specific purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="card-elegant">
                <div className="mb-6">
                  <Palette className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <Star className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bring Your Ideas to Life
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create custom printed items that perfectly match your vision and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold">
                Get Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomItems;