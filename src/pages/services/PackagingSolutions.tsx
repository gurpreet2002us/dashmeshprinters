import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Package, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PackagingSolutions = () => {
  const services = [
    {
      title: 'Dry Fruit Boxes',
      description: 'Premium packaging for dry fruits with elegant designs and secure closure',
      features: ['Food-grade material', 'Custom sizes', 'Attractive designs', 'Secure packaging']
    },
    {
      title: 'Gift Boxes',
      description: 'Beautiful gift boxes for special occasions and corporate gifting',
      features: ['Luxury finishes', 'Custom branding', 'Various sizes', 'Premium materials']
    },
    {
      title: 'Product Packaging',
      description: 'Custom packaging solutions for retail products and e-commerce',
      features: ['Brand consistency', 'Durable materials', 'Cost-effective', 'Custom printing']
    },
    {
      title: 'Fancy Envelopes',
      description: 'Elegant envelopes for invitations, certificates, and special documents',
      features: ['Premium paper', 'Custom designs', 'Various sizes', 'Special finishes']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <Gift className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Packaging <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Custom packaging that protects your products and enhances your brand
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
              Our Packaging <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From luxury gift boxes to practical product packaging, we create solutions that make your products stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="card-elegant">
                <div className="mb-6">
                  <Package className="h-12 w-12 text-primary mb-4" />
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
            Ready to Package Your Success?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create packaging solutions that protect your products and enhance your brand presence.
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

export default PackagingSolutions;